(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{766:function(s,t,a){"use strict";a.r(t);var e=a(37),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("需求：在前端工程化的过程中，不可避免地会用 Node.js 来读取文件，例如想找到 src 目录下所有 js 和 jsx 文件")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" glob "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'glob'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" files "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" glob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src/**/*.js{,x}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"单个星号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单个星号"}},[s._v("#")]),s._v(" 单个星号")]),s._v(" "),a("p",[s._v("概念：单个星号 * 用于匹配单个片段中的零个或多个字符")]),s._v(" "),a("ul",[a("li",[s._v("src/*.js 表示 src 目录下所有以 js 结尾的文件，但是不能匹配 src 子目录中的文件，例如 src/login/login.js")]),s._v(" "),a("li",[s._v("/home/*/.bashrc 匹配所有用户的 .bashrc 文件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("需要注意的是，* 不能匹配分隔符 /，也就是说不能跨片段匹配字符\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"问号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问号"}},[s._v("#")]),s._v(" 问号")]),s._v(" "),a("p",[s._v("概念：? 匹配单个片段中的单个字符")]),s._v(" "),a("ul",[a("li",[s._v("test/?at.js 匹配形如 test/cat.js、test/bat.js 等所有3个字符且后两位是 at 的 js 文件，但是不能匹配 test/flat.js")]),s._v(" "),a("li",[s._v("src/index.?? 匹配 src 目录下以 index 打头，后缀名是两个字符的文件，例如可以匹配 src/index.js 和 src/index.md，但不能匹配 src/index.jsx")])]),s._v(" "),a("h2",{attrs:{id:"中括号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中括号"}},[s._v("#")]),s._v(" 中括号")]),s._v(" "),a("p",[s._v("概念：同样是匹配单个片段中的单个字符，但是字符集只能从括号内选择，如果字符集内有 -，表示范围。")]),s._v(" "),a("ul",[a("li",[s._v("test/[bc]at.js 只能匹配 test/bat.js 和 test/cat.js")]),s._v(" "),a("li",[s._v("test/[c-f]at.js 能匹配 test/cat.js、test/dat.js、test/eat.js 和 test/fat.js")])]),s._v(" "),a("h2",{attrs:{id:"惊叹号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#惊叹号"}},[s._v("#")]),s._v(" 惊叹号")]),s._v(" "),a("p",[s._v("概念：表示取反，即排除那些去掉惊叹号之后能够匹配到的文件。")]),s._v(" "),a("ul",[a("li",[s._v("test/[!bc]at.js 不能匹配 test/bat.js 和 test/cat.js，但是可以匹配 test/fat.js")]),s._v(" "),a("li",[s._v("!test/tmp/**' 排除 test/tmp 目录下的所有目录和文件")])]),s._v(" "),a("h2",{attrs:{id:"两个星号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两个星号"}},[s._v("#")]),s._v(" 两个星号")]),s._v(" "),a("p",[s._v("概念：两个星号 ** 可以跨片段匹配零个或多个字符。即 ** 是递归匹配所有文件和目录")]),s._v(" "),a("ul",[a("li",[s._v("/var/log/** 匹配 /var/log 目录下所有文件和文件夹，以及文件夹里面所有子文件和子文件夹")]),s._v(" "),a("li",[s._v("/var/log/**/*.log 匹配 /var/log 及其子目录下的所有以 .log 结尾的文件")]),s._v(" "),a("li",[s._v("/home/"),a("em",[s._v("/.ssh/**/")]),s._v(".key 匹配所有用户的 .ssh 目录及其子目录内的以 .key 结尾的文件")])]),s._v(" "),a("p",[s._v("参考：https://juejin.cn/post/6876363718578405384")])])}),[],!1,null,null,null);t.default=n.exports}}]);