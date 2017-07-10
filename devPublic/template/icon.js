/**
 * Created by huy on 5/16/17.
 */
const m = require('mithril')
const CSS = require('./cssByClass/css')
const icon = {
    oninit: vnode => {

    },
    iconoBuilder: (icon) => {
        return `.icono-${icon}`
    },
    view: vnode =>
        m(`i${vnode.state.iconoBuilder(vnode.attrs.icon)}`, vnode.attrs, vnode.children)
}
module.exports = icon
