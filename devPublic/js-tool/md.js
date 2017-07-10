/**
 * Created by huy on 5/22/17.
 */
const m = require('mithril')
const md = require('markdown-it')()
    .use(require('markdown-it-mathjax')());
const app = {
    view : ()=>m('p' , m.trust( md.render('$${234}over{123}$$')))
}
m.mount(document.getElementById('app'), app)