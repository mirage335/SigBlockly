/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.bashom/
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
 * @author q.neutron@gmail.bashom (Quynh Neutron)
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
  var dropdown_name = block.getFieldValue('punctuation');
  var code = '' + value_indata + ')\n' + statements_inactions + dropdown_name + '\n';
  return code;
};

Blockly.bash['bash_deref'] = function(block) {
  var value_source = Blockly.bash.valueToCode(block, 'source', Blockly.bash.ORDER_ATOMIC);
  var code = '"$' + value_source + '"';
  return [code, Blockly.bash.ORDER_ATOMIC];
};

Blockly.bash['bash_deref_unquoted'] = function(block) {
  var value_source = Blockly.bash.valueToCode(block, 'source', Blockly.bash.ORDER_ATOMIC);
  var code = '$' + value_source;
  return [code, Blockly.bash.ORDER_ATOMIC];
};

Blockly.bash['bash_getlist'] = function(block) {
  var variable_variablename = Blockly.bash.variableDB_.getName(block.getFieldValue('variableName'), Blockly.Variables.NAME_TYPE);
  var code = '"${' + variable_variablename + '[@]}"';
  return [code, Blockly.bash.ORDER_ATOMIC];
}; 

Blockly.bash['bash_addlist'] = function(block) {
  var variable_variablename = Blockly.bash.variableDB_.getName(block.getFieldValue('variableName'), Blockly.Variables.NAME_TYPE);
  var value_content = Blockly.bash.valueToCode(block, 'content', Blockly.bash.ORDER_ATOMIC);
  var code = variable_variablename + '+=(' + value_content + ')\n';
  return code;
};

Blockly.bash['bash_command_substitution'] = function(block) {
  var value_name = Blockly.bash.valueToCode(block, 'NAME', Blockly.bash.ORDER_ATOMIC);
  var code = '$(' + value_name + ')';
  return [code, Blockly.bash.ORDER_ATOMIC];
};

Blockly.bash['bash_pipe'] = function(block) {
  var value_source = Blockly.bash.valueToCode(block, 'source', Blockly.bash.ORDER_ATOMIC);
  var value_destination = Blockly.bash.valueToCode(block, 'destination', Blockly.bash.ORDER_ATOMIC);
  var code = value_source + ' | ' + value_destination;
  return [code, Blockly.bash.ORDER_ATOMIC];
};

Blockly.bash['bash_specvar'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var code = '"$' + dropdown_name + '"';
  return [code, Blockly.bash.ORDER_ATOMIC];
};

Blockly.bash['bash_doublequote'] = function(block) {
  var value_name = Blockly.bash.valueToCode(block, 'NAME', Blockly.bash.ORDER_ATOMIC);
  var code = '"' + value_name + '"';
  return [code, Blockly.bash.ORDER_ATOMIC];
};

Blockly.bash['bash_singlequote'] = function(block) {
  var value_name = Blockly.bash.valueToCode(block, 'NAME', Blockly.bash.ORDER_ATOMIC);
  var code = '\'' + value_name + '\'';
  return [code, Blockly.bash.ORDER_ATOMIC];
};

Blockly.bash['bash_local'] = function(block) {
  var value_name = Blockly.bash.valueToCode(block, 'NAME', Blockly.bash.ORDER_ATOMIC);
  var code = 'local ' + value_name + '\n';
  return code;
};

Blockly.bash['bash_export'] = function(block) {
  var value_name = Blockly.bash.valueToCode(block, 'NAME', Blockly.bash.ORDER_ATOMIC);
  var code = 'export ' + value_name + '\n';
  return code;
};






