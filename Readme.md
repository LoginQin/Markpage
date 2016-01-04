<meta charset="UTF-8" />
<pre id="markpage" style="display:none;">
#MarkPage - Markdown Page (English)

An easy way to to write markdown document base on `showdownjs`, support table, code hightlight , mermaid charts and navigate.

Markpage is an simple independent html file.

Just import one 'markpage.js' file in your html file, 
 
And go ahead to writing your markdown document in a `<pre id="markpage" style="display:none">` or `<textarea id="markpage" style="display:none">` html tag

It can be translated into HTML automatically, and generate a simple navigate when opened by the browser.

The markpage.js will load other js/css file automatically. So,

You only need to care about the specific content of all you have to write

Markpage suitable for writing text documents, convenient to use version control, such as SVN, Git saving changes.

convenient to see and diff historical change, More friendly than the binary file( like MS-Word)

#####The final html file like as follow:
```xml
<textarea id="markpage">
###markdown document
writing you document in here
</textarea>

<!-- only need to import markpage.js file  -->
&ltscript src="markpage.js" type="text/javascript"></script>
```


**NOTE: Not support for IE8 or lower version. To make life better, upgrade your browser.**
###Useage Template

[http://cdnresource.duowan.com/kkdict/1/markpage.en.html](http://cdnresource.duowan.com/kkdict/1/markpage.en.html)

###About
author qinwei

email  qinwei081@gmail.com  qinwei081@foxmail.com

-------------------------------------

<BR />
<BR />

#MarkPage - Markdown Page (中文)

Markpage 是一个方便书写Markdown文档的JS工具库, 基于`showdownjs`, 支持表格, 代码高亮, `mermaid`语法形式的图形, 以及菜单导航.

Markpage页面是一个独立的HTML文件, 你只需要在HTML页面中引入一个`markpage.js`的文件, 

并且将你的markdown内容写入一个`<pre id="markpage">` 或者`<textarea id="markpage">` 标签中即可.

用浏览器打开这个html文件, markdown内容会自动渲染成HTML页面, 并且生成一个简单的导航.

`markpage.js`会自动加载其他的js/css文件. 所以, 你只需要关心你想写的内容即可.

markpage适合用来写文本文档, 方便用版本控制,比如svn, Git保存变更. 比二进制方式更能方便看到和对比历史变化, 比如:MS-Word

#####最终的HTML文件会像这样:
```xml
<textarea id="markpage">
###markdown标题
在这里写上你的Markdown内容
</textarea>

<!-- only need to import markpage.js file  -->
&ltscript src="markpage.js" type="text/javascript"></script>
```
**注意: 不支持IE8或者更低版本的浏览器.**

###使用模板

[http://cdnresource.duowan.com/kkdict/1/markpage.html](http://cdnresource.duowan.com/kkdict/1/markpage.html)


</pre>
<script src="markpage.js"></script>

