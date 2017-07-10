/**
 * Created by huy on 5/16/17.
 */
const m = require('mithril');
const css = require('./cssByClass/css')
const setValue = require('./util/setValue')

const answerRadio = {
    oninit: vnode => {

    },
    view: vnode => m('label.dib.w-25-l.w-100',
        m('.db.f4.pa2.ba.b--blue.br2.ma1', {
                class: vnode.attrs.selectedValue() == vnode.attrs.value ? "bg-blue white" : "",
                title: "Chọn đáp án này"
            },
            m(`input[type=radio].dn`, {

                name: vnode.attrs.name,
                value: vnode.attrs.value,
                onchange: vnode.attrs.onchange
            }),
            m('.db.f3', m.trust(vnode.attrs.text))
        )
    )
};

module.exports = answerRadio;