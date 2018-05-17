/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Python for text blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.c.texts');

goog.require('Blockly.c');


Blockly.c['text'] = function(block) {
  // Text value.
  var code = Blockly.c.quote_(block.getFieldValue('TEXT'));
  return [code, Blockly.c.ORDER_ATOMIC];
};

Blockly.c['text_join'] = function(block) {
  // Create a string made up of any number of elements of any type.
  //Should we allow joining by '-' or ',' or any other characters?
  switch (block.itemCount_) {
    case 0:
      return ['\'\'', Blockly.c.ORDER_ATOMIC];
      break;
    case 1:
      var element = Blockly.c.valueToCode(block, 'ADD0',
              Blockly.c.ORDER_NONE) || '\'\'';
      var code = 'str(' + element + ')';
      return [code, Blockly.c.ORDER_FUNCTION_CALL];
      break;
    case 2:
      var element0 = Blockly.c.valueToCode(block, 'ADD0',
              Blockly.c.ORDER_NONE) || '\'\'';
      var element1 = Blockly.c.valueToCode(block, 'ADD1',
              Blockly.c.ORDER_NONE) || '\'\'';
      var code = 'str(' + element0 + ') + str(' + element1 + ')';
      return [code, Blockly.c.ORDER_ADDITIVE];
      break;
    default:
      var elements = [];
      for (var i = 0; i < block.itemCount_; i++) {
        elements[i] = Blockly.c.valueToCode(block, 'ADD' + i,
                Blockly.c.ORDER_NONE) || '\'\'';
      }
      var tempVar = Blockly.c.variableDB_.getDistinctName('x',
          Blockly.Variables.NAME_TYPE);
      var code = '\'\'.join([str(' + tempVar + ') for ' + tempVar + ' in [' +
          elements.join(', ') + ']])';
      return [code, Blockly.c.ORDER_FUNCTION_CALL];
  }
};

Blockly.c['text_append'] = function(block) {
  // Append to a variable in place.
  var varName = Blockly.c.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  var value = Blockly.c.valueToCode(block, 'TEXT',
      Blockly.c.ORDER_NONE) || '\'\'';
  return varName + ' = str(' + varName + ') + str(' + value + ')\n';
};

Blockly.c['text_length'] = function(block) {
  // Is the string null or array empty?
  var text = Blockly.c.valueToCode(block, 'VALUE',
      Blockly.c.ORDER_NONE) || '\'\'';
  return ['len(' + text + ')', Blockly.c.ORDER_FUNCTION_CALL];
};

Blockly.c['text_isEmpty'] = function(block) {
  // Is the string null or array empty?
  var text = Blockly.c.valueToCode(block, 'VALUE',
      Blockly.c.ORDER_NONE) || '\'\'';
  var code = 'not len(' + text + ')';
  return [code, Blockly.c.ORDER_LOGICAL_NOT];
};

Blockly.c['text_indexOf'] = function(block) {
  // Search the text for a substring.
  // Should we allow for non-case sensitive???
  var operator = block.getFieldValue('END') == 'FIRST' ? 'find' : 'rfind';
  var substring = Blockly.c.valueToCode(block, 'FIND',
      Blockly.c.ORDER_NONE) || '\'\'';
  var text = Blockly.c.valueToCode(block, 'VALUE',
      Blockly.c.ORDER_MEMBER) || '\'\'';
  var code = text + '.' + operator + '(' + substring + ')';
  if (block.workspace.options.oneBasedIndex) {
    return [code + ' + 1', Blockly.c.ORDER_ADDITIVE];
  }
  return [code, Blockly.c.ORDER_FUNCTION_CALL];
};

Blockly.c['text_charAt'] = function(block) {
  // Get letter at index.
  // Note: Until January 2013 this block did not have the WHERE input.
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var text = Blockly.c.valueToCode(block, 'VALUE',
      Blockly.c.ORDER_MEMBER) || '\'\'';
  switch (where) {
    case 'FIRST':
      var code = text + '[0]';
      return [code, Blockly.c.ORDER_MEMBER];
    case 'LAST':
      var code = text + '[-1]';
      return [code, Blockly.c.ORDER_MEMBER];
    case 'FROM_START':
      var at = Blockly.c.getAdjustedInt(block, 'AT');
      var code = text + '[' + at + ']';
      return [code, Blockly.c.ORDER_MEMBER];
    case 'FROM_END':
      var at = Blockly.c.getAdjustedInt(block, 'AT', 1, true);
      var code = text + '[' + at + ']';
      return [code, Blockly.c.ORDER_MEMBER];
    case 'RANDOM':
      Blockly.c.definitions_['import_random'] = 'import random';
      var functionName = Blockly.c.provideFunction_(
          'text_random_letter',
          ['def ' + Blockly.c.FUNCTION_NAME_PLACEHOLDER_ + '(text):',
           '  x = int(random.random() * len(text))',
           '  return text[x];']);
      code = functionName + '(' + text + ')';
      return [code, Blockly.c.ORDER_FUNCTION_CALL];
  }
  throw 'Unhandled option (text_charAt).';
};

Blockly.c['text_getSubstring'] = function(block) {
  // Get substring.
  var where1 = block.getFieldValue('WHERE1');
  var where2 = block.getFieldValue('WHERE2');
  var text = Blockly.c.valueToCode(block, 'STRING',
      Blockly.c.ORDER_MEMBER) || '\'\'';
  switch (where1) {
    case 'FROM_START':
      var at1 = Blockly.c.getAdjustedInt(block, 'AT1');
      if (at1 == '0') {
        at1 = '';
      }
      break;
    case 'FROM_END':
      var at1 = Blockly.c.getAdjustedInt(block, 'AT1', 1, true);
      break;
    case 'FIRST':
      var at1 = '';
      break;
    default:
      throw 'Unhandled option (text_getSubstring)';
  }
  switch (where2) {
    case 'FROM_START':
      var at2 = Blockly.c.getAdjustedInt(block, 'AT2', 1);
      break;
    case 'FROM_END':
      var at2 = Blockly.c.getAdjustedInt(block, 'AT2', 0, true);
      // Ensure that if the result calculated is 0 that sub-sequence will
      // include all elements as expected.
      if (!Blockly.isNumber(String(at2))) {
        Blockly.c.definitions_['import_sys'] = 'import sys';
        at2 += ' or sys.maxsize';
      } else if (at2 == '0') {
        at2 = '';
      }
      break;
    case 'LAST':
      var at2 = '';
      break;
    default:
      throw 'Unhandled option (text_getSubstring)';
  }
  var code = text + '[' + at1 + ' : ' + at2 + ']';
  return [code, Blockly.c.ORDER_MEMBER];
};

Blockly.c['text_changeCase'] = function(block) {
  // Change capitalization.
  var OPERATORS = {
    'UPPERCASE': '.upper()',
    'LOWERCASE': '.lower()',
    'TITLECASE': '.title()'
  };
  var operator = OPERATORS[block.getFieldValue('CASE')];
  var text = Blockly.c.valueToCode(block, 'TEXT',
      Blockly.c.ORDER_MEMBER) || '\'\'';
  var code = text + operator;
  return [code, Blockly.c.ORDER_FUNCTION_CALL];
};

Blockly.c['text_trim'] = function(block) {
  // Trim spaces.
  var OPERATORS = {
    'LEFT': '.lstrip()',
    'RIGHT': '.rstrip()',
    'BOTH': '.strip()'
  };
  var operator = OPERATORS[block.getFieldValue('MODE')];
  var text = Blockly.c.valueToCode(block, 'TEXT',
      Blockly.c.ORDER_MEMBER) || '\'\'';
  var code = text + operator;
  return [code, Blockly.c.ORDER_FUNCTION_CALL];
};

Blockly.c['text_print'] = function(block) {
  // Print statement.
  var msg = Blockly.c.valueToCode(block, 'TEXT',
      Blockly.c.ORDER_NONE) || '\'\'';
  return 'printf(" + msg + ");\n';
};

Blockly.c['text_prompt_ext'] = function(block) {
  if (block.getField('TEXT')) {
    // Internal message.
    var msg = Blockly.c.quote_(block.getFieldValue('TEXT'));
  } else {
    // External message.
    var msg = Blockly.c.valueToCode(block, 'TEXT',
        Blockly.c.ORDER_NONE) || '\'\'';
  }
  var code = '{ printf(' + msg + '); ' + 'getchar(); }';
  return [code, Blockly.c.ORDER_FUNCTION_CALL];
};

Blockly.c['text_prompt'] = Blockly.c['text_prompt_ext'];

Blockly.c['text_count'] = function(block) {
  var text = Blockly.c.valueToCode(block, 'TEXT',
      Blockly.c.ORDER_MEMBER) || '\'\'';
  var sub = Blockly.c.valueToCode(block, 'SUB',
      Blockly.c.ORDER_NONE) || '\'\'';
  var code = text + '.count(' + sub + ')';
  return [code, Blockly.c.ORDER_MEMBER];
};

Blockly.c['text_replace'] = function(block) {
  var text = Blockly.c.valueToCode(block, 'TEXT',
      Blockly.c.ORDER_MEMBER) || '\'\'';
  var from = Blockly.c.valueToCode(block, 'FROM',
      Blockly.c.ORDER_NONE) || '\'\'';
  var to = Blockly.c.valueToCode(block, 'TO',
      Blockly.c.ORDER_NONE) || '\'\'';
  var code = text + '.replace(' + from + ', ' + to + ')';
  return [code, Blockly.c.ORDER_MEMBER];
};

Blockly.c['text_reverse'] = function(block) {
  var text = Blockly.c.valueToCode(block, 'TEXT',
      Blockly.c.ORDER_MEMBER) || '\'\'';
  var code = text + '[::-1]';
  return [code, Blockly.c.ORDER_MEMBER];
};
