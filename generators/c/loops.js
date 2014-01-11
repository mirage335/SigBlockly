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
 * @fileoverview Generating c for loop blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.c.loops');

goog.require('Blockly.c');


Blockly.c['controls_for'] = function(block) {
  var text_vartype = block.getTitleValue('varType');
  var value_var = Blockly.c.valueToCode(block, 'var', Blockly.c.ORDER_NONE);
  var value_varinitvalue = Blockly.c.valueToCode(block, 'varInitValue', Blockly.c.ORDER_NONE);
  var value_condition = Blockly.c.valueToCode(block, 'condition', Blockly.c.ORDER_NONE);
  var text_operator = block.getTitleValue('operator');
  var statements_body = Blockly.c.statementToCode(block, 'body');
  var code = 'for (' + text_vartype + ' ' + value_var + ' = ' + value_varinitvalue + '; ' +  value_condition + '; ' + value_var +  text_operator + ') {\n' + statements_body + '}\n';
  return code;
};

Blockly.c['controls_whileUntil'] = function(block) {
  // Do while/until loop.
  var until = block.getTitleValue('MODE') == 'UNTIL';
  var argument0 = Blockly.c.valueToCode(block, 'BOOL',
      until ? Blockly.c.ORDER_LOGICAL_NOT :
      Blockly.c.ORDER_NONE) || '0';
  var branch = Blockly.c.statementToCode(block, 'DO') || '\n';
  if (Blockly.c.INFINITE_LOOP_TRAP) {
    branch = Blockly.c.INFINITE_LOOP_TRAP.replace(/%1/g,
        '"' + block.id + '"') + branch;
  }
  if (block.getTitleValue('MODE') == 'UNTIL') {
    if (!argument0.match(/^\w+$/)) {
      argument0 = '(' + argument0 + ')';
    }
    argument0 = '(' + '!' + argument0 + ')';
  }
  return 'while (' + argument0 + ') {\n' + branch + '}\n';
};

Blockly.c['controls_dorepeat'] = function(block) {
  var statements_dorepeatstatement = Blockly.c.statementToCode(block, 'doRepeatStatement') || '\n';
  var value_dorepeatvalue = Blockly.c.valueToCode(block, 'doRepeatValue', Blockly.c.ORDER_NONE);
  var code = 'do {\n' + statements_dorepeatstatement + '} while ( ' + value_dorepeatvalue + ' );\n';
  return code;
};

Blockly.c['controls_flow_statements'] = function(block) {
  // Flow statements: continue, break.
  switch (block.getTitleValue('FLOW')) {
    case 'BREAK':
      return 'break\n';
    case 'CONTINUE':
      return 'continue\n';
  }
  throw 'Unknown flow statement.';
};
