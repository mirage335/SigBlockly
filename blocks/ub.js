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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_ub_ssh_header'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Host ")
        .appendField(new Blockly.FieldTextInput("*-$netName*"), "hostname");
    this.appendDummyInput()
        .appendField("     ")
        .appendField(new Blockly.FieldDropdown([["",""], ["#","#"]]), "commentCompression")
        .appendField("Compression")
        .appendField(new Blockly.FieldDropdown([["yes","yes"], ["no","no"]]), "Compression");
    this.appendDummyInput()
        .appendField("     ")
        .appendField(new Blockly.FieldDropdown([["",""], ["#","#"]]), "commentExitOnForwardFailure")
        .appendField("ExitOnForwardFailure")
        .appendField(new Blockly.FieldDropdown([["yes","yes"], ["no","no"]]), "ExitOnForwardFailure");
    this.appendDummyInput()
        .appendField("     ")
        .appendField(new Blockly.FieldDropdown([["",""], ["#","#"]]), "commentConnectTimeout")
        .appendField("ConnectTimeout")
        .appendField(new Blockly.FieldTextInput("36"), "ConnectTimeout");
    this.appendDummyInput()
        .appendField("     ")
        .appendField(new Blockly.FieldDropdown([["",""], ["#","#"]]), "commentConnectionAttempts")
        .appendField("ConnectionAttempts")
        .appendField(new Blockly.FieldTextInput("3"), "ConnectionAttempts");
    this.appendDummyInput()
        .appendField("     ")
        .appendField(new Blockly.FieldDropdown([["",""], ["#","#"]]), "commentServerAliveInterval")
        .appendField("ServerAliveInterval")
        .appendField(new Blockly.FieldTextInput("6"), "ServerAliveInterval");
    this.appendDummyInput()
        .appendField("     ")
        .appendField(new Blockly.FieldDropdown([["",""], ["#","#"]]), "commentServerAliveCountMax")
        .appendField("ServerServerAliveCountMax")
        .appendField(new Blockly.FieldTextInput("18"), "ServerServerAliveCountMax");
    this.appendDummyInput()
        .appendField("     ")
        .appendField(new Blockly.FieldDropdown([["#","#"], ["",""]]), "commentPubkeyAuthentication")
        .appendField("PubkeyAuthentication")
        .appendField(new Blockly.FieldDropdown([["yes","yes"], ["no","no"]]), "PubkeyAuthentication");
    this.appendDummyInput()
        .appendField("     ")
        .appendField(new Blockly.FieldDropdown([["#","#"], ["",""]]), "commentPasswordAuthentication")
        .appendField("PasswordAuthentication")
        .appendField(new Blockly.FieldDropdown([["no","no"], ["yes","yes"]]), "PasswordAuthentication");
    this.appendDummyInput()
        .appendField("     ")
        .appendField(new Blockly.FieldDropdown([["",""], ["#","#"]]), "commentStrictHostKeyChecking")
        .appendField("StrictHostKeyChecking")
        .appendField(new Blockly.FieldDropdown([["no","no"], ["yes","yes"]]), "StrictHostKeyChecking");
    this.appendDummyInput()
        .appendField("     ")
        .appendField(new Blockly.FieldDropdown([["",""], ["#","#"]]), "commentUserKnownHostsFile")
        .appendField("UserKnownHostsFile")
        .appendField(new Blockly.FieldTextInput("\"$sshLocalSSH/known_hosts\""), "UserKnownHostsFile");
    this.appendDummyInput()
        .appendField("     ")
        .appendField(new Blockly.FieldDropdown([["",""], ["#","#"]]), "commentIdentityFile")
        .appendField("IdentityFile")
        .appendField(new Blockly.FieldTextInput("\"$sshLocalSSH/id_rsa\""), "IdentityFile");
    this.appendDummyInput()
        .appendField("");
    this.appendDummyInput()
        .appendField("     ")
        .appendField(new Blockly.FieldDropdown([["",""], ["#","#"]]), "commentCipher")
        .appendField("Cipher")
        .appendField(new Blockly.FieldTextInput("aes256-gcm@openssh.com"), "Cipher");
    this.appendDummyInput()
        .appendField("     ")
        .appendField(new Blockly.FieldDropdown([["",""], ["#","#"]]), "commentCiphers")
        .appendField("Ciphers")
        .appendField(new Blockly.FieldTextInput("aes256-gcm@openssh.com,aes128-ctr,aes192-ctr,aes256-ctr,arcfour256,arcfour128,aes128-gcm@openssh.com,chacha20-poly1305@openssh.com,aes128-cbc,3des-cbc,blowfish-cbc,cast128-cbc,aes192-cbc,aes256-cbc,arcfour"), "Ciphers");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_ub_ssh_host'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Host ")
        .appendField(new Blockly.FieldTextInput("machine"), "hostname")
        .appendField(new Blockly.FieldTextInput("-$netName*"), "netname");
    this.appendDummyInput()
        .appendField("     ")
        .appendField(new Blockly.FieldDropdown([["",""], ["#","#"]]), "commentProxyCommand")
        .appendField("ProxyCommand")
        .appendField("\"$sshDir/cautossh\"")
        .appendField(new Blockly.FieldTextInput("_ssh_proxy_machine-$netName"), "ProxyCommand");
    this.appendDummyInput()
        .appendField("     ")
        .appendField(new Blockly.FieldDropdown([["",""], ["#","#"]]), "commentUser")
        .appendField("User")
        .appendField(new Blockly.FieldTextInput("user"), "User");
    this.appendDummyInput()
        .appendField("     ")
        .appendField(new Blockly.FieldDropdown([["#","#"], ["",""]]), "commentIdentityFile")
        .appendField("IdentityFile")
        .appendField(new Blockly.FieldTextInput("\"$sshLocalSSH/id_rsa\""), "IdentityFile");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_ub_proxyssh'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("_proxySSH")
        .appendField(new Blockly.FieldTextInput("machine-network"), "hostname")
        .appendField(new Blockly.FieldTextInput("22"), "port")
        .appendField(new Blockly.FieldTextInput("192.168.xxx.xxx"), "address");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("Proxy STDIN/STDOUT connection through explicit jump host, to another host. Equivalent to traditional \"ssh -q -W jump:22 destination\" .");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_ub_proxy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("_proxy")
        .appendField(new Blockly.FieldTextInput("network.domain.tld"), "hostname")
        .appendField(new Blockly.FieldTextInput("22"), "port");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("Connect STDIN/STDOUT to hostname:port. Equivalent to netcat .");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_ub_proxyssh_reverse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("_proxySSH_reverse")
        .appendField(new Blockly.FieldTextInput("machine"), "hostname")
        .appendField(new Blockly.FieldTextInput("gw-network"), "jump");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("AutoSSH client. Proxy STDIN/STDOUT through jump host at port defined by _get_reversePorts as used by _autossh .");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_ub_proxyTor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("_proxyTor")
        .appendField(new Blockly.FieldTextInput("xxxxxxxxxxxxxxxxx.onion"), "hostname")
        .appendField(new Blockly.FieldTextInput("22"), "port");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("Tor client. Connect STDIO/STDOUT to tor service. Equivalent to netcat through tor SOCKS proxy service.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_ub_proxyTor_reverse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("_proxyTor_reverse")
        .appendField(new Blockly.FieldTextInput("machine"), "hostname")
        .appendField(new Blockly.FieldTextInput("xxxxxxxxxxxxxxxxx.onion"), "address");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("Tor client. Proxy STDIN/STDOUT through tor to service at port defined by _get_reversePorts as used by _autossh .");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_ub_check_lan'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("_check_LAN_")
        .appendField(new Blockly.FieldTextInput("network"), "network")
        .appendField("() {")
        .appendField("...");
    this.appendDummyInput()
        .appendField("          ")
        .appendField("grep")
        .appendField(new Blockly.FieldTextInput("'192\\.168\\.x'"), "NAME");
    this.appendDummyInput()
        .appendField("...")
        .appendField("}");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_ub_ssh_proxy_machine_network'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("_ssh_proxy_")
        .appendField(new Blockly.FieldTextInput("machine-network"), "hostname")
        .appendField("() {")
        .appendField("...");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("...")
        .appendField("}");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_ub_get_reverseports'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("_get_reversePorts() { ...");
    this.appendStatementInput("conditions")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("... }");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Requires if conditions to add port matches to list. See example.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_ub_netvars'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("# WARNING Must use unique netName!");
    this.appendDummyInput()
        .appendField("export netName=")
        .appendField(new Blockly.FieldTextInput("default"), "netName");
    this.appendDummyInput()
        .appendField("export gatewayName=")
        .appendField(new Blockly.FieldTextInput("gw-\"$netName\""), "gatewayName");
    this.appendDummyInput()
        .appendField("export LOCALSSHPORT=")
        .appendField(new Blockly.FieldTextInput("22"), "LOCALSSHPORT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_ub_autosshvars'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["",""], ["#","#"]]), "commentAUTOSSH_FIRST_POLL")
        .appendField("export AUTOSSH_FIRST_POLL=")
        .appendField(new Blockly.FieldTextInput("45"), "AUTOSSH_FIRST_POLL");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["",""], ["#","#"]]), "commentAUTOSSH_POLL")
        .appendField("export AUTOSSH_POLL=")
        .appendField(new Blockly.FieldTextInput("45"), "AUTOSSH_POLL");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["#","#"], ["",""]]), "commentAUTOSSH_GATETIME_disable")
        .appendField("export AUTOSSH_GATETIME=")
        .appendField(new Blockly.FieldTextInput("0"), "AUTOSSH_GATETIME_disable");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["",""], ["#","#"]]), "commentAUTOSSH_GATETIME")
        .appendField("export AUTOSSH_GATETIME=")
        .appendField(new Blockly.FieldTextInput("15"), "AUTOSSH_GATETIME");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["#","#"], ["",""]]), "commentAUTOSSH_PORT")
        .appendField("export AUTOSSH_PORT=")
        .appendField(new Blockly.FieldTextInput("0"), "AUTOSSH_PORT");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["#","#"], ["",""]]), "commentAUTOSSH_DEBUG")
        .appendField("export AUTOSSH_DEBUG=")
        .appendField(new Blockly.FieldTextInput("1"), "AUTOSSH_DEBUG");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["#","#"], ["",""]]), "commentAUTOSSH_LOGLEVEL")
        .appendField("export AUTOSSH_LOGLEVEL=")
        .appendField(new Blockly.FieldTextInput("7"), "AUTOSSH_LOGLEVEL");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_ub_call_checklan'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("_check_LAN_")
        .appendField(new Blockly.FieldTextInput("network"), "NAME");
    this.setOutput(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

