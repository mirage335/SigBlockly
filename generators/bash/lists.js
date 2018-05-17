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
 * @fileoverview Generating Python for list blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.bash.lists');

goog.require('Blockly.bash');


Blockly.bash['lists_create_empty'] = function(block) {
  // Create an empty list.
  return ['""', Blockly.bash.ORDER_ATOMIC];
};

Blockly.bash['lists_create_with'] = function(block) {
  // Create a list with any number of elements of any type.
  var elements = new Array(block.itemCount_);
  for (var i = 0; i < block.itemCount_; i++) {
    elements[i] = Blockly.bash.valueToCode(block, 'ADD' + i,
        Blockly.bash.ORDER_NONE) || 'None';
  }
  var code = '(' + elements.join(' ') + ')';
  return [code, Blockly.bash.ORDER_ATOMIC];
};

Blockly.bash['lists_repeat'] = function(block) {
  //Not implemented.
  return [ 'garbage', Blockly.c.ORDER_ATOMIC ];
  
  // Create a list with one element repeated.
  var item = Blockly.bash.valueToCode(block, 'ITEM',
      Blockly.bash.ORDER_NONE) || 'None';
  var times = Blockly.bash.valueToCode(block, 'NUM',
      Blockly.bash.ORDER_MULTIPLICATIVE) || '0';
  var code = '[' + item + '] * ' + times;
  return [code, Blockly.bash.ORDER_MULTIPLICATIVE];
};

Blockly.bash['lists_length'] = function(block) {
  //Not implemented.
  return [ 'garbage', Blockly.c.ORDER_ATOMIC ];
  
  // String or array length.
  var list = Blockly.bash.valueToCode(block, 'VALUE',
      Blockly.bash.ORDER_NONE) || '[]';
  return ['len(' + list + ')', Blockly.bash.ORDER_FUNCTION_CALL];
};

Blockly.bash['lists_isEmpty'] = function(block) {
  //Not implemented.
  return [ 'garbage', Blockly.c.ORDER_ATOMIC ];
  
  // Is the string null or array empty?
  var list = Blockly.bash.valueToCode(block, 'VALUE',
      Blockly.bash.ORDER_NONE) || '[]';
  var code = 'not len(' + list + ')';
  return [code, Blockly.bash.ORDER_LOGICAL_NOT];
};

Blockly.bash['lists_indexOf'] = function(block) {
  //Not implemented.
  return [ 'garbage', Blockly.c.ORDER_ATOMIC ];
  
  // Find an item in the list.
  var item = Blockly.bash.valueToCode(block, 'FIND',
      Blockly.bash.ORDER_NONE) || '[]';
  var list = Blockly.bash.valueToCode(block, 'VALUE',
      Blockly.bash.ORDER_NONE) || '\'\'';
  if (block.workspace.options.oneBasedIndex) {
    var errorIndex = ' 0';
    var firstIndexAdjustment = ' + 1';
    var lastIndexAdjustment = '';
  } else {
    var errorIndex = ' -1';
    var firstIndexAdjustment = '';
    var lastIndexAdjustment = ' - 1';
  }
  if (block.getFieldValue('END') == 'FIRST') {
    var functionName = Blockly.bash.provideFunction_(
        'first_index',
        ['def ' + Blockly.bash.FUNCTION_NAME_PLACEHOLDER_ +
            '(my_list, elem):',
         '  try: index = my_list.index(elem)' + firstIndexAdjustment,
         '  except: index =' + errorIndex,
         '  return index']);
    var code = functionName + '(' + list + ', ' + item + ')';
    return [code, Blockly.bash.ORDER_FUNCTION_CALL];
  }
  var functionName = Blockly.bash.provideFunction_(
      'last_index',
      ['def ' + Blockly.bash.FUNCTION_NAME_PLACEHOLDER_ + '(my_list, elem):',
       '  try: index = len(my_list) - my_list[::-1].index(elem)' +
         lastIndexAdjustment,
       '  except: index =' + errorIndex,
       '  return index']);
  var code = functionName + '(' + list + ', ' + item + ')';
  return [code, Blockly.bash.ORDER_FUNCTION_CALL];
};

Blockly.bash['lists_getIndex'] = function(block) {
  //Not implemented.
  return [ 'garbage', Blockly.c.ORDER_ATOMIC ];
  
  // Get element at index.
  // Note: Until January 2013 this block did not have MODE or WHERE inputs.
  var mode = block.getFieldValue('MODE') || 'GET';
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var listOrder = (where == 'RANDOM') ? Blockly.bash.ORDER_NONE :
      Blockly.bash.ORDER_MEMBER;
  var list = Blockly.bash.valueToCode(block, 'VALUE', listOrder) || '[]';

  switch (where) {
    case 'FIRST':
      if (mode == 'GET') {
        var code = list + '[0]';
        return [code, Blockly.bash.ORDER_MEMBER];
      } else if (mode == 'GET_REMOVE') {
        var code = list + '.pop(0)';
        return [code, Blockly.bash.ORDER_FUNCTION_CALL];
      } else if (mode == 'REMOVE') {
        return list + '.pop(0)\n';
      }
      break;
    case 'LAST':
      if (mode == 'GET') {
        var code = list + '[-1]';
        return [code, Blockly.bash.ORDER_MEMBER];
      } else if (mode == 'GET_REMOVE') {
        var code = list + '.pop()';
        return [code, Blockly.bash.ORDER_FUNCTION_CALL];
      } else if (mode == 'REMOVE') {
        return list + '.pop()\n';
      }
      break;
    case 'FROM_START':
      var at = Blockly.bash.getAdjustedInt(block, 'AT');
      if (mode == 'GET') {
        var code = list + '[' + at + ']';
        return [code, Blockly.bash.ORDER_MEMBER];
      } else if (mode == 'GET_REMOVE') {
        var code = list + '.pop(' + at + ')';
        return [code, Blockly.bash.ORDER_FUNCTION_CALL];
      } else if (mode == 'REMOVE') {
        return list + '.pop(' + at + ')\n';
      }
      break;
    case'FROM_END':
      var at = Blockly.bash.getAdjustedInt(block, 'AT', 1, true);
      if (mode == 'GET') {
        var code = list + '[' + at + ']';
        return [code, Blockly.bash.ORDER_MEMBER];
      } else if (mode == 'GET_REMOVE') {
        var code = list + '.pop(' + at + ')';
        return [code, Blockly.bash.ORDER_FUNCTION_CALL];
      } else if (mode == 'REMOVE') {
        return list + '.pop(' + at + ')\n';
      }
      break;
    case 'RANDOM':
      Blockly.bash.definitions_['import_random'] = 'import random';
      if (mode == 'GET') {
        code = 'random.choice(' + list + ')';
        return [code, Blockly.bash.ORDER_FUNCTION_CALL];
      } else {
        var functionName = Blockly.bash.provideFunction_(
            'lists_remove_random_item',
            ['def ' + Blockly.bash.FUNCTION_NAME_PLACEHOLDER_ + '(myList):',
              '  x = int(random.random() * len(myList))',
              '  return myList.pop(x)']);
        code = functionName + '(' + list + ')';
        if (mode == 'GET_REMOVE') {
          return [code, Blockly.bash.ORDER_FUNCTION_CALL];
        } else if (mode == 'REMOVE') {
          return code + '\n';
        }
      }
      break;
  }
  throw 'Unhandled combination (lists_getIndex).';
};

Blockly.bash['lists_setIndex'] = function(block) {
  //Not implemented.
  return [ 'garbage', Blockly.c.ORDER_ATOMIC ];
  
  // Set element at index.
  // Note: Until February 2013 this block did not have MODE or WHERE inputs.
  var list = Blockly.bash.valueToCode(block, 'LIST',
      Blockly.bash.ORDER_MEMBER) || '[]';
  var mode = block.getFieldValue('MODE') || 'GET';
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var value = Blockly.bash.valueToCode(block, 'TO',
      Blockly.bash.ORDER_NONE) || 'None';
  // Cache non-trivial values to variables to prevent repeated look-ups.
  // Closure, which accesses and modifies 'list'.
  function cacheList() {
    if (list.match(/^\w+$/)) {
      return '';
    }
    var listVar = Blockly.bash.variableDB_.getDistinctName(
        'tmp_list', Blockly.Variables.NAME_TYPE);
    var code = listVar + ' = ' + list + '\n';
    list = listVar;
    return code;
  }

  switch (where) {
    case 'FIRST':
      if (mode == 'SET') {
        return list + '[0] = ' + value + '\n';
      } else if (mode == 'INSERT') {
        return list + '.insert(0, ' + value + ')\n';
      }
      break;
    case 'LAST':
        if (mode == 'SET') {
          return list + '[-1] = ' + value + '\n';
        } else if (mode == 'INSERT') {
          return list + '.append(' + value + ')\n';
        }
      break;
    case 'FROM_START':
      var at = Blockly.bash.getAdjustedInt(block, 'AT');
        if (mode == 'SET') {
          return list + '[' + at + '] = ' + value + '\n';
        } else if (mode == 'INSERT') {
          return list + '.insert(' + at + ', ' + value + ')\n';
        }
      break;
    case 'FROM_END':
      var at = Blockly.bash.getAdjustedInt(block, 'AT', 1, true);
        if (mode == 'SET') {
          return list + '[' + at + '] = ' + value + '\n';
        } else if (mode == 'INSERT') {
          return list + '.insert(' + at + ', ' + value + ')\n';
        }
      break;
    case 'RANDOM':
        Blockly.bash.definitions_['import_random'] = 'import random';
        var code = cacheList();
        var xVar = Blockly.bash.variableDB_.getDistinctName(
            'tmp_x', Blockly.Variables.NAME_TYPE);
        code += xVar + ' = int(random.random() * len(' + list + '))\n';
        if (mode == 'SET') {
          code += list + '[' + xVar + '] = ' + value + '\n';
          return code;
        } else if (mode == 'INSERT') {
          code += list + '.insert(' + xVar + ', ' + value + ')\n';
          return code;
        }
      break;
  }
  throw 'Unhandled combination (lists_setIndex).';
};

Blockly.bash['lists_getSublist'] = function(block) {
  //Not implemented.
  return [ 'garbage', Blockly.c.ORDER_ATOMIC ];
  
  // Get sublist.
  var list = Blockly.bash.valueToCode(block, 'LIST',
      Blockly.bash.ORDER_MEMBER) || '[]';
  var where1 = block.getFieldValue('WHERE1');
  var where2 = block.getFieldValue('WHERE2');
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
      throw 'Unhandled option (lists_getSublist)';
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
      throw 'Unhandled option (lists_getSublist)';
  }
  var code = list + '[' + at1 + ' : ' + at2 + ']';
  return [code, Blockly.bash.ORDER_MEMBER];
};

Blockly.bash['lists_sort'] = function(block) {
  //Not implemented.
  return [ 'garbage', Blockly.c.ORDER_ATOMIC ];
  
  // Block for sorting a list.
  var list = (Blockly.bash.valueToCode(block, 'LIST',
      Blockly.bash.ORDER_NONE) || '[]');
  var type = block.getFieldValue('TYPE');
  var reverse = block.getFieldValue('DIRECTION') === '1' ? 'False' : 'True';
  var sortFunctionName = Blockly.bash.provideFunction_('lists_sort',
  ['def ' + Blockly.bash.FUNCTION_NAME_PLACEHOLDER_ +
      '(my_list, type, reverse):',
    '  def try_float(s):',
    '    try:',
    '      return float(s)',
    '    except:',
    '      return 0',
    '  key_funcs = {',
    '    "NUMERIC": try_float,',
    '    "TEXT": str,',
    '    "IGNORE_CASE": lambda s: str(s).lower()',
    '  }',
    '  key_func = key_funcs[type]',
    '  list_cpy = list(my_list)', // Clone the list.
    '  return sorted(list_cpy, key=key_func, reverse=reverse)'
  ]);

  var code = sortFunctionName +
      '(' + list + ', "' + type + '", ' + reverse + ')';
  return [code, Blockly.bash.ORDER_FUNCTION_CALL];
};

Blockly.bash['lists_split'] = function(block) {
  //Not implemented.
  return [ 'garbage', Blockly.c.ORDER_ATOMIC ];
  
  // Block for splitting text into a list, or joining a list into text.
  var mode = block.getFieldValue('MODE');
  if (mode == 'SPLIT') {
    var value_input = Blockly.bash.valueToCode(block, 'INPUT',
        Blockly.bash.ORDER_MEMBER) || '\'\'';
    var value_delim = Blockly.bash.valueToCode(block, 'DELIM',
        Blockly.bash.ORDER_NONE);
    var code = value_input + '.split(' + value_delim + ')';
  } else if (mode == 'JOIN') {
    var value_input = Blockly.bash.valueToCode(block, 'INPUT',
        Blockly.bash.ORDER_NONE) || '[]';
    var value_delim = Blockly.bash.valueToCode(block, 'DELIM',
        Blockly.bash.ORDER_MEMBER) || '\'\'';
    var code = value_delim + '.join(' + value_input + ')';
  } else {
    throw 'Unknown mode: ' + mode;
  }
  return [code, Blockly.bash.ORDER_FUNCTION_CALL];
};

Blockly.bash['lists_reverse'] = function(block) {
  //Not implemented.
  return [ 'garbage', Blockly.c.ORDER_ATOMIC ];
  
  // Block for reversing a list.
  var list = Blockly.bash.valueToCode(block, 'LIST',
      Blockly.bash.ORDER_NONE) || '[]';
  var code = 'list(reversed(' + list + '))';
  return [code, Blockly.bash.ORDER_FUNCTION_CALL];
};