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
 * @fileoverview Generating c for text blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.c.c');

goog.require('Blockly.c');

Blockly.c['c_switch'] = function(block) {
  var value_switchdata = Blockly.c.valueToCode(block, 'switchData', Blockly.c.ORDER_ATOMIC);
  var statements_switchactions = Blockly.c.statementToCode(block, 'switchActions')  || '\n';
  var code = 'switch (' + value_switchdata + ') {\n' + statements_switchactions + '}\n' ;
  return code;
};

Blockly.c['c_case'] = function(block) {
  var value_casedata = Blockly.c.valueToCode(block, 'caseData', Blockly.c.ORDER_ATOMIC);
  var statements_caseactions = Blockly.c.statementToCode(block, 'caseActions') || '\n';
  var code = 'case ' + value_casedata + ' :\n' + statements_caseactions;
  return code;
}; 
