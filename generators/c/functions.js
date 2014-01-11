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
 * @fileoverview Generating c for objects blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.c.functions');

goog.require('Blockly.c');

/*
Blockly.c['functions_declarefunction'] = function(block) {
  var text_returntype = block.getTitleValue('returnType');
  var text_functionname = block.getTitleValue('functionName');
  var statements_params = Blockly.c.statementToCode(block, 'params', Blockly.c.ORDER_COMMA);
  var statements_name = Blockly.c.statementToCode(block, 'NAME');
  var code = text_returntype + " " + text_functionname + " (" + statements_params + ") {\n" + statements_name + "}\n";
  return code;
};
*/

Blockly.c['functions_declarefunction'] = function(block) {
  var text_returntype = block.getTitleValue('returnType');
  var text_functionname = block.getTitleValue('functionName');
  var statements_args = Blockly.c.statementToCode(block, 'args') || '';
  var statements_name = Blockly.c.statementToCode(block, 'NAME') || '\n';
  var text_pointer = block.getTitleValue('pointer');
  var code = text_returntype + ' ' + text_pointer + text_functionname + ' (' + statements_args + '  ) {\n' + statements_name + '}\n';
  return code;
};

Blockly.c['functions_declarearg'] = function(block) {
  var text_argtype = block.getTitleValue('argType');
  var value_varname = Blockly.c.valueToCode(block, 'varName', Blockly.c.ORDER_NONE);
  var value_data = Blockly.c.valueToCode(block, 'data', Blockly.c.ORDER_NONE);
  var dropdown_punctuation = block.getTitleValue('punctuation');
  var text_pointer = block.getTitleValue('pointer');
  var code = text_argtype + ' ' + text_pointer + value_varname + ' = ' + value_data + dropdown_punctuation;
  return code;
};

Blockly.c['functions_return'] = function(block) {
  var value_varname = ' ' + Blockly.c.valueToCode(block, 'varName', Blockly.c.ORDER_NONE) || '';
  var code = "return" + value_varname + ";\n";
  return code;
};