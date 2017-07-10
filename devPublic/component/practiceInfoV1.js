/**
 * Created by huy on 6/29/17.
 */
const m = require('mithril')
const appLink = require('../template/appLink')
const practiceInfoV1 = {
	oninit: vnode => {
		vnode.state.practice = {}
		vnode.state.practice = vnode.attrs.practice
	},
	view  : vnode => m('.db',
		m('.db.f3.b.pa1.tc', 'Thông tin đề thi'),
		m('table.w-80.center.f4.ba',
			m('tr',
				m('th.w-25', ''),
				m('th.w-25', ''),
				m('th.w-25', ''),
				m('th.w-25', '')
			),
			m('tr',
				m('td.pa2.b', 'Bài kiểm tra: '),
				m('td', vnode.state.practice.name),
				m('td.pa2.b[colspan=2]', m(appLink, {href: 'practiceList'}, 'Các bài kiểm tra khác'))
			),
			m('tr',
				m('td.pa2.b', 'Khối: '),
				m('td', vnode.state.practice.grade),
				m('td.pa2.b', 'Thời gian: '),
				m('td', vnode.state.practice.duration, ' Phút')
			),
			m('tr',
				m('td.pa2.b', 'Môn học: '),
				m('td', vnode.state.practice.subject),
				m('td.pa2.b', 'Độ khó: '),
				m('td', vnode.state.practice.level)
			),
			m('tr',

				m('td.pa2.b', 'Ghi chú: '),
				m('td[colspan=3]', vnode.state.practice.description)
			)))
};

module.exports = practiceInfoV1