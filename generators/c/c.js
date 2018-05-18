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

Blockly.c['c_functions_declarefunction'] = function(block) {
  var text_returntype = block.getFieldValue('returnType');
  var text_functionname = block.getFieldValue('functionName');
  var statements_args = Blockly.c.statementToCode(block, 'args') || '';
  var statements_name = Blockly.c.statementToCode(block, 'NAME') || '\n';
  var text_pointer = block.getFieldValue('pointer');
  var code = text_returntype + ' ' + text_pointer + text_functionname + ' (' + statements_args + '  ) {\n' + statements_name + '}\n';
  return code;
};

Blockly.c['c_functions_declarearg'] = function(block) {
  var text_argtype = block.getFieldValue('argType');
  var value_varname = Blockly.c.valueToCode(block, 'varName', Blockly.c.ORDER_NONE);
  var value_data = Blockly.c.valueToCode(block, 'data', Blockly.c.ORDER_NONE);
  var dropdown_punctuation = block.getFieldValue('punctuation');
  var text_pointer = block.getFieldValue('pointer');
  var code = text_argtype + ' ' + text_pointer + value_varname + ' = ' + value_data + dropdown_punctuation;
  return code;
};

Blockly.c['c_functions_call'] = function(block) {
  var text_functionname = block.getFieldValue('functionName');
  var statements_name = Blockly.c.statementToCode(block, 'NAME');
  var code = text_functionname + '( ' + statements_name + ' )';
  //return [code, Blockly.c.ORDER_NONE];
  return [code, Blockly.c.ORDER_ATOMIC];
};

Blockly.c['c_objects_declarevar'] = function(block) {
  var value_var = Blockly.c.valueToCode(block, 'var', Blockly.c.ORDER_NONE);
  var text_type = block.getFieldValue('type');
  var value_name = Blockly.c.valueToCode(block, 'NAME', Blockly.c.ORDER_NONE);
  var text_pointer = block.getFieldValue('pointer');
  var code = text_type + ' ' + text_pointer + value_var + ' = ' + value_name + ';\n';
  return code;
};

Blockly.c['c_objects_struct'] = function(block) {
  var statements_variabledeclarations = Blockly.c.statementToCode(block, 'variableDeclarations') || '\n';;
  var value_struct_name = Blockly.c.valueToCode(block, 'STRUCT_NAME', Blockly.c.ORDER_NONE);
  var code = 'typedef struct {\n' + statements_variabledeclarations + '} ' + value_struct_name + ';\n';
  return code;
};

Blockly.c['c_objects_struct_element'] = function(block) {
  var value_struct_name = Blockly.c.valueToCode(block, 'STRUCT_NAME', Blockly.c.ORDER_NONE);
  var text_elementname = block.getFieldValue('elementName');
  var text_elementtype = block.getFieldValue('elementType');
  var text_pointer = block.getFieldValue('pointer');
  var code = text_elementtype + ' ' + text_pointer + text_elementname + ";\n";
  return code;
};

Blockly.c['c_objects_structureelementset'] = function(block) {
  var value_varname = Blockly.c.valueToCode(block, 'varName', Blockly.c.ORDER_NONE);
  var text_pointerreference = block.getFieldValue('pointerReference');
  var value_valuedata = Blockly.c.valueToCode(block, 'valueData', Blockly.c.ORDER_NONE);
  var text_elementname = block.getFieldValue('elementName');
  var text_operator = block.getFieldValue('operator');
  var text_pointerreferenceconclusion = block.getFieldValue('pointerReferenceConclusion');
  var code = text_pointerreference + value_varname + text_pointerreferenceconclusion + '.' + text_elementname + text_operator + value_valuedata + ";\n";
  return code;
};

Blockly.c['c_objects_structureelementget'] = function(block) {
  var value_varname = Blockly.c.valueToCode(block, 'varName', Blockly.c.ORDER_NONE);
  var text_pointerreference = block.getFieldValue('pointerReference');
  var text_pointerreferenceconclusion = block.getFieldValue('pointerReferenceConclusion');
  var text_elementname = block.getFieldValue('elementName');
  var code = text_pointerreference + value_varname + text_pointerreferenceconclusion + '.' + text_elementname;
  return [code, Blockly.c.ORDER_NONE];
};

Blockly.c['c_objects_pointerget'] = function(block) {
  var value_varname = Blockly.c.valueToCode(block, 'varName', Blockly.c.ORDER_NONE);
  var text_pointerreference = block.getFieldValue('pointerReference');
  var text_pointerreferenceconclusion = block.getFieldValue('pointerReferenceConclusion');
  var code = text_pointerreference + value_varname + text_pointerreferenceconclusion;
  return [code, Blockly.c.ORDER_NONE];
};

Blockly.c['c_objects_pointerset'] = function(block) {
  var value_varname = Blockly.c.valueToCode(block, 'varName', Blockly.c.ORDER_NONE);
  var text_pointerreference = block.getFieldValue('pointerReference');
  var text_pointerreferenceconclusion = block.getFieldValue('pointerReferenceConclusion');
  var text_operator = block.getFieldValue('operator');
  var value_valuedata = Blockly.c.valueToCode(block, 'valueData', Blockly.c.ORDER_NONE);
  var code = text_pointerreference + value_varname + text_pointerreferenceconclusion + text_operator + value_valuedata + ";\n";
  return code;
};

Blockly.c['c_memory_mallocdeclarenormal'] = function(block) {
  var value_varname = Blockly.c.valueToCode(block, 'varName', Blockly.c.ORDER_NONE);
  var text_numberofarrayelements = block.getFieldValue('numberOfArrayElements');
  var text_vartype = block.getFieldValue('varType');
  var code = text_vartype + ' *' + value_varname + ' = malloc(' + text_numberofarrayelements + '* sizeof(*' + value_varname + "));\n";
  return code;
};

Blockly.c['c_memory_malloccreatestructuralelement'] = function(block) {
  var value_varname = Blockly.c.valueToCode(block, 'varName', Blockly.c.ORDER_NONE);
  var text_elementname = block.getFieldValue('elementName');
  var text_numberofarrayelements = block.getFieldValue('numberOfArrayElements');
  var code = value_varname + '.' + text_elementname + ' = malloc(' + text_numberofarrayelements + ' * sizeof(' + value_varname + '.' + text_elementname + "));\n";
  return code;
};

Blockly.c['c_memory_memset'] = function(block) {
  var value_varname = Blockly.c.valueToCode(block, 'varName', Blockly.c.ORDER_NONE);
  var value_valuedata = Blockly.c.valueToCode(block, 'valueData', Blockly.c.ORDER_NONE);
  var text_numberofelements = block.getFieldValue('numberOfElements');
  var text_vartype = block.getFieldValue('varType');
  var code = 'memset(' + value_varname + ', ' + value_valuedata + ', (' + text_numberofelements + ' * sizeof(' + text_vartype + ")));\n";
  return code;
};

Blockly.c['c_memory_freeandnull'] = function(block) {
  var value_varname = Blockly.c.valueToCode(block, 'varName', Blockly.c.ORDER_NONE);
  var code = 'free(' + value_varname + ');   ' + value_varname + " = NULL;\n";
  return code;
};

Blockly.c['c_memory_null'] = function(block) {
  var code = "NULL";
  return [code, Blockly.c.ORDER_ATOMIC];
};

