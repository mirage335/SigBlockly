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

goog.provide('Blockly.Blocks.bash');

goog.require('Blockly.Blocks');

Blockly.Blocks['bash_case'] = {
  init: function() {
    this.appendValueInput("caseData")
        .setCheck(null)
        .appendField("BASH")
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

Blockly.Blocks['bash_in'] = {
  init: function() {
    this.appendValueInput("inData")
        .setCheck(null)
        .appendField("BASH")
        .appendField("in");
    this.appendStatementInput("inActions")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bash_getlist'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("BASH")
        .appendField("list")
        .appendField(new Blockly.FieldVariable("item"), "variableName");
    this.setOutput(true, null);
    this.setColour(255);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
