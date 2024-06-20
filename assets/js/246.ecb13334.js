(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{568:function(v,_,e){"use strict";e.r(_);var t=e(4),c=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"百发百中-掌握搜索命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#百发百中-掌握搜索命令"}},[v._v("#")]),v._v(" 百发百中：掌握搜索命令")]),v._v(" "),_("p",[v._v("有一天，你终于厌倦了 "),_("code",[v._v("h")]),v._v(" "),_("code",[v._v("j")]),v._v(" "),_("code",[v._v("k")]),v._v(" "),_("code",[v._v("l")]),v._v(" 在字里行间移动，厌倦了 "),_("code",[v._v("w")]),v._v(" "),_("code",[v._v("b")]),v._v(" "),_("code",[v._v("e")]),v._v(" 在 "),_("s",[v._v("屎山")]),v._v(" 代码中半天跳不到头；你在想，有没有一种方法，可以像东风-41导弹一样指哪打哪，快速去到 "),_("s",[v._v("同事们写的垃圾")]),v._v(" 代码中；")]),v._v(" "),_("p",[v._v("恭喜你，你找到了！")]),v._v(" "),_("p",[v._v("今天，我们就来学习搜索命令，打破你的困境。")]),v._v(" "),_("h2",{attrs:{id:"行内搜索"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#行内搜索"}},[v._v("#")]),v._v(" 行内搜索")]),v._v(" "),_("p",[v._v("通常我们在一行代码中时，有可能需要这里编辑一下那里编辑一下，虽然之前讲过的移动光标的命令也基本够用了，但可能在某些情况下，代码比较长之类的，可能用行内搜索命令是不错的方式。")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("f")]),v._v(" + 字符：自左往右移动光标到下一个匹配的字符中")]),v._v(" "),_("li",[_("code",[v._v("F")]),v._v(" + 字符：自右往左移动光标到下一个匹配的字符中")]),v._v(" "),_("li",[_("code",[v._v("t")]),v._v(" + 字符：自左往右移动光标到下一个匹配的字符的前一个字符中")]),v._v(" "),_("li",[_("code",[v._v("T")]),v._v(" + 字符：自右往左移动光标到下一个匹配的字符的后一个字符中")]),v._v(" "),_("li",[_("code",[v._v(";")]),v._v("：重复执行上一个搜索命令")]),v._v(" "),_("li",[_("code",[v._v(",")]),v._v("： 与上一个命令方向相反地执行上一个搜索命令")])]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("使用技巧")]),v._v(" "),_("p",[v._v("普通移动光标的时候使用 "),_("code",[v._v("f")]),v._v(" "),_("code",[v._v("F")]),v._v("，配合 "),_("code",[v._v("c")]),v._v(" "),_("code",[v._v("d")]),v._v(" "),_("code",[v._v("v")]),v._v(" 这些操作时使用 "),_("code",[v._v("t")]),v._v(" "),_("code",[v._v("T")]),v._v("，如：")]),v._v(" "),_("p",[v._v("this is a simple easy vim tutorial.")]),v._v(" "),_("p",[v._v("如果我们光标在句首，需要跳到 easy 这个单词的字母 e，则直接 "),_("code",[v._v("fe;")]),v._v("即可（因为 "),_("code",[v._v("fe")]),v._v(" 会跳到 simple 的 e，所以需要用 "),_("code",[v._v(";")]),v._v(" 再执行一遍 "),_("code",[v._v("fe")]),v._v("）;")]),v._v(" "),_("p",[v._v("而假如我们需要删除 easy 单词前的内容，则可以使用 "),_("code",[v._v("d2te")]),v._v(" ，则句子就变成：")]),v._v(" "),_("p",[v._v("easy vim tutorial.")]),v._v(" "),_("p",[v._v("这里的 "),_("code",[v._v("2te")]),v._v(" 是指使用 "),_("code",[v._v("te")]),v._v(" 这个指令时的第二个结果，因为上面那句话有两个字母 e，我们要匹配第二个，所以在这个指令前加上数字 2，指令 "),_("code",[v._v("f")]),v._v(" 也同理。")])]),v._v(" "),_("h2",{attrs:{id:"全局搜索"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#全局搜索"}},[v._v("#")]),v._v(" 全局搜索")]),v._v(" "),_("p",[v._v("在日常开发中，我们用得最多的搜索其实是全局搜索，尤其是在查看一些变量、函数调用情况的时候，而 vim 也提供了方便的全局搜索：")]),v._v(" "),_("ul",[_("li",[v._v("向前查找："),_("code",[v._v("/")]),v._v(" + 字符 + enter")]),v._v(" "),_("li",[v._v("向前查找："),_("code",[v._v("?")]),v._v(" + 字符 + enter")]),v._v(" "),_("li",[v._v("查看搜索历史："),_("code",[v._v("/")]),v._v(" + 上下方向键")])]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("使用技巧")]),v._v(" "),_("p",[v._v("使用 "),_("code",[v._v("/")]),v._v(" "),_("code",[v._v("?")]),v._v(" 查找时不需要输入要搜索的完整文本，就输入前面几个字符就可以了；而且这两个搜索命令是大写不敏感的，比如输入 "),_("code",[v._v("/ula，都可以匹配到")]),v._v("ULA"),_("code",[v._v("和")]),v._v("ula"),_("code",[v._v("；这种特性下，如果我们搜索一个变量，如")]),v._v("text"),_("code",[v._v("，会匹配到")]),v._v("Text"),_("code"),v._v("TEXT` 等单词，所以这两个命令是模糊搜索。")])]),v._v(" "),_("p",[v._v("在大多数情况下，其实我们更需要的是精确搜索，这时我们可以把光标移到我们需要搜索的单词上，然后按下以下命令：")]),v._v(" "),_("ul",[_("li",[v._v("向上查找："),_("code",[v._v("#")])]),v._v(" "),_("li",[v._v("向下查找："),_("code",[v._v("*")])])]),v._v(" "),_("p",[v._v("这样就可以愉快地搜索了；我们还可以使用：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("n")]),v._v("：跳到下一个结果")]),v._v(" "),_("li",[_("code",[v._v("N")]),v._v("：跳到上一个结果")])]),v._v(" "),_("p",[v._v("然后就可以快速查看搜索的结果了，完全不输 vscode 自带的搜索。")])])}),[],!1,null,null,null);_.default=c.exports}}]);