/**
 * Created by huy on 5/19/17.
 */
const m = require('mithril')
const main = {
    oninit: vnode => {
    },
    view: vnode => m('main.db',vnode.attrs,
        vnode.children
    )
}
module.exports = main
