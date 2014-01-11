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

goog.provide('Blockly.c.objects');

goog.require('Blockly.c');


Blockly.c['objects_declarevar'] = function(block) {
  var value_var = Blockly.c.valueToCode(block, 'var', Blockly.c.ORDER_NONE);
  var text_type = block.getTitleValue('type');
  var value_name = Blockly.c.valueToCode(block, 'NAME', Blockly.c.ORDER_NONE);
  var text_pointer = block.getTitleValue('pointer');
  var code = text_type + ' ' + text_pointer + value_var + ' = ' + value_name + ';\n';
  return code;
};

Blockly.c['objects_struct'] = function(block) {
  var statements_variabledeclarations = Blockly.c.statementToCode(block, 'variableDeclarations') || '\n';;
  var value_struct_name = Blockly.c.valueToCode(block, 'STRUCT_NAME', Blockly.c.ORDER_NONE);
  var code = 'typedef struct {\n' + statements_variabledeclarations + '} ' + value_struct_name + ';\n';
  return code;
};

Blockly.c['objects_struct_element'] = function(block) {
  var value_struct_name = Blockly.c.valueToCode(block, 'STRUCT_NAME', Blockly.c.ORDER_NONE);
  var text_elementname = block.getTitleValue('elementName');
  var text_elementtype = block.getTitleValue('elementType');
  var text_pointer = block.getTitleValue('pointer');
  var code = text_elementtype + ' ' + text_pointer + text_elementname + ";\n";
  return code;
};

Blockly.c['objects_structureelementset'] = function(block) {
  var value_varname = Blockly.c.valueToCode(block, 'varName', Blockly.c.ORDER_NONE);
  var text_pointerreference = block.getTitleValue('pointerReference');
  var value_valuedata = Blockly.c.valueToCode(block, 'valueData', Blockly.c.ORDER_NONE);
  var text_elementname = block.getTitleValue('elementName');
  var text_operator = block.getTitleValue('operator');
  var text_pointerreferenceconclusion = block.getTitleValue('pointerReferenceConclusion');
  var code = text_pointerreference + value_varname + text_pointerreferenceconclusion + '.' + text_elementname + text_operator + value_valuedata + ";\n";
  return code;
};

Blockly.c['objects_structureelementget'] = function(block) {
  var value_varname = Blockly.c.valueToCode(block, 'varName', Blockly.c.ORDER_NONE);
  var text_pointerreference = block.getTitleValue('pointerReference');
  var text_pointerreferenceconclusion = block.getTitleValue('pointerReferenceConclusion');
  var text_elementname = block.getTitleValue('elementName');
  var code = text_pointerreference + value_varname + text_pointerreferenceconclusion + '.' + text_elementname;
  return [code, Blockly.c.ORDER_NONE];
};

Blockly.c['objects_pointerget'] = function(block) {
  var value_varname = Blockly.c.valueToCode(block, 'varName', Blockly.c.ORDER_NONE);
  var text_pointerreference = block.getTitleValue('pointerReference');
  var text_pointerreferenceconclusion = block.getTitleValue('pointerReferenceConclusion');
  var code = text_pointerreference + value_varname + text_pointerreferenceconclusion;
  return [code, Blockly.c.ORDER_NONE];
};

Blockly.c['objects_pointerset'] = function(block) {
  var value_varname = Blockly.c.valueToCode(block, 'varName', Blockly.c.ORDER_NONE);
  var text_pointerreference = block.getTitleValue('pointerReference');
  var text_pointerreferenceconclusion = block.getTitleValue('pointerReferenceConclusion');
  var text_operator = block.getTitleValue('operator');
  var value_valuedata = Blockly.c.valueToCode(block, 'valueData', Blockly.c.ORDER_NONE);
  var code = text_pointerreference + value_varname + text_pointerreferenceconclusion + text_operator + value_valuedata + ";\n";
  return code;
};