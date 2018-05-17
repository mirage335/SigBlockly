/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2014 Google Inc.
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
 * @fileoverview Generating c for procedure blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.c.procedures');

goog.require('Blockly.c');


Blockly.c['procedures_defreturn'] = function(block) {
  // Define a procedure with a return value.
  var funcName = Blockly.c.variableDB_.getName(block.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var branch = Blockly.c.statementToCode(block, 'STACK');
  if (Blockly.c.STATEMENT_PREFIX) {
    var id = block.id.replace(/\$/g, '$$$$');  // Issue 251.
    branch = Blockly.c.prefixLines(
        Blockly.c.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + id + '\''), Blockly.c.INDENT) + branch;
  }
  if (Blockly.c.INFINITE_LOOP_TRAP) {
    branch = Blockly.c.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + block.id + '\'') + branch;
  }
  var returnValue = Blockly.c.valueToCode(block, 'RETURN',
      Blockly.c.ORDER_NONE) || '';
  if (returnValue) {
    returnValue = Blockly.c.INDENT + 'return ' + returnValue + ';\n';
  }
  var returnType = returnValue ? 'int' : 'void';
  var args = [];
  for (var i = 0; i < block.arguments_.length; i++) {
    args[i] = Blockly.c.variableDB_.getName(block.arguments_[i],
        Blockly.Variables.NAME_TYPE);
  }
  var code = returnType + ' ' + funcName + '(' + args.join(', ') + ') {\n' +
      branch + returnValue + '}';
  code = Blockly.c.scrub_(block, code);
  // Add % so as not to collide with helper functions in definitions list.
  Blockly.c.definitions_['%' + funcName] = code;
  return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Blockly.c['procedures_defnoreturn'] = Blockly.c['procedures_defreturn'];

Blockly.c['procedures_callreturn'] = function(block) {
  // Call a procedure with a return value.
  var funcName = Blockly.c.variableDB_.getName(block.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var i = 0; i < block.arguments_.length; i++) {
    args[i] = Blockly.c.valueToCode(block, 'ARG' + i,
        Blockly.c.ORDER_NONE) || 'null';
  }
  var code = funcName + '(' + args.join(', ') + ')';
  return [code, Blockly.c.ORDER_UNARY_POSTFIX];
};

Blockly.c['procedures_callnoreturn'] = function(block) {
  // Call a procedure with no return value.
  var funcName = Blockly.c.variableDB_.getName(block.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var i = 0; i < block.arguments_.length; i++) {
    args[i] = Blockly.c.valueToCode(block, 'ARG' + i,
        Blockly.c.ORDER_NONE) || 'null';
  }
  var code = funcName + '(' + args.join(', ') + ');\n';
  return code;
};

Blockly.c['procedures_ifreturn'] = function(block) {
  // Conditionally return value from a procedure.
  var condition = Blockly.c.valueToCode(block, 'CONDITION',
      Blockly.c.ORDER_NONE) || 'false';
  var code = 'if (' + condition + ') {\n';
  if (block.hasReturnValue_) {
    var value = Blockly.c.valueToCode(block, 'VALUE',
        Blockly.c.ORDER_NONE) || 'null';
    code += Blockly.c.INDENT + 'return ' + value + ';\n';
  } else {
    code += Blockly.c.INDENT + 'return;\n';
  }
  code += '}\n';
  return code;
};
