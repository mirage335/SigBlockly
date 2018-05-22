// Do not edit this file; automatically generated by build.py.
'use strict';


Blockly.bash=new Blockly.Generator("bash");Blockly.bash.addReservedWords("False,None,True,and,as,assert,break,class,continue,def,del,elif,else,except,exec,finally,for,from,global,if,import,in,is,lambda,nonlocal,not,or,pass,print,raise,return,try,while,with,yield,NotImplemented,Ellipsis,__debug__,quit,exit,copyright,license,credits,ArithmeticError,AssertionError,AttributeError,BaseException,BlockingIOError,BrokenPipeError,BufferError,BytesWarning,ChildProcessError,ConnectionAbortedError,ConnectionError,ConnectionRefusedError,ConnectionResetError,DeprecationWarning,EOFError,Ellipsis,EnvironmentError,Exception,FileExistsError,FileNotFoundError,FloatingPointError,FutureWarning,GeneratorExit,IOError,ImportError,ImportWarning,IndentationError,IndexError,InterruptedError,IsADirectoryError,KeyError,KeyboardInterrupt,LookupError,MemoryError,ModuleNotFoundError,NameError,NotADirectoryError,NotImplemented,NotImplementedError,OSError,OverflowError,PendingDeprecationWarning,PermissionError,ProcessLookupError,RecursionError,ReferenceError,ResourceWarning,RuntimeError,RuntimeWarning,StandardError,StopAsyncIteration,StopIteration,SyntaxError,SyntaxWarning,SystemError,SystemExit,TabError,TimeoutError,TypeError,UnboundLocalError,UnicodeDecodeError,UnicodeEncodeError,UnicodeError,UnicodeTranslateError,UnicodeWarning,UserWarning,ValueError,Warning,ZeroDivisionError,_,__build_class__,__debug__,__doc__,__import__,__loader__,__name__,__package__,__spec__,abs,all,any,apply,ascii,basestring,bin,bool,buffer,bytearray,bytes,callable,chr,classmethod,cmp,coerce,compile,complex,copyright,credits,delattr,dict,dir,divmod,enumerate,eval,exec,execfile,exit,file,filter,float,format,frozenset,getattr,globals,hasattr,hash,help,hex,id,input,int,intern,isinstance,issubclass,iter,len,license,list,locals,long,map,max,memoryview,min,next,object,oct,open,ord,pow,print,property,quit,range,raw_input,reduce,reload,repr,reversed,round,set,setattr,slice,sorted,staticmethod,str,sum,super,tuple,type,unichr,unicode,vars,xrange,zip");
Blockly.bash.ORDER_ATOMIC=0;Blockly.bash.ORDER_COLLECTION=1;Blockly.bash.ORDER_STRING_CONVERSION=1;Blockly.bash.ORDER_MEMBER=2.1;Blockly.bash.ORDER_FUNCTION_CALL=2.2;Blockly.bash.ORDER_EXPONENTIATION=3;Blockly.bash.ORDER_UNARY_SIGN=4;Blockly.bash.ORDER_BITWISE_NOT=4;Blockly.bash.ORDER_MULTIPLICATIVE=5;Blockly.bash.ORDER_ADDITIVE=6;Blockly.bash.ORDER_BITWISE_SHIFT=7;Blockly.bash.ORDER_BITWISE_AND=8;Blockly.bash.ORDER_BITWISE_XOR=9;Blockly.bash.ORDER_BITWISE_OR=10;Blockly.bash.ORDER_RELATIONAL=11;
Blockly.bash.ORDER_LOGICAL_NOT=12;Blockly.bash.ORDER_LOGICAL_AND=13;Blockly.bash.ORDER_LOGICAL_OR=14;Blockly.bash.ORDER_CONDITIONAL=15;Blockly.bash.ORDER_LAMBDA=16;Blockly.bash.ORDER_NONE=99;
Blockly.bash.ORDER_OVERRIDES=[[Blockly.bash.ORDER_FUNCTION_CALL,Blockly.bash.ORDER_MEMBER],[Blockly.bash.ORDER_FUNCTION_CALL,Blockly.bash.ORDER_FUNCTION_CALL],[Blockly.bash.ORDER_MEMBER,Blockly.bash.ORDER_MEMBER],[Blockly.bash.ORDER_MEMBER,Blockly.bash.ORDER_FUNCTION_CALL],[Blockly.bash.ORDER_LOGICAL_NOT,Blockly.bash.ORDER_LOGICAL_NOT],[Blockly.bash.ORDER_LOGICAL_AND,Blockly.bash.ORDER_LOGICAL_AND],[Blockly.bash.ORDER_LOGICAL_OR,Blockly.bash.ORDER_LOGICAL_OR]];
Blockly.bash.init=function(a){Blockly.bash.PASS=this.INDENT+"true\n";Blockly.bash.definitions_=Object.create(null);Blockly.bash.functionNames_=Object.create(null);Blockly.bash.variableDB_?Blockly.bash.variableDB_.reset():Blockly.bash.variableDB_=new Blockly.Names(Blockly.bash.RESERVED_WORDS_);Blockly.bash.variableDB_.setVariableMap(a.getVariableMap());for(var b=[],c=Blockly.Variables.allDeveloperVariables(a),d=0;d<c.length;d++)b.push("#"+Blockly.bash.variableDB_.getName(c[d],Blockly.Names.DEVELOPER_VARIABLE_TYPE)+
'=""');a=Blockly.Variables.allUsedVarModels(a);for(d=0;d<a.length;d++)b.push("#"+Blockly.bash.variableDB_.getName(a[d].getId(),Blockly.Variables.NAME_TYPE)+'=""');Blockly.bash.definitions_.variables=b.join("\n")};
Blockly.bash.finish=function(a){var b=[],c=[],d;for(d in Blockly.bash.definitions_){var e=Blockly.bash.definitions_[d];e.match(/^(from\s+\S+\s+)?import\s+\S+/)?b.push(e):c.push(e)}delete Blockly.bash.definitions_;delete Blockly.bash.functionNames_;Blockly.bash.variableDB_.reset();return(b.join("\n")+"\n\n"+c.join("\n\n")).replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n\n")+a};Blockly.bash.scrubNakedValue=function(a){return a+"\n"};
Blockly.bash.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/%/g,"\\%");var b="'";-1!==a.indexOf("'")&&(-1===a.indexOf('"')?b='"':a=a.replace(/'/g,"\\'"));return b+a+b};
Blockly.bash.scrub_=function(a,b){var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();(d=Blockly.utils.wrap(d,Blockly.bash.COMMENT_WRAP-3))&&(c=a.getProcedureDef?c+("#"+d+"\n"):c+Blockly.bash.prefixLines(d+"\n","# "));for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.bash.allNestedComments(d))&&(c+=Blockly.bash.prefixLines(d,"# "))}e=a.nextConnection&&a.nextConnection.targetBlock();
e=Blockly.bash.blockToCode(e);return c+b+e};Blockly.bash.getAdjustedInt=function(a,b,c,d){c=c||0;a.workspace.options.oneBasedIndex&&c--;var e=a.workspace.options.oneBasedIndex?"1":"0";a=Blockly.bash.valueToCode(a,b,c?Blockly.bash.ORDER_ADDITIVE:Blockly.bash.ORDER_NONE)||e;Blockly.isNumber(a)?(a=parseInt(a,10)+c,d&&(a=-a)):(a=0<c?"int("+a+" + "+c+")":0>c?"int("+a+" - "+-c+")":"int("+a+")",d&&(a="-"+a));return a};Blockly.bash.arbitrary={};Blockly.Generator.prototype.INDENT="\t";Blockly.bash.arbitrary_code=function(a){return a.getFieldValue("arbitraryCode")+"\n"};Blockly.bash.arbitrary_input=function(a){return[a.getFieldValue("arbitraryInput"),Blockly.bash.ORDER_ATOMIC]};Blockly.bash.blockly_comment=function(a){a.getFieldValue("comment_text");return""};Blockly.bash.blockly_separator=function(a){return""};
Blockly.bash.arbitrary_converter=function(a){return Blockly.bash.valueToCode(a,"content",Blockly.bash.ORDER_NONE)+"\n"};Blockly.bash.functions_return=function(a){a=Blockly.bash.valueToCode(a,"varName",Blockly.bash.ORDER_NONE)||"";""!=a&&(a=" "+a);return"return"+a+"\n"};Blockly.bash.arbitrary_deconverter=function(a){return[Blockly.bash.statementToCode(a,"NAME").trim(),Blockly.bash.ORDER_ATOMIC]};Blockly.bash.bash={};Blockly.Generator.prototype.INDENT="\t";Blockly.bash.bash_case=function(a){var b=Blockly.bash.valueToCode(a,"caseData",Blockly.bash.ORDER_ATOMIC);a=Blockly.bash.statementToCode(a,"caseActions")||"\n";return"case "+b+" in\n"+a+"esac\n"};Blockly.bash.bash_in=function(a){var b=Blockly.bash.valueToCode(a,"inData",Blockly.bash.ORDER_ATOMIC),c=Blockly.bash.statementToCode(a,"inActions")||"\n";a=a.getFieldValue("punctuation");return""+b+")\n"+c+a+"\n"};
Blockly.bash.bash_deref=function(a){return['"$'+Blockly.bash.valueToCode(a,"source",Blockly.bash.ORDER_ATOMIC)+'"',Blockly.bash.ORDER_ATOMIC]};Blockly.bash.bash_deref_unquoted=function(a){return["$"+Blockly.bash.valueToCode(a,"source",Blockly.bash.ORDER_ATOMIC),Blockly.bash.ORDER_ATOMIC]};Blockly.bash.bash_getlist=function(a){return['"${'+Blockly.bash.variableDB_.getName(a.getFieldValue("variableName"),Blockly.Variables.NAME_TYPE)+'[@]}"',Blockly.bash.ORDER_ATOMIC]};
Blockly.bash.bash_addlist=function(a){var b=Blockly.bash.variableDB_.getName(a.getFieldValue("variableName"),Blockly.Variables.NAME_TYPE);a=Blockly.bash.valueToCode(a,"content",Blockly.bash.ORDER_ATOMIC);return b+"+=( "+a+" )\n"};Blockly.bash.bash_command_substitution=function(a){return["$("+Blockly.bash.valueToCode(a,"NAME",Blockly.bash.ORDER_ATOMIC)+")",Blockly.bash.ORDER_ATOMIC]};
Blockly.bash.bash_pipe=function(a){var b=Blockly.bash.valueToCode(a,"source",Blockly.bash.ORDER_ATOMIC);a=Blockly.bash.valueToCode(a,"destination",Blockly.bash.ORDER_ATOMIC);return[b+" | "+a,Blockly.bash.ORDER_ATOMIC]};Blockly.bash.bash_specvar=function(a){return['"$'+a.getFieldValue("NAME")+'"',Blockly.bash.ORDER_ATOMIC]};Blockly.bash.bash_doublequote=function(a){return['"'+Blockly.bash.valueToCode(a,"NAME",Blockly.bash.ORDER_ATOMIC)+'"',Blockly.bash.ORDER_ATOMIC]};
Blockly.bash.bash_singlequote=function(a){return["'"+Blockly.bash.valueToCode(a,"NAME",Blockly.bash.ORDER_ATOMIC)+"'",Blockly.bash.ORDER_ATOMIC]};Blockly.bash.bash_local=function(a){return"local "+Blockly.bash.valueToCode(a,"NAME",Blockly.bash.ORDER_ATOMIC)+"\n"};Blockly.bash.bash_export=function(a){return"export "+Blockly.bash.valueToCode(a,"NAME",Blockly.bash.ORDER_ATOMIC)+"\n"};
Blockly.bash.bash_functions_arg=function(a){var b=Blockly.bash.valueToCode(a,"data",Blockly.bash.ORDER_ATOMIC);a=a.getFieldValue("punctuation");return b+a};Blockly.bash.bash_functioncall=function(a){var b=a.getFieldValue("functionCall");a=Blockly.bash.statementToCode(a,"NAME");return b+" "+a.substring(2)+"\n"};
Blockly.bash.bash_here=function(a){Blockly.Generator.prototype.INDENT="";var b=a.getFieldValue("hereDocName");a=Blockly.bash.statementToCode(a,"NAME");Blockly.Generator.prototype.INDENT="\t";return b+"() {\ncat << CZXWXcRMTo8EmM8i4d\n"+a+"CZXWXcRMTo8EmM8i4d\n}\n"};Blockly.bash.colour={};Blockly.Generator.prototype.INDENT="\t";Blockly.bash.colour_picker=function(a){return["'"+a.getFieldValue("COLOUR")+"'",Blockly.bash.ORDER_ATOMIC]};Blockly.bash.colour_random=function(a){Blockly.bash.definitions_.import_random="import random";return["'#%06x' % random.randint(0, 2**24 - 1)",Blockly.bash.ORDER_FUNCTION_CALL]};
Blockly.bash.colour_rgb=function(a){var b=Blockly.bash.provideFunction_("colour_rgb",["def "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+"(r, g, b):","  r = round(min(100, max(0, r)) * 2.55)","  g = round(min(100, max(0, g)) * 2.55)","  b = round(min(100, max(0, b)) * 2.55)","  return '#%02x%02x%02x' % (r, g, b)"]),c=Blockly.bash.valueToCode(a,"RED",Blockly.bash.ORDER_NONE)||0,d=Blockly.bash.valueToCode(a,"GREEN",Blockly.bash.ORDER_NONE)||0;a=Blockly.bash.valueToCode(a,"BLUE",Blockly.bash.ORDER_NONE)||
0;return[b+"("+c+", "+d+", "+a+")",Blockly.bash.ORDER_FUNCTION_CALL]};
Blockly.bash.colour_blend=function(a){var b=Blockly.bash.provideFunction_("colour_blend",["def "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+"(colour1, colour2, ratio):","  r1, r2 = int(colour1[1:3], 16), int(colour2[1:3], 16)","  g1, g2 = int(colour1[3:5], 16), int(colour2[3:5], 16)","  b1, b2 = int(colour1[5:7], 16), int(colour2[5:7], 16)","  ratio = min(1, max(0, ratio))","  r = round(r1 * (1 - ratio) + r2 * ratio)","  g = round(g1 * (1 - ratio) + g2 * ratio)","  b = round(b1 * (1 - ratio) + b2 * ratio)",
"  return '#%02x%02x%02x' % (r, g, b)"]),c=Blockly.bash.valueToCode(a,"COLOUR1",Blockly.bash.ORDER_NONE)||"'#000000'",d=Blockly.bash.valueToCode(a,"COLOUR2",Blockly.bash.ORDER_NONE)||"'#000000'";a=Blockly.bash.valueToCode(a,"RATIO",Blockly.bash.ORDER_NONE)||0;return[b+"("+c+", "+d+", "+a+")",Blockly.bash.ORDER_FUNCTION_CALL]};Blockly.bash.lists={};Blockly.Generator.prototype.INDENT="\t";Blockly.bash.lists_create_empty=function(a){return['""',Blockly.bash.ORDER_ATOMIC]};Blockly.bash.lists_create_with=function(a){for(var b=Array(a.itemCount_),c=0;c<a.itemCount_;c++)b[c]=Blockly.bash.valueToCode(a,"ADD"+c,Blockly.bash.ORDER_NONE)||"None";return["("+b.join(" ")+")",Blockly.bash.ORDER_ATOMIC]};Blockly.bash.lists_repeat=function(a){return["garbage",Blockly.c.ORDER_ATOMIC]};
Blockly.bash.lists_length=function(a){return["garbage",Blockly.c.ORDER_ATOMIC]};Blockly.bash.lists_isEmpty=function(a){return["garbage",Blockly.c.ORDER_ATOMIC]};Blockly.bash.lists_indexOf=function(a){return["garbage",Blockly.c.ORDER_ATOMIC]};Blockly.bash.lists_getIndex=function(a){return["garbage",Blockly.c.ORDER_ATOMIC]};Blockly.bash.lists_setIndex=function(a){return["garbage",Blockly.c.ORDER_ATOMIC]};Blockly.bash.lists_getSublist=function(a){return["garbage",Blockly.c.ORDER_ATOMIC]};
Blockly.bash.lists_sort=function(a){return["garbage",Blockly.c.ORDER_ATOMIC]};Blockly.bash.lists_split=function(a){return["garbage",Blockly.c.ORDER_ATOMIC]};Blockly.bash.lists_reverse=function(a){return["garbage",Blockly.c.ORDER_ATOMIC]};Blockly.bash.logic={};Blockly.Generator.prototype.INDENT="\t";Blockly.bash.controls_if=function(a){var b=0,c="";do{var d=Blockly.bash.valueToCode(a,"IF"+b,Blockly.bash.ORDER_NONE)||"false";var e=Blockly.bash.statementToCode(a,"DO"+b)||Blockly.bash.PASS;c+=(0==b?"if ":"elif ")+d+"\n"+(0==b?"then \n":"")+e;++b}while(a.getInput("IF"+b));a.getInput("ELSE")&&(e=Blockly.bash.statementToCode(a,"ELSE")||Blockly.bash.PASS,c+="else\n"+e);return c+"fi\n"};Blockly.bash.controls_ifelse=Blockly.bash.controls_if;
Blockly.bash.logic_compare=function(a){var b={EQ:"==",NEQ:"!=",LT:"-lt",LTE:"-le",GT:"-gt",GTE:"-ge"}[a.getFieldValue("OP")],c=Blockly.bash.ORDER_RELATIONAL,d=Blockly.bash.valueToCode(a,"A",c)||"0";a=Blockly.bash.valueToCode(a,"B",c)||"0";return["[[ "+d+" "+b+" "+a+" ]]",c]};
Blockly.bash.logic_operation=function(a){var b="AND"==a.getFieldValue("OP")?"&&":"||",c="and"==b?Blockly.bash.ORDER_LOGICAL_AND:Blockly.bash.ORDER_LOGICAL_OR,d=Blockly.bash.valueToCode(a,"A",c);a=Blockly.bash.valueToCode(a,"B",c);if(d||a){var e="&&"==b?"true":"false";d||(d=e);a||(a=e)}else a=d="false";return[d+" "+b+" "+a,c]};Blockly.bash.logic_negate=function(a){return["! "+(Blockly.bash.valueToCode(a,"BOOL",Blockly.bash.ORDER_LOGICAL_NOT)||"true"),Blockly.bash.ORDER_LOGICAL_NOT]};
Blockly.bash.logic_boolean=function(a){return["TRUE"==a.getFieldValue("BOOL")?"true":"false",Blockly.bash.ORDER_ATOMIC]};Blockly.bash.logic_null=function(a){return['""',Blockly.bash.ORDER_ATOMIC]};Blockly.bash.logic_ternary=function(a){var b=Blockly.bash.valueToCode(a,"IF",Blockly.bash.ORDER_CONDITIONAL)||"false",c=Blockly.bash.valueToCode(a,"THEN",Blockly.bash.ORDER_CONDITIONAL)||"false";a=Blockly.bash.valueToCode(a,"ELSE",Blockly.bash.ORDER_CONDITIONAL)||"false";return[b+" && "+c+" || "+a,Blockly.bash.ORDER_CONDITIONAL]};Blockly.bash.loops={};Blockly.Generator.prototype.INDENT="\t";
Blockly.bash.controls_repeat_ext=function(a){var b=a.getField("TIMES")?String(parseInt(a.getFieldValue("TIMES"),10)):Blockly.bash.valueToCode(a,"TIMES",Blockly.bash.ORDER_NONE)||"0";b=Blockly.isNumber(b)?parseInt(b,10):"int("+b+")";var c=Blockly.bash.statementToCode(a,"DO");c=Blockly.bash.addLoopTrap(c,a.id)||Blockly.bash.PASS;return"for "+Blockly.bash.variableDB_.getDistinctName("count",Blockly.Variables.NAME_TYPE)+" in range("+b+"):\n"+c};Blockly.bash.controls_repeat=Blockly.bash.controls_repeat_ext;
Blockly.bash.controls_whileUntil=function(a){var b="UNTIL"==a.getFieldValue("MODE"),c=Blockly.bash.valueToCode(a,"BOOL",b?Blockly.bash.ORDER_LOGICAL_NOT:Blockly.bash.ORDER_NONE)||"false",d=Blockly.bash.statementToCode(a,"DO");d=Blockly.bash.addLoopTrap(d,a.id)||Blockly.bash.PASS;b&&(c="! "+c);return"while "+c+"\ndo\n"+d+"done\n"};
Blockly.bash.controls_for=function(a){var b=Blockly.bash.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),c=Blockly.bash.valueToCode(a,"FROM",Blockly.bash.ORDER_NONE)||"0",d=Blockly.bash.valueToCode(a,"TO",Blockly.bash.ORDER_NONE)||"0",e=Blockly.bash.valueToCode(a,"BY",Blockly.bash.ORDER_NONE)||"1",f=Blockly.bash.statementToCode(a,"DO");f=Blockly.bash.addLoopTrap(f,a.id)||Blockly.bash.PASS;return"for "+b+" in $(seq "+(c+" "+e+" "+d)+")\ndo\n"+f+"done\n"};
Blockly.bash.controls_forEach=function(a){var b=Blockly.bash.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),c=Blockly.bash.valueToCode(a,"LIST",Blockly.bash.ORDER_RELATIONAL)||'"$@"',d=Blockly.bash.statementToCode(a,"DO");d=Blockly.bash.addLoopTrap(d,a.id)||Blockly.bash.PASS;return"for "+b+" in "+c+"\ndo\n"+d+"done\n"};
Blockly.bash.controls_flow_statements=function(a){switch(a.getFieldValue("FLOW")){case "BREAK":return"break\n";case "CONTINUE":return"continue\n"}throw"Unknown flow statement.";};Blockly.bash.math={};Blockly.Generator.prototype.INDENT="\t";Blockly.bash.addReservedWords("math,random,Number");Blockly.bash.math_number=function(a){a=parseFloat(a.getFieldValue("NUM"));if(Infinity==a){a='float("inf")';var b=Blockly.bash.ORDER_FUNCTION_CALL}else-Infinity==a?(a='-float("inf")',b=Blockly.bash.ORDER_UNARY_SIGN):b=0>a?Blockly.bash.ORDER_UNARY_SIGN:Blockly.bash.ORDER_ATOMIC;return[a,b]};
Blockly.bash.math_arithmetic=function(a){var b={ADD:[" + ",Blockly.bash.ORDER_ADDITIVE],MINUS:[" - ",Blockly.bash.ORDER_ADDITIVE],MULTIPLY:[" * ",Blockly.bash.ORDER_MULTIPLICATIVE],DIVIDE:[" / ",Blockly.bash.ORDER_MULTIPLICATIVE],POWER:[" ** ",Blockly.bash.ORDER_EXPONENTIATION]}[a.getFieldValue("OP")],c=b[0];b=b[1];var d=Blockly.bash.valueToCode(a,"A",b)||"0";a=Blockly.bash.valueToCode(a,"B",b)||"0";return["echo $(("+d+c+a+"))",b]};
Blockly.bash.math_single=function(a){var b=a.getFieldValue("OP");if("NEG"==b){var c=Blockly.bash.valueToCode(a,"NUM",Blockly.bash.ORDER_UNARY_SIGN)||"0";return["-"+c,Blockly.bash.ORDER_UNARY_SIGN]}Blockly.bash.definitions_.import_math="import math";a="SIN"==b||"COS"==b||"TAN"==b?Blockly.bash.valueToCode(a,"NUM",Blockly.bash.ORDER_MULTIPLICATIVE)||"0":Blockly.bash.valueToCode(a,"NUM",Blockly.bash.ORDER_NONE)||"0";switch(b){case "ABS":c="math.fabs("+a+")";break;case "ROOT":c="math.sqrt("+a+")";break;
case "LN":c="math.log("+a+")";break;case "LOG10":c="math.log10("+a+")";break;case "EXP":c="math.exp("+a+")";break;case "POW10":c="math.pow(10,"+a+")";break;case "ROUND":c="round("+a+")";break;case "ROUNDUP":c="math.ceil("+a+")";break;case "ROUNDDOWN":c="math.floor("+a+")";break;case "SIN":c="math.sin("+a+" / 180.0 * math.pi)";break;case "COS":c="math.cos("+a+" / 180.0 * math.pi)";break;case "TAN":c="math.tan("+a+" / 180.0 * math.pi)"}if(c)return[c,Blockly.bash.ORDER_FUNCTION_CALL];switch(b){case "ASIN":c=
"math.asin("+a+") / math.pi * 180";break;case "ACOS":c="math.acos("+a+") / math.pi * 180";break;case "ATAN":c="math.atan("+a+") / math.pi * 180";break;default:throw"Unknown math operator: "+b;}return[c,Blockly.bash.ORDER_MULTIPLICATIVE]};
Blockly.bash.math_constant=function(a){var b={PI:["math.pi",Blockly.bash.ORDER_MEMBER],E:["math.e",Blockly.bash.ORDER_MEMBER],GOLDEN_RATIO:["(1 + math.sqrt(5)) / 2",Blockly.bash.ORDER_MULTIPLICATIVE],SQRT2:["math.sqrt(2)",Blockly.bash.ORDER_MEMBER],SQRT1_2:["math.sqrt(1.0 / 2)",Blockly.bash.ORDER_MEMBER],INFINITY:["float('inf')",Blockly.bash.ORDER_ATOMIC]};a=a.getFieldValue("CONSTANT");"INFINITY"!=a&&(Blockly.bash.definitions_.import_math="import math");return b[a]};
Blockly.bash.math_number_property=function(a){var b=Blockly.bash.valueToCode(a,"NUMBER_TO_CHECK",Blockly.bash.ORDER_MULTIPLICATIVE)||"0",c=a.getFieldValue("PROPERTY");if("PRIME"==c)return Blockly.bash.definitions_.import_math="import math",Blockly.bash.definitions_.from_numbers_import_Number="from numbers import Number",[Blockly.bash.provideFunction_("math_isPrime",["def "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+"(n):","  # https://en.wikipedia.org/wiki/Primality_test#Naive_methods","  # If n is not a number but a string, try parsing it.",
"  if not isinstance(n, Number):","    try:","      n = float(n)","    except:","      return False","  if n == 2 or n == 3:","    return True","  # False if n is negative, is 1, or not whole, or if n is divisible by 2 or 3.","  if n <= 1 or n % 1 != 0 or n % 2 == 0 or n % 3 == 0:","    return False","  # Check all the numbers of form 6k +/- 1, up to sqrt(n).","  for x in range(6, int(math.sqrt(n)) + 2, 6):","    if n % (x - 1) == 0 or n % (x + 1) == 0:","      return False","  return True"])+"("+
b+")",Blockly.bash.ORDER_FUNCTION_CALL];switch(c){case "EVEN":var d=b+" % 2 == 0";break;case "ODD":d=b+" % 2 == 1";break;case "WHOLE":d=b+" % 1 == 0";break;case "POSITIVE":d=b+" > 0";break;case "NEGATIVE":d=b+" < 0";break;case "DIVISIBLE_BY":a=Blockly.bash.valueToCode(a,"DIVISOR",Blockly.bash.ORDER_MULTIPLICATIVE);if(!a||"0"==a)return["False",Blockly.bash.ORDER_ATOMIC];d=b+" % "+a+" == 0"}return[d,Blockly.bash.ORDER_RELATIONAL]};
Blockly.bash.math_change=function(a){var b=Blockly.bash.valueToCode(a,"DELTA",Blockly.bash.ORDER_ADDITIVE)||"0";a=Blockly.bash.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);return"let "+a+"="+a+"+"+b+"\n"};Blockly.bash.math_round=Blockly.bash.math_single;Blockly.bash.math_trig=Blockly.bash.math_single;
Blockly.bash.math_on_list=function(a){var b=a.getFieldValue("OP");a=Blockly.bash.valueToCode(a,"LIST",Blockly.bash.ORDER_NONE)||"[]";switch(b){case "SUM":b="sum("+a+")";break;case "MIN":b="min("+a+")";break;case "MAX":b="max("+a+")";break;case "AVERAGE":Blockly.bash.definitions_.from_numbers_import_Number="from numbers import Number";b=Blockly.bash.provideFunction_("math_mean",["def "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+"(myList):","  localList = [e for e in myList if isinstance(e, Number)]",
"  if not localList: return","  return float(sum(localList)) / len(localList)"]);b=b+"("+a+")";break;case "MEDIAN":Blockly.bash.definitions_.from_numbers_import_Number="from numbers import Number";b=Blockly.bash.provideFunction_("math_median",["def "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+"(myList):","  localList = sorted([e for e in myList if isinstance(e, Number)])","  if not localList: return","  if len(localList) % 2 == 0:","    return (localList[len(localList) // 2 - 1] + localList[len(localList) // 2]) / 2.0",
"  else:","    return localList[(len(localList) - 1) // 2]"]);b=b+"("+a+")";break;case "MODE":b=Blockly.bash.provideFunction_("math_modes",["def "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+"(some_list):","  modes = []","  # Using a lists of [item, count] to keep count rather than dict",'  # to avoid "unhashable" errors when the counted item is itself a list or dict.',"  counts = []","  maxCount = 1","  for item in some_list:","    found = False","    for count in counts:","      if count[0] == item:",
"        count[1] += 1","        maxCount = max(maxCount, count[1])","        found = True","    if not found:","      counts.append([item, 1])","  for counted_item, item_count in counts:","    if item_count == maxCount:","      modes.append(counted_item)","  return modes"]);b=b+"("+a+")";break;case "STD_DEV":Blockly.bash.definitions_.import_math="import math";b=Blockly.bash.provideFunction_("math_standard_deviation",["def "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+"(numbers):","  n = len(numbers)",
"  if n == 0: return","  mean = float(sum(numbers)) / n","  variance = sum((x - mean) ** 2 for x in numbers) / n","  return math.sqrt(variance)"]);b=b+"("+a+")";break;case "RANDOM":Blockly.bash.definitions_.import_random="import random";b="random.choice("+a+")";break;default:throw"Unknown operator: "+b;}return[b,Blockly.bash.ORDER_FUNCTION_CALL]};
Blockly.bash.math_modulo=function(a){var b=Blockly.bash.valueToCode(a,"DIVIDEND",Blockly.bash.ORDER_MULTIPLICATIVE)||"0";a=Blockly.bash.valueToCode(a,"DIVISOR",Blockly.bash.ORDER_MULTIPLICATIVE)||"0";return[b+" % "+a,Blockly.bash.ORDER_MULTIPLICATIVE]};
Blockly.bash.math_constrain=function(a){var b=Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_NONE)||"0",c=Blockly.bash.valueToCode(a,"LOW",Blockly.bash.ORDER_NONE)||"0";a=Blockly.bash.valueToCode(a,"HIGH",Blockly.bash.ORDER_NONE)||"float('inf')";return["min(max("+b+", "+c+"), "+a+")",Blockly.bash.ORDER_FUNCTION_CALL]};
Blockly.bash.math_random_int=function(a){var b=Blockly.bash.valueToCode(a,"FROM",Blockly.bash.ORDER_NONE)||"0";return["expr $(expr $RANDOM % "+((Blockly.bash.valueToCode(a,"TO",Blockly.bash.ORDER_NONE)||0)-b+1)+") + "+b,Blockly.bash.ORDER_FUNCTION_CALL]};Blockly.bash.math_random_float=function(a){Blockly.bash.definitions_.import_random="import random";return["random.random()",Blockly.bash.ORDER_FUNCTION_CALL]};Blockly.bash.procedures={};Blockly.Generator.prototype.INDENT="\t";
Blockly.bash.procedures_defreturn=function(a){var b=Blockly.bash.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=Blockly.bash.statementToCode(a,"STACK");if(Blockly.bash.STATEMENT_PREFIX){var d=a.id.replace(/\$/g,"$$$$");c=Blockly.bash.prefixLines(Blockly.bash.STATEMENT_PREFIX.replace(/%1/g,"'"+d+"'"),Blockly.bash.INDENT)+c}Blockly.bash.INFINITE_LOOP_TRAP&&(c=Blockly.bash.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+a.id+"'")+c);(d=Blockly.bash.valueToCode(a,"RETURN",Blockly.bash.ORDER_NONE)||
"")&&(d="\n"+Blockly.bash.INDENT+"return "+d+"\n");for(var e=0;e<a.arguments_.length;e++)Blockly.bash.variableDB_.getName(a.arguments_[e],Blockly.Variables.NAME_TYPE);a=Blockly.bash.scrub_(a,b+"() {\n"+c+d+"}");Blockly.bash.definitions_["%"+b]=a;return null};Blockly.bash.procedures_defnoreturn=Blockly.bash.procedures_defreturn;
Blockly.bash.procedures_callreturn=function(a){for(var b=Blockly.bash.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.bash.valueToCode(a,"ARG"+d,Blockly.bash.ORDER_NONE)||'""';a=b;""!=c[0]&&(a+=" "+c.join(" "));return[a,Blockly.bash.ORDER_ATOMIC]};
Blockly.bash.procedures_callnoreturn=function(a){for(var b=Blockly.bash.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.bash.valueToCode(a,"ARG"+d,Blockly.bash.ORDER_NONE)||'""';a=b;""!=c[0]&&(a+=" "+c.join(" "));return a};
Blockly.bash.procedures_ifreturn=function(a){var b="if "+(Blockly.bash.valueToCode(a,"CONDITION",Blockly.bash.ORDER_NONE)||"false")+"\nthen\n";a.hasReturnValue_?(a=Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_NONE)||'""',b+="\n"+Blockly.bash.INDENT+"return "+a+"\n"):b+="\n"+Blockly.bash.INDENT+"return\n";return b+"fi\n"};Blockly.bash.texts={};Blockly.Generator.prototype.INDENT="\t";Blockly.bash.text=function(a){return[Blockly.bash.quote_(a.getFieldValue("TEXT")),Blockly.bash.ORDER_ATOMIC]};
Blockly.bash.text_join=function(a){switch(a.itemCount_){case 0:return["''",Blockly.bash.ORDER_ATOMIC];case 1:return["str("+(Blockly.bash.valueToCode(a,"ADD0",Blockly.bash.ORDER_NONE)||"''")+")",Blockly.bash.ORDER_FUNCTION_CALL];case 2:var b=Blockly.bash.valueToCode(a,"ADD0",Blockly.bash.ORDER_NONE)||"''";a=Blockly.bash.valueToCode(a,"ADD1",Blockly.bash.ORDER_NONE)||"''";return["str("+b+") + str("+a+")",Blockly.bash.ORDER_ADDITIVE];default:b=[];for(var c=0;c<a.itemCount_;c++)b[c]=Blockly.bash.valueToCode(a,
"ADD"+c,Blockly.bash.ORDER_NONE)||"''";a=Blockly.bash.variableDB_.getDistinctName("x",Blockly.Variables.NAME_TYPE);a="''.join([str("+a+") for "+a+" in ["+b.join(", ")+"]])";return[a,Blockly.bash.ORDER_FUNCTION_CALL]}};Blockly.bash.text_append=function(a){var b=Blockly.bash.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);a=Blockly.bash.valueToCode(a,"TEXT",Blockly.bash.ORDER_NONE)||"''";return b+" = str("+b+") + str("+a+")\n"};
Blockly.bash.text_length=function(a){return["len("+(Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_NONE)||"''")+")",Blockly.bash.ORDER_FUNCTION_CALL]};Blockly.bash.text_isEmpty=function(a){return["not len("+(Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_NONE)||"''")+")",Blockly.bash.ORDER_LOGICAL_NOT]};
Blockly.bash.text_indexOf=function(a){var b="FIRST"==a.getFieldValue("END")?"find":"rfind",c=Blockly.bash.valueToCode(a,"FIND",Blockly.bash.ORDER_NONE)||"''";b=(Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_MEMBER)||"''")+"."+b+"("+c+")";return a.workspace.options.oneBasedIndex?[b+" + 1",Blockly.bash.ORDER_ADDITIVE]:[b,Blockly.bash.ORDER_FUNCTION_CALL]};
Blockly.bash.text_charAt=function(a){var b=a.getFieldValue("WHERE")||"FROM_START",c=Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_MEMBER)||"''";switch(b){case "FIRST":return[c+"[0]",Blockly.bash.ORDER_MEMBER];case "LAST":return[c+"[-1]",Blockly.bash.ORDER_MEMBER];case "FROM_START":return a=Blockly.bash.getAdjustedInt(a,"AT"),[c+"["+a+"]",Blockly.bash.ORDER_MEMBER];case "FROM_END":return a=Blockly.bash.getAdjustedInt(a,"AT",1,!0),[c+"["+a+"]",Blockly.bash.ORDER_MEMBER];case "RANDOM":return Blockly.bash.definitions_.import_random=
"import random",[Blockly.bash.provideFunction_("text_random_letter",["def "+Blockly.bash.FUNCTION_NAME_PLACEHOLDER_+"(text):","  x = int(random.random() * len(text))","  return text[x];"])+"("+c+")",Blockly.bash.ORDER_FUNCTION_CALL]}throw"Unhandled option (text_charAt).";};
Blockly.bash.text_getSubstring=function(a){var b=a.getFieldValue("WHERE1"),c=a.getFieldValue("WHERE2"),d=Blockly.bash.valueToCode(a,"STRING",Blockly.bash.ORDER_MEMBER)||"''";switch(b){case "FROM_START":b=Blockly.bash.getAdjustedInt(a,"AT1");"0"==b&&(b="");break;case "FROM_END":b=Blockly.bash.getAdjustedInt(a,"AT1",1,!0);break;case "FIRST":b="";break;default:throw"Unhandled option (text_getSubstring)";}switch(c){case "FROM_START":a=Blockly.bash.getAdjustedInt(a,"AT2",1);break;case "FROM_END":a=Blockly.bash.getAdjustedInt(a,
"AT2",0,!0);Blockly.isNumber(String(a))?"0"==a&&(a=""):(Blockly.bash.definitions_.import_sys="import sys",a+=" or sys.maxsize");break;case "LAST":a="";break;default:throw"Unhandled option (text_getSubstring)";}return[d+"["+b+" : "+a+"]",Blockly.bash.ORDER_MEMBER]};Blockly.bash.text_changeCase=function(a){var b={UPPERCASE:".upper()",LOWERCASE:".lower()",TITLECASE:".title()"}[a.getFieldValue("CASE")];return[(Blockly.bash.valueToCode(a,"TEXT",Blockly.bash.ORDER_MEMBER)||"''")+b,Blockly.bash.ORDER_FUNCTION_CALL]};
Blockly.bash.text_trim=function(a){var b={LEFT:".lstrip()",RIGHT:".rstrip()",BOTH:".strip()"}[a.getFieldValue("MODE")];return[(Blockly.bash.valueToCode(a,"TEXT",Blockly.bash.ORDER_MEMBER)||"''")+b,Blockly.bash.ORDER_FUNCTION_CALL]};Blockly.bash.text_print=function(a){return"echo "+(Blockly.bash.valueToCode(a,"TEXT",Blockly.bash.ORDER_NONE)||"''")+"\n"};
Blockly.bash.text_prompt_ext=function(a){return["echo "+(a.getField("TEXT")?Blockly.bash.quote_(a.getFieldValue("TEXT")):Blockly.bash.valueToCode(a,"TEXT",Blockly.bash.ORDER_NONE)||"''")+"; head -n1",Blockly.bash.ORDER_FUNCTION_CALL]};Blockly.bash.text_prompt=Blockly.bash.text_prompt_ext;Blockly.bash.text_count=function(a){var b=Blockly.bash.valueToCode(a,"TEXT",Blockly.bash.ORDER_MEMBER)||"''";a=Blockly.bash.valueToCode(a,"SUB",Blockly.bash.ORDER_NONE)||"''";return[b+".count("+a+")",Blockly.bash.ORDER_MEMBER]};
Blockly.bash.text_replace=function(a){var b=Blockly.bash.valueToCode(a,"TEXT",Blockly.bash.ORDER_MEMBER)||"''",c=Blockly.bash.valueToCode(a,"FROM",Blockly.bash.ORDER_NONE)||"''";a=Blockly.bash.valueToCode(a,"TO",Blockly.bash.ORDER_NONE)||"''";return[b+".replace("+c+", "+a+")",Blockly.bash.ORDER_MEMBER]};Blockly.bash.text_reverse=function(a){return[(Blockly.bash.valueToCode(a,"TEXT",Blockly.bash.ORDER_MEMBER)||"''")+"[::-1]",Blockly.bash.ORDER_MEMBER]};Blockly.bash.ub={};Blockly.Generator.prototype.INDENT="\t";Blockly.bash.ub_scriptabsolutelocation=function(a){return'"$scriptAbsoluteLocation" '+Blockly.bash.statementToCode(a,"NAME").substring(2)+"\n"};Blockly.bash.ub_virt_editfakehome=function(a){return"_editFakeHome "+Blockly.bash.statementToCode(a,"NAME").substring(2)+"\n"};Blockly.bash.ub_virt_userfakehome=function(a){return"_userFakeHome "+Blockly.bash.statementToCode(a,"NAME").substring(2)+"\n"};
Blockly.bash.ub_virt_userqemu=function(a){return"_userQemu "+Blockly.bash.statementToCode(a,"NAME").substring(2)+"\n"};Blockly.bash.ub_virt_uservbox=function(a){return"_userVBox "+Blockly.bash.statementToCode(a,"NAME").substring(2)+"\n"};Blockly.bash.ub_virt_userchroot=function(a){return"_userChRoot "+Blockly.bash.statementToCode(a,"NAME").substring(2)+"\n"};
Blockly.bash._ub_here_ssh_config=function(a){Blockly.Generator.prototype.INDENT="";a=Blockly.bash.statementToCode(a,"NAME");Blockly.Generator.prototype.INDENT="\t";return"_here_ssh_config() {\ncat << CZXWXcRMTo8EmM8i4d\n"+a+"CZXWXcRMTo8EmM8i4d\n}\n"};
Blockly.bash._ub_ssh_header=function(a){var b="Host "+a.getFieldValue("hostname"),c=a.getFieldValue("commentCompression"),d=a.getFieldValue("Compression"),e=a.getFieldValue("commentExitOnForwardFailure"),f=a.getFieldValue("ExitOnForwardFailure"),g=a.getFieldValue("commentConnectTimeout"),h=a.getFieldValue("ConnectTimeout"),k=a.getFieldValue("commentConnectionAttempts"),l=a.getFieldValue("ConnectionAttempts"),m=a.getFieldValue("commentServerAliveInterval"),n=a.getFieldValue("ServerAliveInterval"),
p=a.getFieldValue("commentServerAliveCountMax"),q=a.getFieldValue("ServerServerAliveCountMax"),r=a.getFieldValue("commentPubkeyAuthentication"),t=a.getFieldValue("PubkeyAuthentication"),u=a.getFieldValue("commentPasswordAuthentication"),v=a.getFieldValue("PasswordAuthentication"),w=a.getFieldValue("commentStrictHostKeyChecking"),x=a.getFieldValue("StrictHostKeyChecking"),y=a.getFieldValue("commentUserKnownHostsFile"),z=a.getFieldValue("UserKnownHostsFile"),A=a.getFieldValue("commentIdentityFile"),
B=a.getFieldValue("IdentityFile"),C=a.getFieldValue("commentCipher"),D=a.getFieldValue("Cipher"),E=a.getFieldValue("commentCiphers");a=a.getFieldValue("Ciphers");b="\n"+(b+"\n")+("\t"+c+"Compression "+d+"\n")+("\t"+e+"ExitOnForwardFailure "+f+"\n");b+="\t"+g+"ConnectTimeout "+h+"\n";b+="\t"+k+"ConnectionAttempts "+l+"\n";b+="\t"+m+"ServerAliveInterval "+n+"\n";b+="\t"+p+"ServerServerAliveCountMax "+q+"\n";b+="\t"+r+"PubkeyAuthentication "+t+"\n";b+="\t"+u+"PasswordAuthentication "+v+"\n";b+="\t"+
w+"StrictHostKeyChecking "+x+"\n";b+="\t"+y+"UserKnownHostsFile "+z+"\n";b+="\t"+A+"IdentityFile "+B+"\n";b+="\t"+C+"Cipher "+D+"\n";b+="\t"+E+"Ciphers "+a+"\n";return b+="\n"};
Blockly.bash._ub_ssh_host=function(a){var b=a.getFieldValue("hostname"),c=a.getFieldValue("netname"),d=a.getFieldValue("commentProxyCommand"),e=a.getFieldValue("ProxyCommand"),f=a.getFieldValue("commentUser"),g=a.getFieldValue("User"),h=a.getFieldValue("commentIdentityFile");a=a.getFieldValue("IdentityFile");b=b+c+"\n"+("\t"+d+"ProxyCommand "+e+"\n")+("\t"+f+"User "+g+"\n");b+="\t"+h+"IdentityFile "+a+"\n";return b+="\n"};
Blockly.bash._ub_proxyssh=function(a){var b=a.getFieldValue("hostname"),c=a.getFieldValue("port");a=a.getFieldValue("address");return b='if [[ "$proxySSH_loopGuard" != "true" ]]\nthen\n\texport proxySSH_loopGuard="true"\n\t_proxySSH '+(b+" "+c+" "+a+"\n")+"fi\n\n"};Blockly.bash._ub_proxy=function(a){var b=a.getFieldValue("hostname");a=a.getFieldValue("port");return"_proxy "+b+" "+a+"\n\n"};
Blockly.bash._ub_proxyssh_reverse=function(a){var b=a.getFieldValue("hostname");a=a.getFieldValue("jump");return"_proxySSH_reverse "+b+" "+a+"\n\n"};Blockly.bash._ub_proxyTor=function(a){var b=a.getFieldValue("hostname");a=a.getFieldValue("port");return"_proxyTor "+b+" "+a+"\n\n"};Blockly.bash._ub_proxyTor_reverse=function(a){var b=a.getFieldValue("hostname");a=a.getFieldValue("address");return"_proxyTor_reverse "+b+" "+a+"\n\n"};
Blockly.bash._ub_check_lan=function(a){var b=a.getFieldValue("network");a=a.getFieldValue("NAME");b="_check_LAN_"+b+"() {\n"+("\tip addr show | grep "+a+" > /dev/null 2>&1 && return 0\n")+"\treturn 1\n";return b+="}\n"};Blockly.bash._ub_ssh_proxy_machine_network=function(a){var b=a.getFieldValue("hostname");a=Blockly.bash.statementToCode(a,"NAME");b="_ssh_proxy_"+b+"() {\n\t_start\n\n"+a;b+="\n\t_stop\n";return b+="}\n"};
Blockly.bash._ub_get_reverseports=function(a){a='_get_reversePorts() {\n\texport matchingReversePorts\n\tmatchingReversePorts=()\n\texport matchingEMBEDDED="false"\n\n\tlocal matched\n\n\tlocal testHostname\n\ttestHostname="$1"\n\t[[ "$testHostname" == "" ]] && testHostname=$(hostname -s)\n\n'+Blockly.bash.statementToCode(a,"conditions")+"\n";return a+'\texport matchingReversePorts\n}\n_get_reversePorts\nexport reversePorts=("${matchingReversePorts[@]}")\nexport EMBEDDED="$matchingEMBEDDED"\n'};
Blockly.bash._ub_netvars=function(a){var b=a.getFieldValue("netName"),c=a.getFieldValue("gatewayName");a=a.getFieldValue("LOCALSSHPORT");b="# WARNING Must use unique netName!\n"+("export netName="+b+"\n")+("export gatewayName="+c+"\n")+("export LOCALSSHPORT="+a+"\n");return b+="\n"};
Blockly.bash._ub_autosshvars=function(a){var b=a.getFieldValue("commentAUTOSSH_FIRST_POLL"),c=a.getFieldValue("AUTOSSH_FIRST_POLL"),d=a.getFieldValue("commentAUTOSSH_POLL"),e=a.getFieldValue("AUTOSSH_POLL"),f=a.getFieldValue("commentAUTOSSH_GATETIME_disable"),g=a.getFieldValue("AUTOSSH_GATETIME_disable"),h=a.getFieldValue("commentAUTOSSH_GATETIME"),k=a.getFieldValue("AUTOSSH_GATETIME"),l=a.getFieldValue("commentAUTOSSH_PORT"),m=a.getFieldValue("AUTOSSH_PORT"),n=a.getFieldValue("commentAUTOSSH_DEBUG"),
p=a.getFieldValue("AUTOSSH_DEBUG"),q=a.getFieldValue("commentAUTOSSH_LOGLEVEL");a=a.getFieldValue("AUTOSSH_LOGLEVEL");b=b+"export AUTOSSH_FIRST_POLL="+c+"\n"+(d+"export AUTOSSH_POLL="+e+"\n")+(f+"export AUTOSSH_GATETIME="+g+"\n");b+=h+"export AUTOSSH_GATETIME="+k+"\n";b+=l+"export AUTOSSH_PORT="+m+"\n";b+=n+"export AUTOSSH_DEBUG="+p+"\n";b+=q+"export AUTOSSH_LOGLEVEL="+a+"\n";return b+="\n"};Blockly.bash.variables={};Blockly.Generator.prototype.INDENT="\t";Blockly.bash.variables_get=function(a){return[Blockly.bash.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),Blockly.bash.ORDER_ATOMIC]};Blockly.bash.variables_set=function(a){var b=Blockly.bash.valueToCode(a,"VALUE",Blockly.bash.ORDER_NONE)||"0";return Blockly.bash.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+"="+b+"\n"};
Blockly.bash.variablesDynamic={};Blockly.Generator.prototype.INDENT="\t";Blockly.bash.variables_get_dynamic=Blockly.bash.variables_get;Blockly.bash.variables_set_dynamic=Blockly.bash.variables_set;