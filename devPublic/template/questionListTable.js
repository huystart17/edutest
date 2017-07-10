/**
 * Created by huy on 5/28/17.
 */
const m = require('mithril')
const row = require('./questionTableRow')
const setValue = require('./util/setValue')

const questionListTable = {
    oninit: vnode => {
        setValue.ifNot(vnode.attrs.list, [])
    },
    view: vnode => m('table.w-100',
        m('tr',

            m('th', 'Stt'),
            m('th', 'Nội dung'),
            m('th', "Các đáp án"),
            m('th', "Đáp án đúng"),
            m('th', "Ngày thực hiện")),
        vnode.attrs.list.map((question, index) =>
            m(row, Object.assign(
                question,
                {index: index + 1}
            )))
    )
}
module.exports = questionListTable