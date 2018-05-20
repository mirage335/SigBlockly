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

goog.provide('Blockly.bash.ub');

goog.require('Blockly.bash');

Blockly.Generator.prototype.INDENT = '	';

Blockly.bash['ub_scriptabsolutelocation'] = function(block) {
  var statements_name = Blockly.bash.statementToCode(block, 'NAME');
  var code = '\"$scriptAbsoluteLocation\" ' + statements_name.substring(2) + '\n';
  return code;
};

Blockly.bash['ub_virt_editfakehome'] = function(block) {
  var statements_name = Blockly.bash.statementToCode(block, 'NAME');
  var code = '_editFakeHome ' + statements_name.substring(2) + '\n';
  return code;
};

Blockly.bash['ub_virt_userfakehome'] = function(block) {
  var statements_name = Blockly.bash.statementToCode(block, 'NAME');
  var code = '_userFakeHome ' + statements_name.substring(2) + '\n';
  return code;
};

Blockly.bash['ub_virt_userqemu'] = function(block) {
  var statements_name = Blockly.bash.statementToCode(block, 'NAME');
  var code = '_userQemu ' + statements_name.substring(2) + '\n';
  return code;
};

Blockly.bash['ub_virt_uservbox'] = function(block) {
  var statements_name = Blockly.bash.statementToCode(block, 'NAME');
  var code = '_userVBox ' + statements_name.substring(2) + '\n';
  return code;
};

Blockly.bash['ub_virt_userchroot'] = function(block) {
  var statements_name = Blockly.bash.statementToCode(block, 'NAME');
  var code = '_userChRoot ' + statements_name.substring(2) + '\n';
  return code;
};

Blockly.bash['_ub_here_ssh_config'] = function(block) {
  //Blockly.Generator.prototype.INDENT = '';
  var statements_name = Blockly.bash.statementToCode(block, 'NAME');
   var code = '_here_ssh_config() {\n' + 'cat << CZXWXcRMTo8EmM8i4d\n' + statements_name + 'CZXWXcRMTo8EmM8i4d\n' + '}\n';
  return code;
};
