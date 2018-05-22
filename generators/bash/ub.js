/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.bashom/
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
 * @fileoverview Generating bash for text blocks.
 * @author q.neutron@gmail.bashom (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.bash.ub');

goog.require('Blockly.bash');

Blockly.Generator.prototype.INDENT = '	';

Blockly.bash['ub_scriptabsolutelocation'] = function(block) {
  var statements_name = Blockly.bash.statementToCode(block, 'NAME');
  var code = '\"$scriptAbsoluteLocation\" ' + statements_name.substring(2) + '\n';
  return code;
};

Blockly.bash['ub_virt_editfakehome'] = function(block) {
  var statements_name = Blockly.bash.statementToCode(block, 'NAME');
  var code = '_editFakeHome ' + statements_name.substring(2) + '\n';
  return code;
};

Blockly.bash['ub_virt_userfakehome'] = function(block) {
  var statements_name = Blockly.bash.statementToCode(block, 'NAME');
  var code = '_userFakeHome ' + statements_name.substring(2) + '\n';
  return code;
};

Blockly.bash['ub_virt_userqemu'] = function(block) {
  var statements_name = Blockly.bash.statementToCode(block, 'NAME');
  var code = '_userQemu ' + statements_name.substring(2) + '\n';
  return code;
};

Blockly.bash['ub_virt_uservbox'] = function(block) {
  var statements_name = Blockly.bash.statementToCode(block, 'NAME');
  var code = '_userVBox ' + statements_name.substring(2) + '\n';
  return code;
};

Blockly.bash['ub_virt_userchroot'] = function(block) {
  var statements_name = Blockly.bash.statementToCode(block, 'NAME');
  var code = '_userChRoot ' + statements_name.substring(2) + '\n';
  return code;
};

Blockly.bash['_ub_here_ssh_config'] = function(block) {
  Blockly.Generator.prototype.INDENT = '';
  var statements_name = Blockly.bash.statementToCode(block, 'NAME');
  Blockly.Generator.prototype.INDENT = '	';
  var code = '_here_ssh_config() {\n' + 'cat << CZXWXcRMTo8EmM8i4d\n' + statements_name + 'CZXWXcRMTo8EmM8i4d\n' + '}\n';
  return code;
};

Blockly.bash['_ub_ssh_header'] = function(block) {
  var text_hostname = 'Host ' + block.getFieldValue('hostname');
  var dropdown_commentcompression = block.getFieldValue('commentCompression');
  var dropdown_compression = block.getFieldValue('Compression');
  var dropdown_commentexitonforwardfailure = block.getFieldValue('commentExitOnForwardFailure');
  var dropdown_exitonforwardfailure = block.getFieldValue('ExitOnForwardFailure');
  var dropdown_commentconnecttimeout = block.getFieldValue('commentConnectTimeout');
  var text_connecttimeout = block.getFieldValue('ConnectTimeout');
  var dropdown_commentconnectionattempts = block.getFieldValue('commentConnectionAttempts');
  var text_connectionattempts = block.getFieldValue('ConnectionAttempts');
  var dropdown_commentserveraliveinterval = block.getFieldValue('commentServerAliveInterval');
  var text_serveraliveinterval = block.getFieldValue('ServerAliveInterval');
  var dropdown_commentserveralivecountmax = block.getFieldValue('commentServerAliveCountMax');
  var text_serverserveralivecountmax = block.getFieldValue('ServerServerAliveCountMax');
  var dropdown_commentpubkeyauthentication = block.getFieldValue('commentPubkeyAuthentication');
  var dropdown_pubkeyauthentication = block.getFieldValue('PubkeyAuthentication');
  var dropdown_commentpasswordauthentication = block.getFieldValue('commentPasswordAuthentication');
  var dropdown_passwordauthentication = block.getFieldValue('PasswordAuthentication');
  var dropdown_commentstricthostkeychecking = block.getFieldValue('commentStrictHostKeyChecking');
  var dropdown_stricthostkeychecking = block.getFieldValue('StrictHostKeyChecking');
  var dropdown_commentuserknownhostsfile = block.getFieldValue('commentUserKnownHostsFile');
  var text_userknownhostsfile = block.getFieldValue('UserKnownHostsFile');
  var dropdown_commentidentityfile = block.getFieldValue('commentIdentityFile');
  var text_identityfile = block.getFieldValue('IdentityFile');
  var dropdown_commentcipher = block.getFieldValue('commentCipher');
  var text_cipher = block.getFieldValue('Cipher');
  var dropdown_commentciphers = block.getFieldValue('commentCiphers');
  var text_ciphers = block.getFieldValue('Ciphers');
  
  var code = '\n';
  
  code += text_hostname + '\n';
  code += '	' + dropdown_commentcompression + 'Compression ' + dropdown_compression +  '\n';
  code += '	' + dropdown_commentexitonforwardfailure + 'ExitOnForwardFailure ' + dropdown_exitonforwardfailure +  '\n';
  code += '	' + dropdown_commentconnecttimeout + 'ConnectTimeout ' + text_connecttimeout +  '\n';
  code += '	' + dropdown_commentconnectionattempts + 'ConnectionAttempts ' + text_connectionattempts +  '\n';
  code += '	' + dropdown_commentserveraliveinterval + 'ServerAliveInterval ' + text_serveraliveinterval +  '\n';
  code += '	' + dropdown_commentserveralivecountmax + 'ServerServerAliveCountMax ' + text_serverserveralivecountmax +  '\n';
  code += '	' + dropdown_commentpubkeyauthentication + 'PubkeyAuthentication ' + dropdown_pubkeyauthentication +  '\n';
  code += '	' + dropdown_commentpasswordauthentication + 'PasswordAuthentication ' + dropdown_passwordauthentication +  '\n';
  code += '	' + dropdown_commentstricthostkeychecking + 'StrictHostKeyChecking ' + dropdown_stricthostkeychecking +  '\n';
  code += '	' + dropdown_commentuserknownhostsfile + 'UserKnownHostsFile ' + text_userknownhostsfile +  '\n';
  code += '	' + dropdown_commentidentityfile + 'IdentityFile ' + text_identityfile +  '\n';
  code += '	' + dropdown_commentcipher + 'Cipher ' + text_cipher +  '\n';
  code += '	' + dropdown_commentciphers + 'Ciphers ' + text_ciphers +  '\n';
  
  code += '\n';
  
  return code;
};

Blockly.bash['_ub_ssh_host'] = function(block) {
  var text_hostname = block.getFieldValue('hostname');
  var text_netname = block.getFieldValue('netname');
  var dropdown_commentproxycommand = block.getFieldValue('commentProxyCommand');
  var text_proxycommand = block.getFieldValue('ProxyCommand');
  var dropdown_commentuser = block.getFieldValue('commentUser');
  var text_user = block.getFieldValue('User');
  var dropdown_commentidentityfile = block.getFieldValue('commentIdentityFile');
  var text_identityfile = block.getFieldValue('IdentityFile');
  
  var code = '';
  
  code += text_hostname + text_netname + '\n';
  code += '	' + dropdown_commentproxycommand + 'ProxyCommand ' + text_proxycommand +  '\n';
  code += '	' + dropdown_commentuser + 'User ' + text_user +  '\n';
  code += '	' + dropdown_commentidentityfile + 'IdentityFile ' + text_identityfile +  '\n';
  
  code += '\n';
  
  return code;
};

Blockly.bash['_ub_proxyssh'] = function(block) {
  var text_hostname = block.getFieldValue('hostname');
  var text_port = block.getFieldValue('port');
  var text_address = block.getFieldValue('address');
  
  var code = '';
  
  code += 'if [[ \"$proxySSH_loopGuard\" != "true" ]]\n';
  code += 'then\n';
  code += '	export proxySSH_loopGuard=\"true\"\n';
  
  code += '	_proxySSH ';
  code += text_hostname + ' ' + text_port + ' ' + text_address + '\n';
  
  code += 'fi\n';
  code += '\n';
  
  return code;
};

Blockly.bash['_ub_proxy'] = function(block) {
  var text_hostname = block.getFieldValue('hostname');
  var text_port = block.getFieldValue('port');
  var code = '_proxy ' + text_hostname + ' ' + text_port + '\n';
  code += '\n';
  return code;
};

Blockly.bash['_ub_proxyssh_reverse'] = function(block) {
  var text_hostname = block.getFieldValue('hostname');
  var text_jump = block.getFieldValue('jump');
  var code = '_proxySSH_reverse ' + text_hostname + ' ' + text_jump + '\n';
  code += '\n';
  return code;
};

Blockly.bash['_ub_proxyTor'] = function(block) {
  var text_hostname = block.getFieldValue('hostname');
  var text_port = block.getFieldValue('port');
  var code = '_proxyTor ' + text_hostname + ' ' + text_port + '\n';
  code += '\n';
  return code;
};

Blockly.bash['_ub_proxyTor_reverse'] = function(block) {
  var text_hostname = block.getFieldValue('hostname');
  var text_address = block.getFieldValue('address');
  var code = '_proxyTor_reverse ' + text_hostname + ' ' + text_address + '\n';
  code += '\n';
  return code;
};

Blockly.bash['_ub_check_lan'] = function(block) {
  var text_network = block.getFieldValue('network');
  var text_name = block.getFieldValue('NAME');
  var code = '';
  code += '_check_LAN_' + text_network + '() {\n';
  code += '	ip addr show | grep ' + text_name + ' > /dev/null 2>&1 && return 0\n';
  code += '	return 1\n';
  code += '}\n';
  return code;
};

Blockly.bash['_ub_ssh_proxy_machine_network'] = function(block) {
  var text_hostname = block.getFieldValue('hostname');
  var statements_name = Blockly.bash.statementToCode(block, 'NAME');
  var code = '';
  code += '_ssh_proxy_' + text_hostname + '() {\n';
  code += '	_start\n\n'
  code += statements_name;
  code += '\n	_stop\n'
  code += '}\n';
  return code;
};
