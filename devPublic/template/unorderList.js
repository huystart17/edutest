/**
 * Created by huy on 5/22/17.
 */
const m = require('mithril')
const setValue = require('./util/setValue')
const unorderList = {
    oninit: vnode => {
        setValue.ifNot(vnode.attrs.list, [])
    },
    view: vnode => m('ul.list.black.pa1',
        vnode.attrs.list.map(li => m('li.pa0.mt1.bb.b--blue', li)))
};

module.exports = unorderList
