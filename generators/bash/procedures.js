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
 * @fileoverview Generating bash for procedure blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.bash.procedures');

goog.require('Blockly.bash');

Blockly.Generator.prototype.INDENT = '	';

Blockly.bash['procedures_defreturn'] = function(block) {
  // Define a procedure with a return value.
  var funcName = Blockly.bash.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var branch = Blockly.bash.statementToCode(block, 'STACK');
  if (Blockly.bash.STATEMENT_PREFIX) {
    var id = block.id.replace(/\$/g, '$$$$');  // Issue 251.
    branch = Blockly.bash.prefixLines(
        Blockly.bash.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + id + '\''), Blockly.bash.INDENT) + branch;
  }
  if (Blockly.bash.INFINITE_LOOP_TRAP) {
    branch = Blockly.bash.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + block.id + '\'') + branch;
  }
  var returnValue = Blockly.bash.valueToCode(block, 'RETURN',
      Blockly.bash.ORDER_NONE) || '';
  if (returnValue) {
    returnValue = '\n' + Blockly.bash.INDENT + 'return ' + returnValue + '\n';
  }
  var args = [];
  for (var i = 0; i < block.arguments_.length; i++) {
    args[i] = Blockly.bash.variableDB_.getName(block.arguments_[i],
        Blockly.Variables.NAME_TYPE);
  }
  var code = funcName + '(' + ') {\n' +
      branch + returnValue + '}';
  code = Blockly.bash.scrub_(block, code);
  // Add % so as not to collide with helper functions in definitions list.
  Blockly.bash.definitions_['%' + funcName] = code;
  return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Blockly.bash['procedures_defnoreturn'] =
    Blockly.bash['procedures_defreturn'];

Blockly.bash['procedures_callreturn'] = function(block) {
  // Call a procedure with a return value.
  var funcName = Blockly.bash.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var i = 0; i < block.arguments_.length; i++) {
    args[i] = Blockly.bash.valueToCode(block, 'ARG' + i,
        Blockly.bash.ORDER_NONE) || '""';
  }
  var code = funcName;
  if (args[0] != '') {
    code += ' ' + args.join(' ');
  }
  //code += '\n'
  return [code, Blockly.bash.ORDER_ATOMIC];
};

Blockly.bash['procedures_callnoreturn'] = function(block) {
  // Call a procedure with no return value.
  var funcName = Blockly.bash.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var i = 0; i < block.arguments_.length; i++) {
    args[i] = Blockly.bash.valueToCode(block, 'ARG' + i,
        Blockly.bash.ORDER_NONE) || '""';
  }
  var code = funcName;
  if (args[0] != '') {
    code += ' ' + args.join(' ');
  }
  //code += '\n'
  return code;
};

Blockly.bash['procedures_ifreturn'] = function(block) {
  // Conditionally return value from a procedure.
  var condition = Blockly.bash.valueToCode(block, 'CONDITION',
      Blockly.bash.ORDER_NONE) || 'false';
  var code = 'if ' + condition + '\n' + 'then\n';
  if (block.hasReturnValue_) {
    var value = Blockly.bash.valueToCode(block, 'VALUE',
        Blockly.bash.ORDER_NONE) || '""';
    code += '\n' + Blockly.bash.INDENT + 'return ' + value + '\n';
  } else {
    code += '\n' + Blockly.bash.INDENT + 'return\n';
  }
  code += 'fi\n';
  return code;
};
