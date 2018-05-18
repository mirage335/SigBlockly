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

goog.provide('Blockly.Blocks.c');

goog.require('Blockly.Blocks');

Blockly.Blocks['c_switch'] = {
  init: function() {
    this.appendValueInput("switchData")
        .setCheck(null)
        .appendField("C")
        .appendField("switch");
    this.appendStatementInput("switchActions")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['c_case'] = {
  init: function() {
    this.appendValueInput("caseData")
        .setCheck(null)
        .appendField("C")
        .appendField("case");
    this.appendStatementInput("caseActions")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['c_functions_declarefunction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("int"), "returnType")
        .appendField(new Blockly.FieldDropdown([["",""], ["*","*"]]), "pointer")
        .appendField(new Blockly.FieldTextInput("functionName"), "functionName");
    this.appendStatementInput("args")
        .setCheck(null)
        .appendField("( ... )");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("{ ... }");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['c_functions_declarearg'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("int"), "argType")
        .appendField(new Blockly.FieldDropdown([["",""], ["*","*"]]), "pointer");
    this.appendValueInput("varName")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("=");
    this.appendValueInput("data")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["",""], [", ",", "]]), "punctuation");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['c_functions_arg'] = {
  init: function() {
    this.appendValueInput("data")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["",""], [", ",", "]]), "punctuation");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['c_functions_call'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("functionName"), "functionName");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("( ... )");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

