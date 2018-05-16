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
 * @fileoverview Generating Python for loop blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.bash.loops');

goog.require('Blockly.bash');


Blockly.bash['controls_repeat_ext'] = function(block) {
  // Repeat n times.
  if (block.getField('TIMES')) {
    // Internal number.
    var repeats = String(parseInt(block.getFieldValue('TIMES'), 10));
  } else {
    // External number.
    var repeats = Blockly.bash.valueToCode(block, 'TIMES',
        Blockly.bash.ORDER_NONE) || '0';
  }
  if (Blockly.isNumber(repeats)) {
    repeats = parseInt(repeats, 10);
  } else {
    repeats = 'int(' + repeats + ')';
  }
  var branch = Blockly.bash.statementToCode(block, 'DO');
  branch = Blockly.bash.addLoopTrap(branch, block.id) ||
      Blockly.bash.PASS;
  var loopVar = Blockly.bash.variableDB_.getDistinctName(
      'count', Blockly.Variables.NAME_TYPE);
  var code = 'for ' + loopVar + ' in range(' + repeats + '):\n' + branch;
  return code;
};

Blockly.bash['controls_repeat'] = Blockly.bash['controls_repeat_ext'];

Blockly.bash['controls_whileUntil'] = function(block) {
  // Do while/until loop.
  var until = block.getFieldValue('MODE') == 'UNTIL';
  var argument0 = Blockly.bash.valueToCode(block, 'BOOL',
      until ? Blockly.bash.ORDER_LOGICAL_NOT :
      Blockly.bash.ORDER_NONE) || 'false';
  var branch = Blockly.bash.statementToCode(block, 'DO');
  branch = Blockly.bash.addLoopTrap(branch, block.id) ||
      Blockly.bash.PASS;
  if (until) {
    argument0 = '! ' + argument0;
  }
  return 'while ' + argument0 + '\n' + 'do' + '\n' + branch + 'done' + '\n';
};

Blockly.bash['controls_for'] = function(block) {
  // For loop.
  var variable0 = Blockly.bash.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.bash.valueToCode(block, 'FROM',
      Blockly.bash.ORDER_NONE) || '0';
  var argument1 = Blockly.bash.valueToCode(block, 'TO',
      Blockly.bash.ORDER_NONE) || '0';
  var increment = Blockly.bash.valueToCode(block, 'BY',
      Blockly.bash.ORDER_NONE) || '1';
  var branch = Blockly.bash.statementToCode(block, 'DO');
  branch = Blockly.bash.addLoopTrap(branch, block.id) ||
      Blockly.bash.PASS;

  var code = '';
  var range;
  
  range = argument0 + ' ' + increment + ' ' + argument1 ;
  
  code += 'for ' + variable0 + ' in ' + '$(seq ' + range + ')' + '\n' + 'do\n' + branch + 'done\n';
  return code;
};

Blockly.bash['controls_forEach'] = function(block) {
  // For each loop.
  var variable0 = Blockly.bash.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.bash.valueToCode(block, 'LIST',
      Blockly.bash.ORDER_RELATIONAL) || '"$@"';
  var branch = Blockly.bash.statementToCode(block, 'DO');
  branch = Blockly.bash.addLoopTrap(branch, block.id) ||
      Blockly.bash.PASS;
  var code = 'for ' + variable0 + ' in ' + argument0 + '\n' + 'do\n' + branch + 'done\n';
  return code;
};

Blockly.bash['controls_flow_statements'] = function(block) {
  // Flow statements: continue, break.
  switch (block.getFieldValue('FLOW')) {
    case 'BREAK':
      return 'break\n';
    case 'CONTINUE':
      return 'continue\n';
  }
  throw 'Unknown flow statement.';
};
