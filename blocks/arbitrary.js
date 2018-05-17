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

goog.provide('Blockly.Blocks.arbitrary');

goog.require('Blockly.Blocks');

Blockly.Blocks['arbitrary_code'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("arbitraryCode"), "arbitraryCode");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arbitrary_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("arbitraryInput"), "arbitraryInput");
    this.setOutput(true, null);
    //this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  {
    "type": "arbitrary_html",
    "message0": " htmlTag %1",
    "args0": [
      {
        "type": "field_input",
        "name": "html_tag",
        "text": "< tag > HTML < /tag >"
      }
    ],
    "colour": 15,
    "tooltip": "",
    "helpUrl": ""
  }
]);  // END JSON EXTRACT (Do not delete this comment.)