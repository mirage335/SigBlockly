/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
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
 * @fileoverview Generating Python for colour blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.bash.colour');

goog.require('Blockly.bash');


Blockly.bash['colour_picker'] = function(block) {
  // Colour picker.
  var code = '\'' + block.getFieldValue('COLOUR') + '\'';
  return [code, Blockly.bash.ORDER_ATOMIC];
};

Blockly.bash['colour_random'] = function(block) {
  // Generate a random colour.
  Blockly.bash.definitions_['import_random'] = 'import random';
  var code = '\'#%06x\' % random.randint(0, 2**24 - 1)';
  return [code, Blockly.bash.ORDER_FUNCTION_CALL];
};

Blockly.bash['colour_rgb'] = function(block) {
  // Compose a colour from RGB components expressed as percentages.
  var functionName = Blockly.bash.provideFunction_(
      'colour_rgb',
      ['def ' + Blockly.bash.FUNCTION_NAME_PLACEHOLDER_ + '(r, g, b):',
       '  r = round(min(100, max(0, r)) * 2.55)',
       '  g = round(min(100, max(0, g)) * 2.55)',
       '  b = round(min(100, max(0, b)) * 2.55)',
       '  return \'#%02x%02x%02x\' % (r, g, b)']);
  var r = Blockly.bash.valueToCode(block, 'RED',
                                     Blockly.bash.ORDER_NONE) || 0;
  var g = Blockly.bash.valueToCode(block, 'GREEN',
                                     Blockly.bash.ORDER_NONE) || 0;
  var b = Blockly.bash.valueToCode(block, 'BLUE',
                                     Blockly.bash.ORDER_NONE) || 0;
  var code = functionName + '(' + r + ', ' + g + ', ' + b + ')';
  return [code, Blockly.bash.ORDER_FUNCTION_CALL];
};

Blockly.bash['colour_blend'] = function(block) {
  // Blend two colours together.
  var functionName = Blockly.bash.provideFunction_(
      'colour_blend',
      ['def ' + Blockly.bash.FUNCTION_NAME_PLACEHOLDER_ +
          '(colour1, colour2, ratio):',
       '  r1, r2 = int(colour1[1:3], 16), int(colour2[1:3], 16)',
       '  g1, g2 = int(colour1[3:5], 16), int(colour2[3:5], 16)',
       '  b1, b2 = int(colour1[5:7], 16), int(colour2[5:7], 16)',
       '  ratio = min(1, max(0, ratio))',
       '  r = round(r1 * (1 - ratio) + r2 * ratio)',
       '  g = round(g1 * (1 - ratio) + g2 * ratio)',
       '  b = round(b1 * (1 - ratio) + b2 * ratio)',
       '  return \'#%02x%02x%02x\' % (r, g, b)']);
  var colour1 = Blockly.bash.valueToCode(block, 'COLOUR1',
      Blockly.bash.ORDER_NONE) || '\'#000000\'';
  var colour2 = Blockly.bash.valueToCode(block, 'COLOUR2',
      Blockly.bash.ORDER_NONE) || '\'#000000\'';
  var ratio = Blockly.bash.valueToCode(block, 'RATIO',
      Blockly.bash.ORDER_NONE) || 0;
  var code = functionName + '(' + colour1 + ', ' + colour2 + ', ' + ratio + ')';
  return [code, Blockly.bash.ORDER_FUNCTION_CALL];
};
