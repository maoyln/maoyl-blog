(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{577:function(v,_,o){"use strict";o.r(_);var t=o(4),e=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"好辅助-数字与-的威力"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#好辅助-数字与-的威力"}},[v._v("#")]),v._v(" 好辅助：数字与 "),_("code",[v._v(".")]),v._v(" 的威力")]),v._v(" "),_("h2",{attrs:{id:"数字"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数字"}},[v._v("#")]),v._v(" 数字")]),v._v(" "),_("p",[v._v("之前的训练中提到了数字的简单使用，如 "),_("code",[v._v("J")]),v._v(" "),_("code",[v._v("K")]),v._v(" 映射到 "),_("code",[v._v("5j")]),v._v(" "),_("code",[v._v("5k")]),v._v("，以及使用一些插件 viw.easymotion 来减少数字的使用；这一部分我们会学习数字的使用语法以及为什么我们要减少数字的使用。")]),v._v(" "),_("h3",{attrs:{id:"语法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[v._v("#")]),v._v(" 语法")]),v._v(" "),_("p",[v._v("数字可以让我们快速进行一些重复操作，比如我们需要删除 5 个单词，不使用数字的话我们需要输入 5 次 "),_("code",[v._v("dw")]),v._v("，但使用数字的话我们可以直接 "),_("code",[v._v("5dw")]),v._v(" 或 "),_("code",[v._v("d5w")]),v._v(" 即可；我们可以看到这两个命令数字在不同位置，一样的命令组合，效果也一样，这跟 vim 数字使用语法有关：")]),v._v(" "),_("ul",[_("li",[v._v("[数字] + operator + motion：如 "),_("code",[v._v("5dw")]),v._v(" "),_("code",[v._v("3fe")])]),v._v(" "),_("li",[v._v("operator + [数字] + motion：如 "),_("code",[v._v("d5w")])])]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("什么是 motion 和 operator ?")]),v._v(" "),_("p",[v._v("motion 可以理解为字符范围，分类如：\n- words motions\n"),_("code",[v._v("w")]),v._v(" 移光标至下一词\n"),_("code",[v._v("b")]),v._v(" 移光标至上一词\n"),_("code",[v._v("e")]),v._v(" 移光标至词末\n- Left-right motion\n"),_("code",[v._v("h")]),v._v(" 光标向左移一字节\n"),_("code",[v._v("l")]),v._v(" 光标向右移一字节\n"),_("code",[v._v("$")]),v._v(" 移光标至行末\n"),_("code",[v._v("0")]),v._v(" 移光标至行首\n"),_("code",[v._v("^")]),v._v(" 移光标至本行首个非空格的字节\n- Up-down motions\n"),_("code",[v._v("j")]),v._v(" 光标向下移一行\n"),_("code",[v._v("k")]),v._v(" 光标向上移一行\n"),_("code",[v._v("gg")]),v._v(" 移光标至整个文本的首行首个非空格字节\n"),_("code",[v._v("G")]),v._v(" 移光标至整个文本最后一行首个非空格字节\n- Other motions\n"),_("code",[v._v("%")]),v._v(" 移光标至匹配括号的另一端\n"),_("code",[v._v("H")]),v._v(" 移光标至窗口第一行\n"),_("code",[v._v("M")]),v._v(" 移光标至窗口中间一行\n"),_("code",[v._v("L")]),v._v(" 移光标至窗口最后一行")]),v._v(" "),_("p",[v._v("operator 为操作，如 "),_("code",[v._v("d")]),v._v(" "),_("code",[v._v("c")]),v._v(" "),_("code",[v._v("s")]),v._v(" "),_("code",[v._v("x")]),v._v(" "),_("code",[v._v("f")]),v._v("，vim 中的增删改查命令都可以理解为 operator")])]),v._v(" "),_("h3",{attrs:{id:"优点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[v._v("#")]),v._v(" 优点：")]),v._v(" "),_("p",[v._v("使用数字可以让我们的命令历史记录连贯，在做撤销、重做等操作时可以有简洁的历史记录；如 "),_("code",[v._v("5dw")]),v._v("，撤销的时候一步就会撤销到五个单词删除前而不是要撤销五次")]),v._v(" "),_("h3",{attrs:{id:"缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[v._v("#")]),v._v(" 缺点：")]),v._v(" "),_("p",[v._v("由于数字键的位置实在偏僻，以及在大多数情况下，我们需要比较长的思考反应时间才能使用到准确的数字达到想要的效果")]),v._v(" "),_("h2",{attrs:{id:"命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[v._v("#")]),v._v(" "),_("code",[v._v(".")]),v._v(" 命令")]),v._v(" "),_("p",[_("code",[v._v(".")]),v._v(" 的作用是重复上一次的修改操作，这个修改操作是指：")]),v._v(" "),_("ul",[_("li",[v._v("对字符做了更新（增删改）：如 "),_("code",[v._v("d")]),v._v(" "),_("code",[v._v("c")]),v._v(" "),_("code",[v._v("x")]),v._v(" 之类的")]),v._v(" "),_("li",[v._v("离开插入模式之前的按键组合")])]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("提示")]),v._v(" "),_("p",[v._v("能够使用重复的达到效果就不用使用数字，这样有利于留下完整的回退痕迹。")])])])}),[],!1,null,null,null);_.default=e.exports}}]);