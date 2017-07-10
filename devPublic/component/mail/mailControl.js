/**
 * Created by huy on 7/8/17.
 */
const m = require('mithril')
const tabsPanel = require('../../template/tabsPanel')
const appLink = require('../../template/appLink')

const mailControl = {
	oninit : vnode => {
	},
	current: '',
	view   : vnode => m('.db',
		m(tabsPanel, {
			tabs     : [
				{text: 'Tất cả', value: 'all'}
				, {text: 'Chờ giải quyết', value: 'wait'}
				, {text: 'Giải quyết xong', value: 'solved'}
				, {text: 'Bị hủy', value: 'cancel'}
			]
			, current: vnode.state.current
		}))
};
const mailControl2 = {
	oninit: vnode => {
		vnode.state.current = m.route.get()
	},
	view  : vnode => m('.db.bb.mb2'
		, [

			{text: 'Tất cả', href: '/my-mail'}
			, {text: 'Đặt câu hỏi', href: '/my-mail/new'}
			, {text: 'Đã giải quyết', href: '/my-mail/solved'}
			, {text: 'Đang chờ giải', href: '/my-mail/wait'}
			, {text: 'Bị hủy', href: '/my-mail/cancel'}


		].map((item, index, arr) => m('a.dib.pa2.f4.no-underline', {
			href    : item.href,
			class   : [
				item.href == vnode.state.current ? 'bg-blue white' : 'bg-white',
				index != 0 && index != arr.length ? 'pl2 bldấ' : ''
			].join(' '),
			oncreate: m.route.link
		}, item.text)))
}

module.exports = mailControl2