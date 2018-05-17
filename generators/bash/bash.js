/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
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
 * @fileoverview Generating bash for text blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.bash.bash');

goog.require('Blockly.bash');

Blockly.bash['bash_case'] = function(block) {
  var value_casedata = Blockly.bash.valueToCode(block, 'caseData', Blockly.bash.ORDER_ATOMIC);
  var statements_caseactions = Blockly.bash.statementToCode(block, 'caseActions')  || '\n';
  var code = 'case ' + value_casedata + ' in\n' + statements_caseactions + 'esac\n' ;
  return code;
};

Blockly.bash['bash_in'] = function(block) {
  var value_indata = Blockly.bash.valueToCode(block, 'inData', Blockly.bash.ORDER_ATOMIC);
  var statements_inactions = Blockly.bash.statementToCode(block, 'inActions') || '\n';
  var code = '' + value_indata + ')\n' + statements_inactions + ';;\n';
  return code;
}; 

Blockly.bash['bash_getlist'] = function(block) {
  var variable_variablename = Blockly.bash.variableDB_.getName(block.getFieldValue('variableName'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble bash into code variable.
  var code = '"${' + variable_variablename + '[@]}"';
  return [code, Blockly.bash.ORDER_ATOMIC];
}; 

Blockly.bash['bash_addlist'] = function(block) {
  var variable_variablename = Blockly.bash.variableDB_.getName(block.getFieldValue('variableName'), Blockly.Variables.NAME_TYPE);
  var value_content = Blockly.bash.valueToCode(block, 'content', Blockly.bash.ORDER_ATOMIC);
  // TODO: Assemble bash into code variable.
  var code = variable_variablename + '+=(' + value_content + ')\n';
  return code;
};
