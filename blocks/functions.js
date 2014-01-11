/**
 * Visual Blocks Editor
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
 * @fileoverview Custom blocks for Blockly.
 * @author mirage335
 */
'use strict';

goog.provide('Blockly.Blocks.functions');

goog.require('Blockly.Blocks');

/*
Blockly.Blocks['functions_declarefunction'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldTextInput("int"), "returnType")
        .appendTitle(" ")
        .appendTitle(new Blockly.FieldTextInput("functionName"), "functionName")
        .appendTitle(" ( ... )");
    this.appendStatementInput("params");
    this.appendDummyInput()
        .appendTitle("{ ... }");
    this.appendStatementInput("NAME");
    this.setTooltip('');
  }
};
*/

Blockly.Blocks['functions_declarefunction'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldTextInput("int"), "returnType")
	.appendTitle(" ")
	.appendTitle(new Blockly.FieldDropdown([["", ""], ["*", "*"]]), "pointer")
        .appendTitle(new Blockly.FieldTextInput("functionName"), "functionName");
    this.appendStatementInput("args")
        .appendTitle("( ... )");
    this.appendStatementInput("NAME")
        .appendTitle("{ ... }");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['functions_declarearg'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldTextInput("int"), "argType")
        .appendTitle(" ")
	.appendTitle(new Blockly.FieldDropdown([["", ""], ["*", "*"]]), "pointer");
    this.appendValueInput("varName");
    this.appendValueInput("data")
        .appendTitle("=");
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown([["", ""], [", ", ", "]]), "punctuation");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['functions_return'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendValueInput("varName")
        .appendTitle("return ");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};