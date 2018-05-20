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

goog.provide('Blockly.Blocks.ub');

goog.require('Blockly.Blocks');

Blockly.Blocks['ub_scriptabsolutelocation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("\"$scriptAbsoluteLocation\"");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ub_virt_editfakehome'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("_editFakeHome");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ub_virt_userfakehome'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("_userFakeHome");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ub_virt_userqemu'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("_userQemu");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ub_virt_uservbox'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("_userVBox");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ub_virt_userchroot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("_userChRoot");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_ub_here_ssh_config'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("_here_ssh_config() {");
    this.appendDummyInput()
        .appendField("cat << CZXWXcRMTo8EmM8i4d");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("CZXWXcRMTo8EmM8i4d");
    this.appendDummyInput()
        .appendField("}");
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

