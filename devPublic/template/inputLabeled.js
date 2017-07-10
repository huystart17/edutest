/**
 * Created by huy on 5/22/17.
 */
const m = require('mithril')
const setValue = require('./util/setValue')
const css = require('./cssByClass/css')
const inputLabeled = {
    oninit: vnode => {
        setValue.ifNot(vnode.attrs.label, "Text")
    },
    view: vnode => m('label' + css.inputLabeled,
        m('span' + css.label, vnode.attrs.label),
        m('input' + css.input, Object.assign(
            {}, vnode.attrs)
        )
    )
};

module.exports = inputLabeled