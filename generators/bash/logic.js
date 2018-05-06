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
 * @fileoverview Generating Python for logic blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.bash.logic');

goog.require('Blockly.bash');


Blockly.bash['controls_if'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var code = '', branchCode, conditionCode;
  do {
    conditionCode = Blockly.bash.valueToCode(block, 'IF' + n,
        Blockly.bash.ORDER_NONE) || 'false';
    branchCode = Blockly.bash.statementToCode(block, 'DO' + n) ||
        Blockly.bash.PASS;
    code += (n == 0 ? 'if ' : 'elif ' ) + conditionCode + '\n' + (n == 0 ? 'then \n' : '' ) + branchCode;

    ++n;
  } while (block.getInput('IF' + n));

  if (block.getInput('ELSE')) {
    branchCode = Blockly.bash.statementToCode(block, 'ELSE') ||
        Blockly.bash.PASS;
    code += 'else\n' + branchCode;
  }
  code += 'fi'
  return code;
};

Blockly.bash['controls_ifelse'] = Blockly.bash['controls_if'];

Blockly.bash['logic_compare'] = function(block) {
  // Comparison operator.
  var OPERATORS = {
    'EQ': '==',
    'NEQ': '!=',
    'LT': '-lt',
    'LTE': '-le',
    'GT': '-gt',
    'GTE': '-ge'
  };
  var operator = OPERATORS[block.getFieldValue('OP')];
  var order = Blockly.bash.ORDER_RELATIONAL;
  var argument0 = Blockly.bash.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.bash.valueToCode(block, 'B', order) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.bash['logic_operation'] = function(block) {
  // Operations 'and', 'or'.
  var operator = (block.getFieldValue('OP') == 'AND') ? '&&' : '||';
  var order = (operator == 'and') ? Blockly.bash.ORDER_LOGICAL_AND :
      Blockly.bash.ORDER_LOGICAL_OR;
  var argument0 = Blockly.bash.valueToCode(block, 'A', order);
  var argument1 = Blockly.bash.valueToCode(block, 'B', order);
  if (!argument0 && !argument1) {
    // If there are no arguments, then the return value is false.
    argument0 = 'false';
    argument1 = 'false';
  } else {
    // Single missing arguments have no effect on the return value.
    var defaultArgument = (operator == '&&') ? 'true' : 'false';
    if (!argument0) {
      argument0 = defaultArgument;
    }
    if (!argument1) {
      argument1 = defaultArgument;
    }
  }
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.bash['logic_negate'] = function(block) {
  // Negation.
  var argument0 = Blockly.bash.valueToCode(block, 'BOOL',
      Blockly.bash.ORDER_LOGICAL_NOT) || 'true';
  var code = '! ' + argument0;
  return [code, Blockly.bash.ORDER_LOGICAL_NOT];
};

Blockly.bash['logic_boolean'] = function(block) {
  // Boolean values true and false.
  var code = (block.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
  return [code, Blockly.bash.ORDER_ATOMIC];
};

Blockly.bash['logic_null'] = function(block) {
  // Null data type.
  return ['""', Blockly.bash.ORDER_ATOMIC];
};

Blockly.bash['logic_ternary'] = function(block) {
  // Ternary operator.
  var value_if = Blockly.bash.valueToCode(block, 'IF',
      Blockly.bash.ORDER_CONDITIONAL) || 'false';
  var value_then = Blockly.bash.valueToCode(block, 'THEN',
      Blockly.bash.ORDER_CONDITIONAL) || 'false';
  var value_else = Blockly.bash.valueToCode(block, 'ELSE',
      Blockly.bash.ORDER_CONDITIONAL) || 'false';
  var code = value_if + ' && ' + value_then + ' || ' + value_else;
  return [code, Blockly.bash.ORDER_CONDITIONAL];
};
