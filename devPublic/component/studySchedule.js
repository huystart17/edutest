/**
 * Created by huy on 5/20/17.
 */
const m = require('mithril')
const tableHeader = require('./../template/tableHeader')
const setValue = require('./../template/util/setValue')
const tableRow = require('./../template/tableRow')
const studySchedule = {

    oninit: vnode => {
        setValue.ifNot(vnode.attrs.data, [])
        setValue.ifNot(vnode.attrs.headers, [])
    },
    view: vnode => m('.db',
        m('table.ba.w-100',
            m(tableHeader, {list: vnode.attrs.headers}),
            vnode.attrs.data.map(
                row => m(tableRow, {list: row})
            )
        )
    )
};

module.exports = studySchedule