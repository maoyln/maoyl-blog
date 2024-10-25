(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{389:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"自适应方案pxtorem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自适应方案pxtorem"}},[s._v("#")]),s._v(" 自适应方案PxToRem")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("rem")]),s._v(" 做自适应布局的核心原理是利用 "),t("code",[s._v("rem")]),s._v(" 单位相对于根元素（"),t("code",[s._v("<html>")]),s._v("）的字体大小，使得整个页面的布局、尺寸能够相应调整，从而实现自适应设计。")]),s._v(" "),t("h2",{attrs:{id:"什么是rem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是rem"}},[s._v("#")]),s._v(" 什么是rem")]),s._v(" "),t("p",[t("code",[s._v("rem")]),s._v(" 是一种相对单位，指的是相对于根元素（"),t("code",[s._v("<html>")]),s._v("）的 "),t("code",[s._v("font-size")]),s._v(" 大小。相比 "),t("code",[s._v("em")]),s._v("（相对于父元素的字体大小），"),t("code",[s._v("rem")]),s._v(" 更加一致，因为它总是相对于整个文档的根元素。")]),s._v(" "),t("p",[s._v("例如，假设根元素的 "),t("code",[s._v("font-size")]),s._v(" 为 "),t("code",[s._v("16px")]),s._v("，那么：")]),s._v(" "),t("ul",[t("li",[s._v("1rem = 16px")]),s._v(" "),t("li",[s._v("2rem = 32px")]),s._v(" "),t("li",[s._v("0.5rem = 8px")])]),s._v(" "),t("p",[s._v("通过动态调整根元素的字体大小，你可以控制整个页面中 "),t("code",[s._v("rem")]),s._v(" 单位的相对大小。")]),s._v(" "),t("h2",{attrs:{id:"为什么用-rem-实现自适应"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么用-rem-实现自适应"}},[s._v("#")]),s._v(" 为什么用 "),t("code",[s._v("rem")]),s._v(" 实现自适应？")]),s._v(" "),t("p",[t("code",[s._v("px")]),s._v(" 是固定单位，不会随着屏幕大小或分辨率的变化而调整。因此在不同设备（比如手机、平板、桌面）上，固定的 "),t("code",[s._v("px")]),s._v(" 单位可能会导致界面不够灵活。")]),s._v(" "),t("p",[s._v("而 "),t("code",[s._v("rem")]),s._v(" 是相对单位，基于根元素的字体大小。当我们通过 JavaScript 或 CSS 媒体查询调整根元素的 "),t("code",[s._v("font-size")]),s._v(" 时，所有使用 "),t("code",[s._v("rem")]),s._v(" 单位的元素都会根据新的 "),t("code",[s._v("font-size")]),s._v(" 自动调整尺寸，达到自适应效果。")]),s._v(" "),t("h2",{attrs:{id:"rem-自适应的实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rem-自适应的实现原理"}},[s._v("#")]),s._v(" "),t("code",[s._v("rem")]),s._v(" 自适应的实现原理")]),s._v(" "),t("h3",{attrs:{id:"设置-html-根元素的-font-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置-html-根元素的-font-size"}},[s._v("#")]),s._v(" 设置 "),t("code",[s._v("<html>")]),s._v(" 根元素的 "),t("code",[s._v("font-size")])]),s._v(" "),t("p",[s._v("为了使整个页面自适应不同设备的宽度，通常需要根据设备的视口宽度动态设置 "),t("code",[s._v("<html>")]),s._v(" 的"),t("code",[s._v("font-size")]),s._v("。这个字体大小将成为 "),t("code",[s._v("rem")]),s._v(" 的基准。例如，假设设计稿的宽度是 "),t("code",[s._v("375px")]),s._v("，基准 "),t("code",[s._v("font-size")]),s._v(" 设为 "),t("code",[s._v("16px")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("在小屏设备上，比如宽度为"),t("code",[s._v("320px")]),s._v("，我们可以通过 JavaScript 或媒体查询将 "),t("code",[s._v("font-size")]),s._v(" 调小。")]),s._v(" "),t("li",[s._v("在大屏设备上，比如宽度为"),t("code",[s._v("1440px")]),s._v("，我们可以将 "),t("code",[s._v("font-size")]),s._v(" 调大。")])]),s._v(" "),t("h3",{attrs:{id:"根据视口宽度调整font-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#根据视口宽度调整font-size"}},[s._v("#")]),s._v(" 根据视口宽度调整"),t("code",[s._v("font-size")])]),s._v(" "),t("p",[s._v("通过监听设备的视口宽度变化，可以动态设置根元素的 font-size。这种方法可以用来自动适应不同屏幕大小。")]),s._v(" "),t("p",[t("strong",[s._v("JavaScript 动态设置示例：")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setRem")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" baseSize "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设计稿的基准像素值")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" baseWidth "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("375")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设计稿的基准宽度（例如375px）")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" screenWidth "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("documentElement"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("clientWidth "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("innerWidth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 根据当前屏幕宽度计算根元素的 font-size")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" fontSize "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("screenWidth "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" baseWidth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" baseSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置根元素的 font-size")]),s._v("\n  document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("documentElement"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fontSize "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("fontSize"),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("px")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 初始化调用")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setRem")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 监听窗口变化")]),s._v("\nwindow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'resize'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" setRem"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("在上面的代码中：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("baseSize")]),s._v(" 是设计稿中设定的根元素的基准字体大小（通常是 "),t("code",[s._v("16px")]),s._v("）。")]),s._v(" "),t("li",[t("code",[s._v("baseWidth")]),s._v(" 是设计稿的宽度，例如设计稿宽度为 "),t("code",[s._v("375px")]),s._v("（移动端设计稿）。")]),s._v(" "),t("li",[t("code",[s._v("screenWidth")]),s._v(" 是当前设备的屏幕宽度，我们根据屏幕宽度与设计稿宽度的比例来动态调整根元素的字体大小。")])]),s._v(" "),t("p",[s._v("当屏幕宽度变化时，根元素的 "),t("code",[s._v("font-size")]),s._v(" 会动态变化，页面中所有使用 "),t("code",[s._v("rem")]),s._v(" 单位的元素都会跟随调整，达到自适应效果。")]),s._v(" "),t("h3",{attrs:{id:"在-css-中使用-rem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-css-中使用-rem"}},[s._v("#")]),s._v(" 在 CSS 中使用 rem")]),s._v(" "),t("p",[s._v("在 CSS 中，用 "),t("code",[s._v("rem")]),s._v(" 单位来代替 "),t("code",[s._v("px")]),s._v("，可以实现动态调整元素尺寸。例如：")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10rem"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 等价于设计稿中160px宽 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 5rem"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 等价于设计稿中80px高 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1.2rem"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 等价于设计稿中的19.2px字体 */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("假设根元素的 "),t("code",[s._v("font-size")]),s._v(" 是 "),t("code",[s._v("16px")]),s._v("，那么上述 "),t("code",[s._v("CSS")]),s._v(" 样式中的 "),t("code",[s._v("10rem")]),s._v(" 就等同于 "),t("code",[s._v("160px")]),s._v("。当根元素的 "),t("code",[s._v("font-size")]),s._v(" 随着屏幕大小变化时，所有 "),t("code",[s._v("rem")]),s._v(" 单位的尺寸也会相应变化。")]),s._v(" "),t("p",[t("strong",[s._v("如果项目已经写了很多，批量转换很难，后面会说一个插件自动转换"),t("code",[s._v("postcss-pxtorem")]),s._v(",安装及配置")])]),s._v(" "),t("p",[s._v("第一步：安装 craco-postcss：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("npm install @craco"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("craco craco"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("postcss "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("第二步：然后在 craco.config.js 中添加 postcss-pxtorem 配置：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" postcssPxToRem "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postcss-pxtorem'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("style")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("postcss")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("postcssPxToRem")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rootValue")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 根元素字体大小，1rem = 16px")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("unitPrecision")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 转换后保留的小数点位数")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("propList")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 允许转换的属性，例如['font', 'font-size', 'line-height', 'letter-spacing']")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("selectorBlackList")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不进行转换的类名")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("replace")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否替换原来的px，还是生成备用的rem")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("mediaQuery")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否在媒体查询中转换px")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("minPixelValue")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 小于2px的不转换")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[s._v("第二步(附)：如果你已经弹出配置或在使用 "),t("code",[s._v("Webpack")]),s._v("： 你可以直接在 "),t("code",[s._v("postcss.config.js")]),s._v(" 文件中配置：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postcss-pxtorem'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rootValue")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设计稿的基准像素值")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("unitPrecision")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 精度")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("propList")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 哪些属性需要转换")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("replace")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("mediaQuery")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("minPixelValue")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("配置完成后，当你运行构建工具时（例如使用 "),t("code",[s._v("npm run build")]),s._v(" 或 "),t("code",[s._v("npm start")]),s._v("），所有的 "),t("code",[s._v("px")]),s._v(" 单位都会自动转换为 "),t("code",[s._v("rem")]),s._v(" 单位。")]),s._v(" "),t("h2",{attrs:{id:"具体实现步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具体实现步骤"}},[s._v("#")]),s._v(" 具体实现步骤")]),s._v(" "),t("ol",[t("li",[t("p",[t("strong",[s._v("选择设计稿的基准宽度和基准字体大小")])]),s._v(" "),t("ul",[t("li",[s._v("例如，设计稿的基准宽度为 "),t("code",[s._v("375px")]),s._v("，基准字体大小为 "),t("code",[s._v("16px")]),s._v("。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("动态调整根元素的 "),t("code",[s._v("font-size")])])]),s._v(" "),t("ul",[t("li",[s._v("可以通过 JavaScript、媒体查询、或 "),t("code",[s._v("vw")]),s._v(" 单位等方式来动态设置根元素的 "),t("code",[s._v("font-size")]),s._v("。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("在 CSS 中使用 "),t("code",[s._v("rem")]),s._v(" 单位代替 "),t("code",[s._v("px")])])]),s._v(" "),t("ul",[t("li",[s._v("将设计稿中的 "),t("code",[s._v("px")]),s._v(" 换算成 "),t("code",[s._v("rem")]),s._v("。例如，如果设计稿中一个元素的宽度是 "),t("code",[s._v("160px")]),s._v("，可以使用 "),t("code",[s._v("10rem")]),s._v("（"),t("code",[s._v("160px ÷ 16px = 10rem")]),s._v("）。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("调整自适应逻辑")])]),s._v(" "),t("ul",[t("li",[s._v("根据不同设备的宽度，调整根元素的 "),t("code",[s._v("font-size")]),s._v("，从而实现整个页面自适应。")])])])]),s._v(" "),t("h2",{attrs:{id:"_5-媒体查询优化-可选"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-媒体查询优化-可选"}},[s._v("#")]),s._v(" 5. 媒体查询优化（可选）")]),s._v(" "),t("p",[s._v("除了动态调整根元素的 "),t("code",[s._v("font-size")]),s._v(" 外，还可以配合媒体查询来适应不同屏幕。例如：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("@"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("media")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("max"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("width"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 768px")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  html "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    font"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("size"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 14px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 小屏幕上的基准font-size */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n@"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("media")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("min"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("width"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 1200px")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  html "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    font"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("size"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 18px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 大屏幕上的基准font-size */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("通过这种方式，可以为不同的屏幕宽度设置不同的基准 "),t("code",[s._v("font-size")]),s._v("，进而更细致地控制页面的响应式布局。")]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("原理："),t("code",[s._v("rem")]),s._v(" 是相对于根元素的字体大小，因此通过动态设置 "),t("code",[s._v("<html>")]),s._v(" 的 "),t("code",[s._v("font-size")]),s._v("，可以让所有使用 "),t("code",[s._v("rem")]),s._v(" 的元素根据视口宽度自动调整尺寸。")])]),s._v(" "),t("li",[t("p",[s._v("自适应实现步骤：")]),s._v(" "),t("ol",[t("li",[s._v("设定设计稿的基准宽度和 "),t("code",[s._v("font-size")]),s._v("。")]),s._v(" "),t("li",[s._v("使用 JavaScript 或媒体查询动态调整根元素的 "),t("code",[s._v("font-size")]),s._v("。")]),s._v(" "),t("li",[s._v("在 CSS 中用 "),t("code",[s._v("rem")]),s._v(" 单位替代 "),t("code",[s._v("px")]),s._v("。")])])])]),s._v(" "),t("p",[s._v("通过这种方式，可以构建一个在不同设备上都能灵活调整的响应式布局，适合从移动端到桌面端的多种屏幕尺寸。")]),s._v(" "),t("hr"),s._v(" "),t("h1",{attrs:{id:"等比缩放方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#等比缩放方案"}},[s._v("#")]),s._v(" 等比缩放方案")]),s._v(" "),t("p",[t("strong",[s._v("当然也可以用整体缩放的形式做自适应")]),s._v(" "),t("a",{attrs:{href:"https://github.com/maoyln/javascript-collections/tree/main/008%E9%A1%B5%E9%9D%A2%E6%95%B4%E4%BD%93%E7%BC%A9%E6%94%BE",target:"_blank",rel:"noopener noreferrer"}},[s._v("页面等比自适应git"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);