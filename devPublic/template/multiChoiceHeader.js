/**
 * Created by huy on 5/16/17.
 */
const m = require('mithril');
const setValue = require('./util/setValue')
const css = require('./cssByClass/css')
const multiChoiceHeader = {
    oninit: vnode => {
        setValue.ifNot(vnode.attrs.index, "")
        //something
    },
    view: vnode => m(`.db.f3.pa2.ma2.bg-washed-green`,
        m('u.b', `Câu ${vnode.attrs.index + 1}:`)," ", m.trust(vnode.attrs.text)
    )
};

module.exports = multiChoiceHeader;