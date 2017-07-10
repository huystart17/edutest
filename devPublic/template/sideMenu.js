/**
 * Created by huy on 5/20/17.
 */
const m = require('mithril');
const icon = require('./icon')
const appLink = require('./appLink')
const client = require('../model/baseClient')

const sideMenu = {
	oninit: vnode => {
		//something
	},
	view  : vnode => m(
		'.db'
		, vnode.attrs.list.map((link, index) => m('.db.mt2.pl2.white.bb.pb2'
			, m(appLink, {
					href: link.href
				},
				m('.dib',
					m(icon, {
						icon : link.icon,
						style: {
							color: index % 2 == 1 ? 'brown' :
							       'blue'
						}
					})),
				m('.dib.f4.ml2', link.text)))
		)
		, m('.db.mt2.pl2.white', {
				onclick: e => {
					client.logout()
					location.href = '/'
				}
			}
			, m('.link.hover-orange.black.underline-hover.bb.pb2.white.mt2.pl2'
				, m(icon, {icon: 'power', style: 'color:black'})
				, m('.dib.f4.ml2', "Đăng xuất")
			))
		//{href: '/logot', icon: 'power', text: 'Đăng xuất'}
	)
};

module.exports = sideMenu;
