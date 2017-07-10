/**
 * Created by huy on 5/19/17.
 */
/**
 * Created by huy on 5/19/17.
 */
const m = require('mithril')
const profileImg = require('../template/profileImg')
const sideMenu = require('../template/sideMenu')
const icon = require('../template/icon')

const sideMenuList = [
	{href: '/home', icon: 'home', text: 'Trang chủ'},
	{href: '/profile', icon: 'calendar', text: 'Hồ Sơ học tập'},
	{href: '/leaderBoard', icon: 'flag', text: 'Bảng xếp hạng'},
	{href: '/my-mail', icon: 'comment', text: 'Gửi thắc mắc'},
	{href: '/account', icon: 'user', text: 'Tài khoản'}
]
const data = {
	profileImg: {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_SCepqa-F_oXgKyjnbPxRuuPBQStb3U9adAvpR5QYZexb_jFeFw'}
}
const sideBar = {
	oninit: vnode => {

	},
	view  : vnode => m('.db.tc.tl-ns.bb.bn-ns', {
			style: {
				display: vnode.state
			}
		},
		m('.dn-ns.db.f4', {
			onclick: e => {
				vnode.state.show = !vnode.state.show
			}
		}, m(icon, {icon: 'hamburger'}), "Menu"),
		m(`${vnode.state.show ? '.db' : '.dn'}.db-ns.dn`,
			m('.db.ma3.pa3', m(profileImg, data.profileImg)),
			m('.db.ma3', m(sideMenu, {list: sideMenuList}))
		)
	)
}
module.exports = sideBar
