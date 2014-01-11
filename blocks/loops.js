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
 * @fileoverview Loop blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.loops');

goog.require('Blockly.Blocks');


Blockly.Blocks['controls_for'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendTitle("for (")
        .appendTitle(new Blockly.FieldTextInput("int"), "varType");
    this.appendValueInput("var")
        .setCheck("null");
    this.appendValueInput("varInitValue")
        .appendTitle("=");
    this.appendDummyInput()
        .appendTitle(";");
    this.appendValueInput("condition");
    this.appendDummyInput()
        .appendTitle(";")
        .appendTitle("variable")
        .appendTitle(new Blockly.FieldTextInput("++"), "operator")
        .appendTitle(")");
    this.appendStatementInput("body");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['controls_whileUntil'] = {
  // Do while/until loop.
  init: function() {
    var OPERATORS =
        [[Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE, 'WHILE'],
         [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL, 'UNTIL']];
    this.setHelpUrl(Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL);
    this.setColour(120);
    this.appendValueInput('BOOL')
        .setCheck('Boolean')
        .appendTitle(new Blockly.FieldDropdown(OPERATORS), 'MODE');
    this.appendStatementInput('DO')
        .appendTitle(Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getTitleValue('MODE');
      var TOOLTIPS = {
        WHILE: Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
        UNTIL: Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL
      };
      return TOOLTIPS[op];
    });
  }
};

Blockly.Blocks['controls_dorepeat'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendStatementInput("doRepeatStatement")
        .appendTitle("do");
    this.appendValueInput("doRepeatValue")
        .appendTitle("repeat")
        .appendTitle("while");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['controls_flow_statements'] = {
  // Flow statements: continue, break.
  init: function() {
    var OPERATORS =
        [[Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK, 'BREAK'],
         [Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE, 'CONTINUE']];
    this.setHelpUrl(Blockly.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL);
    this.setColour(120);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown(OPERATORS), 'FLOW');
    this.setPreviousStatement(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getTitleValue('FLOW');
      var TOOLTIPS = {
        BREAK: Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK,
        CONTINUE: Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE
      };
      return thisBlock.TOOLTIPS[op];
    });
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    var legal = false;
    // Is the block nested in a control statement?
    var block = this;
    do {
      if (block.type == 'controls_repeat' ||
          block.type == 'controls_repeat_ext' ||
          block.type == 'controls_for' ||
          block.type == 'controls_whileUntil') {
        legal = true;
        break;
      }
      block = block.getSurroundParent();
    } while (block);
    if (legal) {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING);
    }
  }
};
