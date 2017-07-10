/**
 * Created by huy on 5/24/17.
 */
const m = require('mithril')
const css = require('./cssByClass/css')
const inputSubmit = {
    oninit: vnode => {
    },
    view: vnode => m('input[type=submit]' + css.buttonDefault, vnode.attrs)

};

module.exports = inputSubmit