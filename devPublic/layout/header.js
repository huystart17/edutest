/**
 * Created by huy on 5/19/17.
 */
const m = require('mithril')
const headLine = require('../template/headLine')
const logo = require('../template/logo')
const icon = require('../template/icon')
const header = {
	oninit: vnode => {
	},
	view  : vnode => m('header.bg-washed-blue.bb.b--gray',
		m(headLine,
			m('db.fl.w-20-ns.w-10',
				m(logo, {
						src: '/asset/img/logo.png',
					}
				)),
			m('.db.fl.w-80-ns.tr.w-90',
				m('db.pa3',
					m('span.f4', 'Liên hệ:'),
					m('span.f4.pl2', m(icon, {class: 'black', icon: 'microphone'}), '01889940451'),
					m('span.f4.pl2', m(icon, {class: 'blue', icon: 'facebook'})),
					m('span.f4.pl2', m(icon, {class: 'red', icon: 'mail'}))
				))
		))
}
module.exports = header
