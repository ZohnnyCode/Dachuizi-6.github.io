(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{427:function(t,s,n){t.exports=n.p+"assets/img/3.48a9e390.png"},428:function(t,s,n){t.exports=n.p+"assets/img/4.1c2d25b5.png"},429:function(t,s,n){t.exports=n.p+"assets/img/5.4c32adf5.png"},430:function(t,s,n){t.exports=n.p+"assets/img/6.546929f5.png"},431:function(t,s,n){t.exports=n.p+"assets/img/7.4c9a42cf.png"},432:function(t,s,n){t.exports=n.p+"assets/img/8.29d5a69c.png"},688:function(t,s,n){"use strict";n.r(s);var a=n(37),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"babel流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel流程"}},[t._v("#")]),t._v(" babel流程")]),t._v(" "),a("img",{staticStyle:{width:"100%"},attrs:{src:n(427)}}),t._v(" "),a("ol",[a("li",[t._v("解析(parsing)，得到AST语法树\n"),a("ul",[a("li",[t._v("词法解析(Lexical Analysis): 得到一个包含词法信息的"),a("code",[t._v("Tokens")]),t._v("数组。每个Token元素包含了语法片段、位置信息、以及类型信息")]),t._v(" "),a("li",[t._v("语法解析(Syntactic Analysis): 把"),a("code",[t._v("Tokens")]),t._v("数组转换为"),a("code",[t._v("抽象语法树AST")])])])]),t._v(" "),a("li",[t._v("转换(transform)，得到新的AST语法树: 转换阶段会对AST进行遍历，可对AST进行增删改查。Babel插件都是在这个阶段工作的")]),t._v(" "),a("li",[t._v("生成(generate)，生成JS代码，同时会生成Source Map")])]),t._v(" "),a("p",[t._v("词法解析生成的Tokens数组")]),t._v(" "),a("p",[a("img",{attrs:{src:n(428),alt:"词法Tokens"}})]),t._v(" "),a("p",[a("code",[t._v("console.log('hello world')")]),t._v("对应的AST语法树。"),a("code",[t._v("Program")]),t._v("、"),a("code",[t._v("CallExpression")]),t._v("、"),a("code",[t._v("Identifier")]),t._v(" 这些都是节点的类型，每个节点都是一个有意义的语法单元。 这些节点类型定义了一些属性来描述节点的信息。插件开发者会利用 "),a("a",{attrs:{href:"https://astexplorer.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("astexplorer"),a("OutboundLink")],1),t._v(" 来审查解析后的AST树")]),t._v(" "),a("p",[a("img",{attrs:{src:n(429),alt:"AST"}})]),t._v(" "),a("h2",{attrs:{id:"babel的架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel的架构"}},[t._v("#")]),t._v(" babel的架构")]),t._v(" "),a("p",[t._v("Babel 和 Webpack 为了适应复杂的定制需求和频繁的功能变化，都使用了 "),a("a",{attrs:{href:"https://juejin.cn/post/6844903943068205064#heading-10",target:"_blank",rel:"noopener noreferrer"}},[t._v("微内核"),a("OutboundLink")],1),t._v(" 的架构风格。也就是说它们的核心非常小，大部分功能都是通过"),a("code",[t._v("插件扩展")]),t._v("实现的")]),t._v(" "),a("p",[a("img",{attrs:{src:n(430),alt:"babel"}})]),t._v(" "),a("ol",[a("li",[a("code",[t._v("@babel/core")]),t._v("是Babel的核心。负责加载插件；调用"),a("code",[t._v("Parser")]),t._v("进行解析，生成AST树；调用"),a("code",[t._v("Traverser")]),t._v("遍历AST；生成代码，包括SourceMap转换和源代码生成")]),t._v(" "),a("li",[t._v("Parser(@babel/parser): 将源代码解析成AST")]),t._v(" "),a("li",[t._v("Traverser(@babel/traverser): 实现了"),a("code",[t._v("访问者模式")]),t._v("，对AST进行遍历，"),a("code",[t._v("转换插件")]),t._v("会通过它获取感兴趣的AST节点，对节点进行操作")]),t._v(" "),a("li",[t._v("Generator(@babel/generator): 将AST转换为源代码，支持SourceMap")]),t._v(" "),a("li",[t._v("转换插件：Babel仓库将转换插件划分为两种(只是命名上的区别)\n"),a("ul",[a("li",[a("code",[t._v("@babel/plugin-transform-*")]),t._v("： 普通的转换插件")]),t._v(" "),a("li",[a("code",[t._v("@babel/plugin-proposal-*")]),t._v("： 还在’提议阶段’(非正式)的语言特性")])])]),t._v(" "),a("li",[t._v("插件预调：插件集合，方便对插件进行管理和使用。"),a("code",[t._v("@babel/preset-env")]),t._v("智能预设，允许你使用最新的JavaScript。无需关心语法转换的细节")]),t._v(" "),a("li",[a("code",[t._v("@babel/types")]),t._v("： AST 节点构造器和断言. 插件开发时使用很频繁")]),t._v(" "),a("li",[t._v("@babel/node: 可直接支行需要Babel处理的JS文件")]),t._v(" "),a("li",[t._v("@babel/cli: Cli工具")])]),t._v(" "),a("h2",{attrs:{id:"访问者模式-了解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问者模式-了解"}},[t._v("#")]),t._v(" 访问者模式(了解)")]),t._v(" "),a("p",[t._v("访问者模式平时基本没接触，可以看"),a("a",{attrs:{href:"https://fanerge.github.io/2017/js%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%AE%BF%E9%97%AE%E8%80%85%E6%A8%A1%E5%BC%8F.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("访问者模式"),a("OutboundLink")],1),t._v("加深理解。个人理解："),a("code",[t._v("访问者(Visitor)定义好visit方法，参数为被访问的对象")]),t._v("。想象一下，Babel 有那么多插件，如果每个插件自己去遍历AST，对不同的节点进行不同的操作，维护自己的状态。这样子不仅低效，它们的逻辑分散在各处，会让整个系统变得难以理解和调试， 最后插件之间关系就纠缠不清，乱成一锅粥。")]),t._v(" "),a("p",[t._v("所以转换器操作 AST 一般都是使用访问器模式，由这个访问者(Visitor)来")]),t._v(" "),a("ol",[a("li",[t._v("进行统一的遍历操作")]),t._v(" "),a("li",[t._v("提供节点的操作方法")]),t._v(" "),a("li",[t._v("响应式维护节点之间的关系")]),t._v(" "),a("li",[t._v("访问者(即插件)只需要定义自己感兴趣的节点类型，当访问者访问到对应节点时，就调用插件的访问(visit)方法")])]),t._v(" "),a("p",[t._v("访问者会以深度优先的顺序, 或者说递归地对 AST 进行遍历，其调用顺序如下图所示: 绿线表示进入该节点，红线表示离开该节点。")]),t._v(" "),a("p",[a("img",{attrs:{src:n(431),alt:"traverser"}})]),t._v(" "),a("p",[t._v("当访问者进入一个节点时就会调用 enter(进入) 方法，反之离开该节点时会调用 exit(离开) 方法。 一般情况下，插件不会直接使用enter方法，只会关注少数几个节点类型，所以具体访问者也可以这样声明访问方法:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" traverse "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/traverse'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" babel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/core'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" generate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-generator'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("function hello(v) {\n  console.log('hello' + v + '!')\n}")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ast "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" babel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Identifier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("enter Identifier")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CallExpression")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("enter CallExpression")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("BinaryExpression")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("enter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'enter binaryExpression'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'exit binaryExpression'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" output "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("generate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\nenter Identifier\nenter Identifier\nenter CallExpression\nenter Identifier\nenter Identifier\nenter binaryExpression\nenter binaryExpression\nenter Identifier\nexit binaryExpression\nexit binaryExpression\n\n{\n  code: 'function hello(v) {\\n  console.log(\\'hello\\' + v + \\'!\\');\\n}',\n  map: null,\n  rawMappings: null\n}\n*/")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将console.log('hello' + v + '!')语句替换为return \"hello\" + v;, 下图是遍历的过程：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExpressionStatement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将 `console.log('hello' + v + '!')` 替换为 `return ‘hello’ + v`")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rtn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("returnStatement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("binaryExpression")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'+'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringLiteral")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("identifier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceWith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rtn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[a("img",{attrs:{src:n(432),alt:"replace"}})]),t._v(" "),a("h2",{attrs:{id:"面试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试"}},[t._v("#")]),t._v(" 面试")]),t._v(" "),a("p",[t._v("问：说说你对Babel的了解？")]),t._v(" "),a("p",[t._v("答：\nBabel的原理：是解析源代码，经过词法分析和语法分析，得到AST树；对AST树进行遍历转换，得到新的AST树；通过新的AST生成新的源代码。")]),t._v(" "),a("p",[t._v("Babel的架构：是微内核架构，和webpack, postcss类型。babel的核心非常小，大部分功能是通过插件扩展的。")]),t._v(" "),a("p",[t._v("Babel插件有很多，比如：@babel/core：babel的核心、@babel/parser: 将源代码转换成AST、@babel/traverser: 遍历AST、@babel/generator: 将AST转换成源代码、@babel/cli: babel的cli工具、@babel/preset-env：智能预设插件集合。。。。等等")]),t._v(" "),a("p",[t._v("问：写过Babel插件吗？说下原理")]),t._v(" "),a("p",[t._v("答：\n写过一个"),a("a",{attrs:{href:"https://github.com/0zcl-free/babel-plugin-transform-remove-debugger",target:"_blank",rel:"noopener noreferrer"}},[t._v("去除debugger语法"),a("OutboundLink")],1),t._v("的babel插件。")]),t._v(" "),a("p",[t._v("原理：")]),t._v(" "),a("ol",[a("li",[t._v("解析源代码，经过词法分析和语法分析，得到AST树")]),t._v(" "),a("li",[t._v("对AST树进行遍历转换，得到新的AST树；")]),t._v(" "),a("li",[t._v("通过新的AST生成新的源代码。\n插件是在第二步，对AST树做增删查改的处理。第二步中，使用了访问者模式，AST树相当于被访问者，而插件访问AST，做处理，所以是访问者。访问者实现一个visit接口，参数为被访问的对象（即AST节点)")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("visitor")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("DebuggerStatement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("参考：\n"),a("a",{attrs:{href:"https://bobi.ink/2019/10/01/babel/",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入浅出 Babel 上篇：架构和原理 + 实战"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://astexplorer.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("astexplorer"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel插件手册"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://fanerge.github.io/2017/js%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%AE%BF%E9%97%AE%E8%80%85%E6%A8%A1%E5%BC%8F.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("访问者模式"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);