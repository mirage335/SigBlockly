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
 * @fileoverview Generating Dart for text blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Dart.arbitrary');

goog.require('Blockly.Dart');


Blockly.Dart['arbitrary_code'] = function(block) {
  var text_arbitrarycode = block.getFieldValue('arbitraryCode');
  var code = text_arbitrarycode + '\n';
  return code;
};

Blockly.Dart['arbitrary_input'] = function(block) {
  var text_arbitrarycode = block.getFieldValue('arbitraryInput');
  var code = text_arbitrarycode;
  return [code, Blockly.Dart.ORDER_ATOMIC];
};

Blockly.Dart['blockly_comment'] = function(block) {
  var text_comment_text = block.getFieldValue('comment_text');
  var code = '';
  return code;
};

Blockly.Dart['blockly_separator'] = function(block) {
  var code = '';
  return code;
};

Blockly.Dart['arbitrary_converter'] = function(block) {
  var value_content = Blockly.Dart.valueToCode(block, 'content', Blockly.Dart.ORDER_NONE);
  var code = value_content + ';' + '\n';
  return code;
};

Blockly.Dart['functions_return'] = function(block) {
  var value_varname = Blockly.Dart.valueToCode(block, 'varName', Blockly.Dart.ORDER_NONE) || '';
  if (value_varname != '') {
    value_varname = ' ' + value_varname;
  }
  var code = "return" + value_varname + ";\n";
  return code;
};

Blockly.Dart['arbitrary_deconverter'] = function(block) {
  var statements_name = Blockly.Dart.statementToCode(block, 'NAME');
  var code = statements_name;
  code = code.replace(/;\n/g, "");
  code = code.trim();
  //code = code.replace(/\n\n/g, " ");
  return [code, Blockly.Dart.ORDER_ATOMIC];
};
