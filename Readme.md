# MarkPage - Markdown Page (English)

An easy way to to write markdown document base on `showdownjs`, support table, code hightlight , mermaid charts and navigate.

Markpage is an simple independent html file.

Just import one 'markpage.js' file in your html file, 
 
And go ahead to writing your markdown document in a `<pre id="markpage" style="display:none">` or `<textarea id="markpage" style="display:none">` html tag

It can be translated into HTML automatically, and generate a simple navigate when opened by the browser.

The markpage.js will load other js/css file automatically. So,

You only need to care about the specific content of all you have to write

Markpage suitable for writing text documents, convenient to use version control, such as SVN, Git saving changes.

convenient to see and diff historical change, More friendly than the binary file( like MS-Word)

##### The final html file like as follow:

```xml
<textarea id="markpage">
### markdown document
writing you document in here
</textarea>

<!-- only need to import markpage.js file  -->
<script src="markpage.js" type="text/javascript"></script>
```


**NOTE: Not support for IE8 or lower version. To make life better, upgrade your browser.**
### Usage Template

Load CDN Resouce By cdnjs.com , English [markpage.en.html](http://cdnresource.duowan.com/kkdict/1/markpage.en.html)

Load CDN Resouce By bootcdn.com, Chinese [markpage.cn.html](http://cdnresource.duowan.com/kkdict/1/markpage.html)

### Use markpage.js by CDN

If you don't like to download markpage.js file to local, You can use CDN service of my current company instead :)

This way is convenient to copy a single HTML file to any place where can be connected to the Internet to View,  without markpage.js


```javascript
<script src="http://cdnresource.duowan.com/kkdict/1/markpage.js" type="text/javascript"></script>
```

### About

author qinwei

email  qinwei081@gmail.com  qinwei081@foxmail.com

### License

MIT

-------------------------------------

<BR />
<BR />

# MarkPage - Markdown Page (中文)

Markpage 是一个方便书写Markdown文档的JS工具库, 基于`showdownjs`, 支持表格, 代码高亮, `mermaid`语法形式的图形, 以及菜单导航.

Markpage页面是一个独立的HTML文件, 你只需要在HTML页面中引入一个`markpage.js`的文件, 

并且将你的markdown内容写入一个`<pre id="markpage">` 或者`<textarea id="markpage">` 标签中即可.

用浏览器打开这个html文件, markdown内容会自动渲染成HTML页面, 并且生成一个简单的导航.

`markpage.js`会自动加载其他的js/css文件. 所以, 你只需要关心你想写的内容即可.

markpage适合用来写文本文档, 方便用版本控制,比如svn, Git保存变更. 比二进制方式更能方便看到和对比历史变化, 比如:MS-Word

##### 最终的HTML文件会像这样:

```xml
<textarea id="markpage">
### markdown标题
在这里写上你的Markdown内容
</textarea>

<!-- only need to import markpage.js file  -->
<script src="markpage.js" type="text/javascript"></script>
```
**注意: 不支持IE8或者更低版本的浏览器.**

### 使用CDN加载markpage.js

如果你不喜欢将markpage.js文件下载到本地, 你可以使用我当前公司的CDN文件地址 :)

这种方式很方便将HTML单独拷贝到任何可以联网的地方查看, 不需要都带着markpage.js

```javascript
<script src="http://cdnresource.duowan.com/kkdict/1/markpage.js" type="text/javascript"></script>
```

### 使用模板

从cdnjs.com加载CDN资源,英文版 [markpage.en.html](http://cdnresource.duowan.com/kkdict/1/markpage.en.html)

从bootcdn.com加载CDN资源,中文版 [markpage.cn.html](http://cdnresource.duowan.com/kkdict/1/markpage.html)



### License

MIT

