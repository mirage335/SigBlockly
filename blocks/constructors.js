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

goog.provide('Blockly.Blocks.memory');

goog.require('Blockly.Blocks');

Blockly.Blocks['memory_mallocdeclarenormal'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
    this.appendValueInput("varName")
        .setCheck("null")
        .appendTitle(new Blockly.FieldTextInput("char"), "varType")
        .appendTitle("*");
    this.appendDummyInput()
        .appendTitle(" = malloc(")
        .appendTitle(new Blockly.FieldTextInput("1"), "numberOfArrayElements")
        .appendTitle(" * sizeof(*varName));");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['memory_malloccreatestructuralelement'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
    this.appendValueInput("varName")
        .setCheck("null");
    this.appendDummyInput()
        .appendTitle(".")
        .appendTitle(new Blockly.FieldTextInput("elementName"), "elementName")
        .appendTitle("= malloc(")
        .appendTitle(new Blockly.FieldTextInput("1"), "numberOfArrayElements")
        .appendTitle(" * sizeof(varName.elementName));");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['memory_memset'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
    this.appendValueInput("varName")
        .setCheck("null")
        .appendTitle("memset(");
    this.appendValueInput("valueData")
        .appendTitle(", ");
    this.appendDummyInput()
        .appendTitle(", (")
        .appendTitle(new Blockly.FieldTextInput("1"), "numberOfElements")
        .appendTitle(" * sizeof(")
        .appendTitle(new Blockly.FieldTextInput("char"), "varType")
        .appendTitle(")));");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['memory_freeandnull'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
    this.appendValueInput("varName")
        .setCheck("null")
        .appendTitle("free(");
    this.appendDummyInput()
        .appendTitle(");")
        .appendTitle("   varName = NULL;");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['memory_null'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
    this.appendDummyInput()
        .appendTitle("NULL");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};