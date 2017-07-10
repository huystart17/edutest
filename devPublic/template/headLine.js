/**
 * Created by huy on 5/19/17.
 */
const m = require('mithril');
const css = require ('./cssByClass/css')
const headLine = {
    oninit: vnode => {
        //something
    },
    view: vnode => m(
      '.black.f3.pa1.ma0.overflow-auto',vnode.attrs, vnode.children
    )
};

module.exports = headLine;
