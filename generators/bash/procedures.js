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
 * @fileoverview Generating Python for procedure blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.bash.procedures');

goog.require('Blockly.bash');


Blockly.bash['procedures_defreturn'] = function(block) {
  // Define a procedure with a return value.
  // First, add a 'global' statement for every variable that is not shadowed by
  // a local parameter.
  var globals = [];
  var varName;
  var workspace = block.workspace;
  var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
  for (var i = 0, variable; variable = variables[i]; i++) {
    varName = variable.name;
    if (block.arguments_.indexOf(varName) == -1) {
      globals.push(Blockly.bash.variableDB_.getName(varName,
          Blockly.Variables.NAME_TYPE));
    }
  }
  // Add developer variables.
  var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
  for (var i = 0; i < devVarList.length; i++) {
    globals.push(Blockly.bash.variableDB_.getName(devVarList[i],
        Blockly.Names.DEVELOPER_VARIABLE_TYPE));
  }

  globals = globals.length ?
      Blockly.bash.INDENT + 'global ' + globals.join(', ') + '\n' : '';
  var funcName = Blockly.bash.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var branch = Blockly.bash.statementToCode(block, 'STACK');
  if (Blockly.bash.STATEMENT_PREFIX) {
    var id = block.id.replace(/\$/g, '$$$$');  // Issue 251.
    branch = Blockly.bash.prefixLines(
        Blockly.bash.STATEMENT_PREFIX.replace(
            /%1/g, '\'' + id + '\''), Blockly.bash.INDENT) + branch;
  }
  if (Blockly.bash.INFINITE_LOOP_TRAP) {
    branch = Blockly.bash.INFINITE_LOOP_TRAP.replace(/%1/g,
        '"' + block.id + '"') + branch;
  }
  var returnValue = Blockly.bash.valueToCode(block, 'RETURN',
      Blockly.bash.ORDER_NONE) || '';
  if (returnValue) {
    returnValue = Blockly.bash.INDENT + 'return ' + returnValue + '\n';
  } else if (!branch) {
    branch = Blockly.bash.PASS;
  }
  var args = [];
  for (var i = 0; i < block.arguments_.length; i++) {
    args[i] = Blockly.bash.variableDB_.getName(block.arguments_[i],
        Blockly.Variables.NAME_TYPE);
  }
  var code = 'def ' + funcName + '(' + args.join(', ') + '):\n' +
      globals + branch + returnValue;
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
  var funcName = Blockly.bash.variableDB_.getName(block.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var i = 0; i < block.arguments_.length; i++) {
    args[i] = Blockly.bash.valueToCode(block, 'ARG' + i,
        Blockly.bash.ORDER_NONE) || 'None';
  }
  var code = funcName + '(' + args.join(', ') + ')';
  return [code, Blockly.bash.ORDER_FUNCTION_CALL];
};

Blockly.bash['procedures_callnoreturn'] = function(block) {
  // Call a procedure with no return value.
  var funcName = Blockly.bash.variableDB_.getName(block.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var i = 0; i < block.arguments_.length; i++) {
    args[i] = Blockly.bash.valueToCode(block, 'ARG' + i,
        Blockly.bash.ORDER_NONE) || 'None';
  }
  var code = funcName + '(' + args.join(', ') + ')\n';
  return code;
};

Blockly.bash['procedures_ifreturn'] = function(block) {
  // Conditionally return value from a procedure.
  var condition = Blockly.bash.valueToCode(block, 'CONDITION',
      Blockly.bash.ORDER_NONE) || 'False';
  var code = 'if ' + condition + ':\n';
  if (block.hasReturnValue_) {
    var value = Blockly.bash.valueToCode(block, 'VALUE',
        Blockly.bash.ORDER_NONE) || 'None';
    code += Blockly.bash.INDENT + 'return ' + value + '\n';
  } else {
    code += Blockly.bash.INDENT + 'return\n';
  }
  return code;
};
