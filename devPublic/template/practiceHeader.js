/**
 * Created by huy on 5/25/17.
 */
const m = require('mithril')
const css = require('./cssByClass/css')
const practiceHeader = {
    oninit: vnode => {

    },
    view: vnode => m('.db.ma3.pa2',
        m(css.practiceTitle, vnode.attrs.title),
        m('.db.f4.tc',
            `Thời gian làm bài: ${vnode.attrs.duration || vnode.attrs.duration == 0
                ? "Không giới hạn"
                : vnode.attrs.duration}`),
        m('.db.f4.tc', "Tác giả: ", vnode.attrs.authorId),
        m('.db.f4.tc', "Bộ đề thuộc nhóm : ", vnode.attrs.practiceGroupId),
        m('.db.f4.tc', "Mục tiêu:  ", vnode.attrs.aim),
        m('.db.f4.tc', "Ngày tạo: ", new Date(vnode.attrs.createdAt).toLocaleString('vi-VN')),
        m('hr'),
        vnode.children)
};


module.exports = practiceHeader