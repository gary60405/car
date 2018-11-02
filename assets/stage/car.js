function setUpBlock() {
  Blockly.Blocks['pressup'] = {
    init: function() {
      this.appendValueInput("key")
          .setCheck(null)
          .appendField("按下上鍵");
          this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['pressleft'] = {
    init: function() {
      this.appendValueInput("key")
          .setCheck(null)
          .appendField("按下左鍵");
          this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['pressright'] = {
    init: function() {
      this.appendValueInput("key")
          .setCheck(null)
          .appendField("按下右鍵");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
    Blockly.Blocks['carleft'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("車往左開");
        this.setOutput(true, null);
        this.setColour(230);
     this.setTooltip("");
     this.setHelpUrl("");
      }
  };
  Blockly.Blocks['carright'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("車往右開");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
Blockly.Blocks['collision'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("撞到障礙物");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['click_close'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("點擊關閉");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
  Blockly.Blocks['start'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("開始");
      this.setOutput(true, null);
      this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    }
  };
}
Blockly.Blocks['programstart'] = {
  init: function() {
    this.appendStatementInput("statement")
        .setCheck(null)
        .appendField("程式啟動");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['display'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("顯示記分板");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['close'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("關閉記分板");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['calculate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("計算里程");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['display'] = (block) => '';
Blockly.JavaScript['close'] = (block) => '';
Blockly.JavaScript['calculate'] = (block) => '';
Blockly.JavaScript['carleft'] = (block) => 'carleft';
Blockly.JavaScript['carright'] = (block) => 'carright';
Blockly.JavaScript['start'] = (block) => 'start';
Blockly.JavaScript['collision'] = (block) => 'false';
Blockly.JavaScript['click_close'] = (block) => 'false';
Blockly.JavaScript['pressup'] = (block) => {
  try {
    const object = Blockly.JavaScript.statementToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC).trim();
    return `diveLinker.Send(parseInt(diveState['${object}']['move']['diveID']),parseInt(diveState['${object}']['move']['value']));`;
  }
  catch (e) {
    const object = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC).trim()
    return `diveLinker.Send(parseInt(diveState[${object}]['move']['diveID']),parseInt(diveState[${object}]['move']['value']));`;
  }
};
Blockly.JavaScript['pressleft'] = (block) => {
  try {
    const object = Blockly.JavaScript.statementToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC).trim();
    return `diveLinker.Send(parseInt(diveState['${object}']['move']['diveID']),parseInt(diveState['${object}']['move']['value']));`;
  }
  catch (e) {
    const object = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC).trim()
    return `diveLinker.Send(parseInt(diveState[${object}]['move']['diveID']),parseInt(diveState[${object}]['move']['value']));`;
  }
};
Blockly.JavaScript['pressright'] = (block) => {
  try {
    const object = Blockly.JavaScript.statementToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC).trim();
    return `diveLinker.Send(parseInt(diveState['${object}']['move']['diveID']),parseInt(diveState['${object}']['move']['value']));`;
  }
  catch (e) {
    const object = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC).trim()
    return `diveLinker.Send(parseInt(diveState[${object}]['move']['diveID']),parseInt(diveState[${object}]['move']['value']));`;
  }
};
Blockly.JavaScript['programstart'] = (block) => {
 try {
    return Blockly.JavaScript.statementToCode(block, 'statement', Blockly.JavaScript.ORDER_ATOMIC).trim();
  }
  catch (e) {
    return Blockly.JavaScript.valueToCode(block, 'statement', Blockly.JavaScript.ORDER_ATOMIC).trim();
  }
};
const diveState = {
  'carleft': {
    move: {
      diveID: '1540641707831',
      value: '1'
    }
  },
  'carright': {
    move: {
      diveID: '1540641713580',
      value: '1'
    }
  },
  'start': {
    move: {
      diveID: '1540653226084',
      value: '1'
    }
  }
};

const xml = `<xml xmlns="http://www.w3.org/1999/xhtml" id="toolbox" style="display: none;">
<category name="語意">
<block type="programstart"></block>
<block type="pressleft"></block>
<block type="pressright"></block>
<block type="pressup"></block>
<block type="carleft"></block>
<block type="carright"></block>
<block type="start"></block>
<block type="collision"></block>
<block type="click_close"></block>
<block type="display"></block>
<block type="close"></block>
<block type="calculate"></block>
</category>
<category name="邏輯">
  <block type="controls_if"></block>
  <block type="logic_compare">
    <field name="OP">EQ</field>
  </block>
  <block type="logic_operation">
    <field name="OP">AND</field>
  </block>
  <block type="logic_boolean">
    <field name="BOOL">TRUE</field>
  </block>
</category>
<category name="迴圈">
  <block type="controls_whileUntil">
    <field name="MODE">WHILE</field>
  </block>
  <block type="controls_repeat_ext">
    <value name="TIMES">
      <shadow type="math_number">
        <field name="NUM">10</field>
      </shadow>
    </value>
    <statement name="DO">
      <block type="controls_flow_statements">
        <field name="FLOW">BREAK</field>
      </block>
    </statement>
  </block>
  <block type="controls_forEach">
    <field name="VAR" id="Lq(*:4#{IgmuKrnt*/yw" variabletype="">i</field>
  </block>
  <block type="controls_repeat_ext">
    <value name="TIMES">
      <shadow type="math_number">
        <field name="NUM">10</field>
      </shadow>o0
    </value>
  </block>
</category>
<category name="數學">
  <block type="math_number">
    <field name="NUM">0</field>
  </block>
  <block type="math_arithmetic">
    <field name="OP">ADD</field>
    <value name="A">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
    <value name="B">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
  </block>
</category>
<category name="文字">
    <block type="text_charAt">
      <mutation at="true"></mutation>
      <field name="WHERE">FROM_START</field>
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR" id="t2r9UiF+hb}NLt%[*SJC" variabletype="">text</field>
        </block>
      </value>
    </block>
    <block type="text">
      <field name="TEXT"></field>
    </block>
    <block type="text_append">
      <field name="VAR" id="^~1LG$HUI|D-WScPOx[x" variabletype="">item</field>
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
    </block>
    <block type="text_length">
      <value name="VALUE">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_isEmpty">
      <value name="VALUE">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
    </block>
    <block type="text_indexOf">
      <field name="END">FIRST</field>
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR" id="t2r9UiF+hb}NLt%[*SJC" variabletype="">text</field>
        </block>
      </value>
      <value name="FIND">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_join">
      <mutation items="2"></mutation>
    </block>
    <block type="text_getSubstring">
      <mutation at1="true" at2="true"></mutation>
      <field name="WHERE1">FROM_START</field>
      <field name="WHERE2">FROM_START</field>
      <value name="STRING">
        <block type="variables_get">
          <field name="VAR" id="t2r9UiF+hb}NLt%[*SJC" variabletype="">text</field>
        </block>
      </value>
    </block>
    <block type="text_changeCase">
      <field name="CASE">UPPERCASE</field>
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_trim">
      <field name="MODE">BOTH</field>
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_print">
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_prompt_ext">
      <mutation type="TEXT"></mutation>
      <field name="TYPE">TEXT</field>
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
  </category>
<category name="列表">
  <block type="lists_create_with">
    <mutation items="0"></mutation>
  </block>
  <block type="lists_create_with">
    <mutation items="3"></mutation>
  </block>
  <block type="lists_length"></block>
  <block type="lists_isEmpty"></block>
</category>
<category name="函數" custom="PROCEDURE"></category>
<category name="變數" custom="VARIABLE"></category>
</xml>`;

const xmlText2 = '<xml xmlns="http://www.w3.org/1999/xhtml"><variables></variables><block type="programstart" id="%hKW)!8V,u;N[;Wn8CY)" x="105" y="135"><statement name="statement"><block type="pressleft" id="sj:su!xX;(Yl01?#`fr."><value name="key"><block type="carleft" id="U9_qWymPul.*du%z:FIN"></block></value><next><block type="pressright" id="Nu~(@kt8IsNEs+Biw0QW"><value name="key"><block type="carright" id="hUO%aB%dXb%ap1ysx,0Z"></block></value><next><block type="pressup" id="oNr+xzjaZ^a,t(G2J3dl"><value name="key"><block type="start" id="*#HwhTGTo2jTwQtbF7Q="></block></value><next><block type="controls_whileUntil" id="f(WjrQ5Py647=Xy%g*1Y"><field name="MODE">UNTIL</field><value name="BOOL"><block type="logic_operation" id=",jEmadvldrpop_a^wuy;"><field name="OP">OR</field><value name="A"><block type="collision" id="45qMUjlS)Dd}?Lx,P05^"></block></value><value name="B"><block type="click_close" id="I4o]Kz!Cq_dR]6:;b6Q)"></block></value></block></value><statement name="DO"><block type="display" id="?gfBy5b/O2}a1}}/}ee#"><next><block type="calculate" id="K-7h=?!lx}~,*V92|FIq"></block></next></block></statement><next><block type="close" id="Fc_ZZ{mx9HII/rE3nmZ_"></block></next></block></next></block></next></block></next></block></statement></block></xml>';
