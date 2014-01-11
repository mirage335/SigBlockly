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

goog.provide('Blockly.Blocks.objects');

goog.require('Blockly.Blocks');

Blockly.Blocks['objects_declarevar'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendValueInput("var")
        .setCheck("null")
        .appendTitle(new Blockly.FieldTextInput("int"), "type")
	.appendTitle(" ")
	.appendTitle(new Blockly.FieldDropdown([["", ""], ["*", "*"]]), "pointer");
    this.appendValueInput("NAME")
        .appendTitle("=");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
}; 

Blockly.Blocks['objects_struct'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendTitle("typedef struct {");
    this.appendStatementInput("variableDeclarations");
    this.appendValueInput("STRUCT_NAME")
	.setCheck("null")
        .appendTitle("} ");
    this.appendDummyInput()
        .appendTitle(";");
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['objects_struct_element'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldTextInput("int"), "elementType")
	.appendTitle(" ");
    this.appendDummyInput()
	.appendTitle(new Blockly.FieldDropdown([["", ""], ["*", "*"]]), "pointer")
        .appendTitle(new Blockly.FieldTextInput("elementName"), "elementName");
    this.appendDummyInput()
        .appendTitle(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['objects_structureelementset'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendValueInput("varName")
        .setCheck("null")
        .appendTitle(new Blockly.FieldTextInput("(*"), "pointerReference");
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldTextInput(" + 0)"), "pointerReferenceConclusion");
    this.appendValueInput("valueData")
        .appendTitle(".")
        .appendTitle(new Blockly.FieldTextInput("(*elementName + 0)"), "elementName")
        .appendTitle(" ")
        .appendTitle(new Blockly.FieldTextInput("="), "operator");
    this.appendDummyInput()
        .appendTitle(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['objects_structureelementget'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendValueInput("varName")
        .setCheck("null")
        .appendTitle(new Blockly.FieldTextInput("(*"), "pointerReference");
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldTextInput(" + 0)"), "pointerReferenceConclusion")
        .appendTitle(".")
        .appendTitle(new Blockly.FieldTextInput("(*elementName + 0)"), "elementName");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['objects_pointerget'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendValueInput("varName")
        .setCheck("null")
        .appendTitle(new Blockly.FieldTextInput("(*"), "pointerReference");
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldTextInput(" + 0)"), "pointerReferenceConclusion");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['objects_pointerset'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendValueInput("varName")
        .setCheck("null")
        .appendTitle(new Blockly.FieldTextInput("(*"), "pointerReference");
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldTextInput(" + 0)"), "pointerReferenceConclusion")
        .appendTitle(new Blockly.FieldTextInput(" = "), "operator");
    this.appendValueInput("valueData");
    this.appendDummyInput()
        .appendTitle(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
