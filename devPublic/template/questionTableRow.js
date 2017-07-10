/**
 * Created by huy on 5/28/17.
 */
const m = require('mithril')
const multiChoiceEdit = require('./multiChoiceEdit')
const questionTableRow = {
    oninit: vnode => {
        vnode.attrs.isDetail = false
    },
    view: vnode => [m('tr.striped--moon-gray',
        m('td', vnode.attrs.index),
        m('td', m.trust(vnode.attrs.text)),
        m('td', m('ul', vnode.attrs.answers.map(ans => m('li', m.trust(ans.text))))),
        m('td', 'Đáp án ' + (vnode.attrs.correctIndex + 1)),
        m('td', new Date(vnode.attrs.updatedAt).toLocaleString('vi-VN')),
        m('td.underline', {
            onclick: e => vnode.attrs.isDetail = !vnode.attrs.isDetail
        }, "Chi tiết")
    ),
        vnode.attrs.isDetail
            ? m('tr', m('td[colspan=5]', m(multiChoiceEdit, vnode.attrs)))
            : ""
    ]
};

module.exports = questionTableRow