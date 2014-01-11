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

goog.provide('Blockly.c.memory');

goog.require('Blockly.c');

Blockly.c['memory_mallocdeclarenormal'] = function(block) {
  var value_varname = Blockly.c.valueToCode(block, 'varName', Blockly.c.ORDER_NONE);
  var text_numberofarrayelements = block.getTitleValue('numberOfArrayElements');
  var text_vartype = block.getTitleValue('varType');
  var code = text_vartype + ' *' + value_varname + ' = malloc(' + text_numberofarrayelements + '* sizeof(*' + value_varname + "));\n";
  return code;
};

Blockly.c['memory_malloccreatestructuralelement'] = function(block) {
  var value_varname = Blockly.c.valueToCode(block, 'varName', Blockly.c.ORDER_NONE);
  var text_elementname = block.getTitleValue('elementName');
  var text_numberofarrayelements = block.getTitleValue('numberOfArrayElements');
  var code = value_varname + '.' + text_elementname + ' = malloc(' + text_numberofarrayelements + ' * sizeof(' + value_varname + '.' + text_elementname + "));\n";
  return code;
};

Blockly.c['memory_memset'] = function(block) {
  var value_varname = Blockly.c.valueToCode(block, 'varName', Blockly.c.ORDER_NONE);
  var value_valuedata = Blockly.c.valueToCode(block, 'valueData', Blockly.c.ORDER_NONE);
  var text_numberofelements = block.getTitleValue('numberOfElements');
  var text_vartype = block.getTitleValue('varType');
  var code = 'memset(' + value_varname + ', ' + value_valuedata + ', (' + text_numberofelements + ' * sizeof(' + text_vartype + ")));\n";
  return code;
};

Blockly.c['memory_freeandnull'] = function(block) {
  var value_varname = Blockly.c.valueToCode(block, 'varName', Blockly.c.ORDER_NONE);
  var code = 'free(' + value_varname + ');   ' + value_varname + " = NULL;\n";
  return code;
};

Blockly.c['memory_null'] = function(block) {
  var code = "NULL";
  return [code, Blockly.c.ORDER_ATOMIC];
};
