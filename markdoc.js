/**
 * markdoc - markdown document 
 *
 * a markdown way to write document, just import 'markdoc.js' in your html file, 
 *
 * And go ahead to writing your markdown document in a <pre id="markdoc"> html tag
 *
 * @author qinwei
 * @email  qinwei081@gmail.com
 *
 **/
function markdoc() {
    var self = this;
    var isLoadResource = false;
    var resourceNumExpect = 3; // expect load js resource number
    var loadedResource = 0; // current loaded
    var onLoadCallback = function(){};

    function checkResourceLoad(){
        loadedResource++;
        if(loadedResource == resourceNumExpect){
            resourceOnload();
        }
    }

    this.mkdom = function(name, attr){
        attr = attr || {};
        var dom = document.createElement(name);
        for(var i in attr){
            dom.setAttribute(i, attr[i])
        }
        return dom;
    };

    this.addChildNode = function(tagName, childNode){
        var head = document.getElementsByTagName(tagName)[0];
        head.appendChild(childNode);
    };

    this.loadcss = function(link){
        var linkNode = self.mkdom('link', {rel: 'stylesheet', type: "text/css", href: link});
        self.addChildNode('head', linkNode);
    }
    this.loadjs = function(src, onloadCallback){
        var jsnode = self.mkdom('script', {type: 'text/javascript', src:src});
        self.addChildNode('body', jsnode);
        jsnode.onload = onloadCallback;
    }

    this.loadDocCss= function(){
        var css = [
            'h1 {padding:0 0 20px 0}'
            ,'.docmenu { position:fixed;}'
            ,'ul li {margin:20px;}'
            ];
        // can't not use $ before zepto/jquery load
        var style = self.mkdom('style', {type: 'text/css'});
        style.appendChild(document.createTextNode(css.join('')));
        self.addChildNode('head', style);
    }

    /**
     * This function will invoke when all resource loaded
     */
    function resourceOnload() {
        initShowdownExt();
        hljs.initHighlightingOnLoad(); 
        onLoadCallback();
    }

    this.loadResource = function(cb){
        self.loadDocCss();
        self.loadcss('http://cdn.bootcss.com/marx/1.3.0/marx.min.css');
        self.loadcss('http://cdn.bootcss.com/highlight.js/8.9.1/styles/railscasts.min.css');
        // expect 3 js resource to load
        self.loadjs('http://cdn.bootcss.com/zepto/1.1.6/zepto.min.js', checkResourceLoad);
        self.loadjs('http://cdn.bootcss.com/showdown/1.3.0/showdown.min.js', checkResourceLoad);
        self.loadjs('http://cdn.bootcss.com/highlight.js/8.9.1/highlight.min.js', checkResourceLoad);
        if(typeof cb == 'function'){
            onLoadCallback = cb;
        }
    }

    self.onload = function(cb){
        onLoadCallback = cb;
    }

    this.render = function(id){
        var $doc = $('#' + id ).hide();
        $('body').append('<div class="docmenu"></div><main><section class="docbody"></section></main>');
        $('#markdoc').hide();
        var text = $doc.text(); 
        var converter = new showdown.Converter({ tables: true, tasklists: true,  omitExtraWLInCodeBlocks: true,parseImgDimensions:true,  ghCodeBlocks: true, extensions: ['markdoc']}),
            html      = converter.makeHtml(text);
        $('.docbody').append(html);
    }
}

/**
 * init showdown ext after load showdown.js
 */
function initShowdownExt(){
    var markdownMarkdocExt = function(converter) {
        return [
        { type: 'output'
            , filter: function(text) {
                var $ext = $('<div>' + text + '</div>');
                $ext.find('table');
                $ext.find('pre').addClass('prettyprint');
                var $ul = $('<ul class="menu" />');
                $ext.find('h1,h2,h3,h4,h5,h6').each(function(i, el){
                    $ul.append($('<li />').html('<a href="#' + $(el).attr('id') + '" >' + $(el).html() + '</a>'));
                });
                $('.docmenu').append($ul);
                return $ext.html();}
        }
        ];
    };

    // Client-side export
    if (typeof window !== 'undefined' && window.showdown && window.showdown.extensions) {
        window.showdown.extensions.markdoc = markdownMarkdocExt;
    }
};

var markdoc = new markdoc();
markdoc.loadResource(function(){
    markdoc.render('markdoc');
});
