// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">vizuális programozási környezet</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">A JavaScript forráskód megtekintése.</span><span id="linkTooltip">Save and link to blocks.</span><span id="runTooltip">Program futtatása.</span><span id="runProgram">Program futtatása</span><span id="resetProgram">Alaphelyzet</span><span id="dialogOk">Elolvastam</span><span id="dialogCancel">Cancel</span><span id="catLogic">Logikai műveletek</span><span id="catLoops">Ciklusok</span><span id="catMath">Matematikai műveletek</span><span id="catText">Sztring műveletek</span><span id="catLists">Listakezelés</span><span id="catColour">Színek</span><span id="catVariables">Változók</span><span id="catProcedures">Eljárások</span><span id="httpRequestError">A kéréssel kapcsolatban probléma merült fel.</span><span id="linkAlert">Ezzel a hivatkozással tudod megosztani a programodat:\n\n%1</span><span id="hashError">Sajnos a \'%1\' hivatkozás nem tartozik egyetlen programhoz sem.</span><span id="xmlError">A programodat nem lehet betölteni.  Elképzelhető, hogy a Blockly egy másik verziójában készült?</span><span id="listVariable">lista</span><span id="textVariable">text</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">Elolvastam</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof codepage == 'undefined') { var codepage = {}; }


codepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Code_badXml">Hiba az XML feldolgozásakor:\n%1\n\nVáltozások elvetése?</span><span id="Code_badCode">Program hiba:\n%1</span><span id="Code_timeout">A program elérte a maximális végrehajtási időt.</span><span id="Code_discard">Az összes %1 blokk törlése?</span></div>';
};


codepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return codepage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../blocks_compressed.js"><\/script><script type="text/javascript" src="../../c_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><table width="100%" height="100%"><tr><td><h1><span id="title"><a href="../index.html">Blockly</a> : Kódszerkesztő</span></h1></td><td class="farSide"><select id="languageMenu"></select></td></tr><tr><td colspan=2><table width="100%"><tr id="tabRow" height="1em"><td id="tab_blocks" class="tabon">Blokkok</td><td class="tabmin">&nbsp;</td><td id="tab_c" class="taboff">C</td><td class="tabmin">&nbsp;</td><td id="tab_xml" class="taboff">XML</td><td class="tabmax"><button id="trashButton" class="notext" title="Összes blokk törlése."><img src=\'../../media/1x1.gif\' class="trash icon21"></button> <button id="linkButton" class="notext" title="Save and link to blocks."><img src=\'../../media/1x1.gif\' class="link icon21"></button> <button id="runButton" class="notext primary" title="Program futtatása."><img src=\'../../media/1x1.gif\' class="run icon21"></button></td></tr></table></td></tr><tr><td height="99%" colspan=2 id="content_area">' + codepage.toolbox(null, null, opt_ijData) + '</td></tr></table><div id="content_blocks" class="content"></div><pre id="content_c" class="content"></pre><textarea id="content_xml" class="content" wrap="off"></textarea>' + apps.dialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData);
};


codepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Logikai műveletek"><block type="controls_if"></block><block type="controls_switch"></block><block type="controls_case"></block><block type="controls_casebreak"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_null"></block><block type="logic_ternary"></block></category><category name="Ciklusok"><block type="controls_for"></block><block type="controls_whileUntil"></block><block type="controls_dorepeat"></block><block type="controls_flow_statements"></block></category><category name="Matematikai műveletek"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><title name="NUM">1</title></block></value><value name="HIGH"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_float"></block></category><category name="Sztring műveletek"><block type="text"></block></category><category name="Változók" custom="VARIABLE"></category>    <category name="Functions"><block type="functions_declarefunction"></block><block type="functions_declarearg"></block><block type="functions_return"></block></category><category name="Arbitrary"><block type="arbitrary_code"></block><block type="arbitrary_input"></block></category><category name="Objects"><block type="objects_declarevar"></block><block type="objects_struct"></block><block type="objects_struct_element"></block><block type="objects_structureelementset"></block><block type="objects_structureelementget"></block><block type="objects_pointerset"></block><block type="objects_pointerget"></block></category><category name="Memory"><block type="memory_mallocdeclarenormal"></block><block type="memory_malloccreatestructuralelement"></block><block type="memory_memset"></block><block type="memory_freeandnull"></block><block type="memory_null"></block></category>  </xml>';
};


codepage.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return codepage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../blocks_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><div id="blockly"></div>';
};
