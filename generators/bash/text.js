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

goog.provide('Blockly.bash.texts');

goog.require('Blockly.bash');


Blockly.bash['text'] = function(block) {
  // Text value.
  var code = Blockly.bash.quote_(block.getFieldValue('TEXT'));
  return [code, Blockly.bash.ORDER_ATOMIC];
};

Blockly.bash['text_join'] = function(block) {
  // Create a string made up of any number of elements of any type.
  //Should we allow joining by '-' or ',' or any other characters?
  switch (block.itemCount_) {
    case 0:
      return ['\'\'', Blockly.bash.ORDER_ATOMIC];
      break;
    case 1:
      var element = Blockly.bash.valueToCode(block, 'ADD0',
              Blockly.bash.ORDER_NONE) || '\'\'';
      var code = 'str(' + element + ')';
      return [code, Blockly.bash.ORDER_FUNCTION_CALL];
      break;
    case 2:
      var element0 = Blockly.bash.valueToCode(block, 'ADD0',
              Blockly.bash.ORDER_NONE) || '\'\'';
      var element1 = Blockly.bash.valueToCode(block, 'ADD1',
              Blockly.bash.ORDER_NONE) || '\'\'';
      var code = 'str(' + element0 + ') + str(' + element1 + ')';
      return [code, Blockly.bash.ORDER_ADDITIVE];
      break;
    default:
      var elements = [];
      for (var i = 0; i < block.itemCount_; i++) {
        elements[i] = Blockly.bash.valueToCode(block, 'ADD' + i,
                Blockly.bash.ORDER_NONE) || '\'\'';
      }
      var tempVar = Blockly.bash.variableDB_.getDistinctName('x',
          Blockly.Variables.NAME_TYPE);
      var code = '\'\'.join([str(' + tempVar + ') for ' + tempVar + ' in [' +
          elements.join(', ') + ']])';
      return [code, Blockly.bash.ORDER_FUNCTION_CALL];
  }
};

Blockly.bash['text_append'] = function(block) {
  // Append to a variable in place.
  var varName = Blockly.bash.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  var value = Blockly.bash.valueToCode(block, 'TEXT',
      Blockly.bash.ORDER_NONE) || '\'\'';
  return varName + ' = str(' + varName + ') + str(' + value + ')\n';
};

Blockly.bash['text_length'] = function(block) {
  // Is the string null or array empty?
  var text = Blockly.bash.valueToCode(block, 'VALUE',
      Blockly.bash.ORDER_NONE) || '\'\'';
  return ['len(' + text + ')', Blockly.bash.ORDER_FUNCTION_CALL];
};

Blockly.bash['text_isEmpty'] = function(block) {
  // Is the string null or array empty?
  var text = Blockly.bash.valueToCode(block, 'VALUE',
      Blockly.bash.ORDER_NONE) || '\'\'';
  var code = 'not len(' + text + ')';
  return [code, Blockly.bash.ORDER_LOGICAL_NOT];
};

Blockly.bash['text_indexOf'] = function(block) {
  // Search the text for a substring.
  // Should we allow for non-case sensitive???
  var operator = block.getFieldValue('END') == 'FIRST' ? 'find' : 'rfind';
  var substring = Blockly.bash.valueToCode(block, 'FIND',
      Blockly.bash.ORDER_NONE) || '\'\'';
  var text = Blockly.bash.valueToCode(block, 'VALUE',
      Blockly.bash.ORDER_MEMBER) || '\'\'';
  var code = text + '.' + operator + '(' + substring + ')';
  if (block.workspace.options.oneBasedIndex) {
    return [code + ' + 1', Blockly.bash.ORDER_ADDITIVE];
  }
  return [code, Blockly.bash.ORDER_FUNCTION_CALL];
};

Blockly.bash['text_charAt'] = function(block) {
  // Get letter at index.
  // Note: Until January 2013 this block did not have the WHERE input.
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var text = Blockly.bash.valueToCode(block, 'VALUE',
      Blockly.bash.ORDER_MEMBER) || '\'\'';
  switch (where) {
    case 'FIRST':
      var code = text + '[0]';
      return [code, Blockly.bash.ORDER_MEMBER];
    case 'LAST':
      var code = text + '[-1]';
      return [code, Blockly.bash.ORDER_MEMBER];
    case 'FROM_START':
      var at = Blockly.bash.getAdjustedInt(block, 'AT');
      var code = text + '[' + at + ']';
      return [code, Blockly.bash.ORDER_MEMBER];
    case 'FROM_END':
      var at = Blockly.bash.getAdjustedInt(block, 'AT', 1, true);
      var code = text + '[' + at + ']';
      return [code, Blockly.bash.ORDER_MEMBER];
    case 'RANDOM':
      Blockly.bash.definitions_['import_random'] = 'import random';
      var functionName = Blockly.bash.provideFunction_(
          'text_random_letter',
          ['def ' + Blockly.bash.FUNCTION_NAME_PLACEHOLDER_ + '(text):',
           '  x = int(random.random() * len(text))',
           '  return text[x];']);
      code = functionName + '(' + text + ')';
      return [code, Blockly.bash.ORDER_FUNCTION_CALL];
  }
  throw 'Unhandled option (text_charAt).';
};

Blockly.bash['text_getSubstring'] = function(block) {
  // Get substring.
  var where1 = block.getFieldValue('WHERE1');
  var where2 = block.getFieldValue('WHERE2');
  var text = Blockly.bash.valueToCode(block, 'STRING',
      Blockly.bash.ORDER_MEMBER) || '\'\'';
  switch (where1) {
    case 'FROM_START':
      var at1 = Blockly.bash.getAdjustedInt(block, 'AT1');
      if (at1 == '0') {
        at1 = '';
      }
      break;
    case 'FROM_END':
      var at1 = Blockly.bash.getAdjustedInt(block, 'AT1', 1, true);
      break;
    case 'FIRST':
      var at1 = '';
      break;
    default:
      throw 'Unhandled option (text_getSubstring)';
  }
  switch (where2) {
    case 'FROM_START':
      var at2 = Blockly.bash.getAdjustedInt(block, 'AT2', 1);
      break;
    case 'FROM_END':
      var at2 = Blockly.bash.getAdjustedInt(block, 'AT2', 0, true);
      // Ensure that if the result calculated is 0 that sub-sequence will
      // include all elements as expected.
      if (!Blockly.isNumber(String(at2))) {
        Blockly.bash.definitions_['import_sys'] = 'import sys';
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
  return [code, Blockly.bash.ORDER_MEMBER];
};

Blockly.bash['text_changeCase'] = function(block) {
  // Change capitalization.
  var OPERATORS = {
    'UPPERCASE': '.upper()',
    'LOWERCASE': '.lower()',
    'TITLECASE': '.title()'
  };
  var operator = OPERATORS[block.getFieldValue('CASE')];
  var text = Blockly.bash.valueToCode(block, 'TEXT',
      Blockly.bash.ORDER_MEMBER) || '\'\'';
  var code = text + operator;
  return [code, Blockly.bash.ORDER_FUNCTION_CALL];
};

Blockly.bash['text_trim'] = function(block) {
  // Trim spaces.
  var OPERATORS = {
    'LEFT': '.lstrip()',
    'RIGHT': '.rstrip()',
    'BOTH': '.strip()'
  };
  var operator = OPERATORS[block.getFieldValue('MODE')];
  var text = Blockly.bash.valueToCode(block, 'TEXT',
      Blockly.bash.ORDER_MEMBER) || '\'\'';
  var code = text + operator;
  return [code, Blockly.bash.ORDER_FUNCTION_CALL];
};

Blockly.bash['text_print'] = function(block) {
  // Print statement.
  var msg = Blockly.bash.valueToCode(block, 'TEXT',
      Blockly.bash.ORDER_NONE) || '\'\'';
  return 'echo ' + msg + '\n';
};

Blockly.bash['text_prompt_ext'] = function(block) {
  if (block.getField('TEXT')) {
    // Internal message.
    var msg = Blockly.bash.quote_(block.getFieldValue('TEXT'));
  } else {
    // External message.
    var msg = Blockly.bash.valueToCode(block, 'TEXT',
        Blockly.bash.ORDER_NONE) || '\'\'';
  }
  var code = 'echo ' + msg + '; ' + 'head -n1';
  return [code, Blockly.bash.ORDER_FUNCTION_CALL];
};

Blockly.bash['text_prompt'] = Blockly.bash['text_prompt_ext'];

Blockly.bash['text_count'] = function(block) {
  var text = Blockly.bash.valueToCode(block, 'TEXT',
      Blockly.bash.ORDER_MEMBER) || '\'\'';
  var sub = Blockly.bash.valueToCode(block, 'SUB',
      Blockly.bash.ORDER_NONE) || '\'\'';
  var code = text + '.count(' + sub + ')';
  return [code, Blockly.bash.ORDER_MEMBER];
};

Blockly.bash['text_replace'] = function(block) {
  var text = Blockly.bash.valueToCode(block, 'TEXT',
      Blockly.bash.ORDER_MEMBER) || '\'\'';
  var from = Blockly.bash.valueToCode(block, 'FROM',
      Blockly.bash.ORDER_NONE) || '\'\'';
  var to = Blockly.bash.valueToCode(block, 'TO',
      Blockly.bash.ORDER_NONE) || '\'\'';
  var code = text + '.replace(' + from + ', ' + to + ')';
  return [code, Blockly.bash.ORDER_MEMBER];
};

Blockly.bash['text_reverse'] = function(block) {
  var text = Blockly.bash.valueToCode(block, 'TEXT',
      Blockly.bash.ORDER_MEMBER) || '\'\'';
  var code = text + '[::-1]';
  return [code, Blockly.bash.ORDER_MEMBER];
};
