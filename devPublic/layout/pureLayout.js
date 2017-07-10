/**
 * Created by huy on 6/29/17.
 */
const m = require('mithril');
const sideBar = require('./sideBar')
const header = require('./header')
const main = require('./main')
const footer = require('./footer')
const pureLayout = {
	oninit: vnode => {
		//something
	},
	view  : vnode => m('.db.w-100',
		m(header),
		m('.db.fl-ns.w-20-ns.w-100.br-ns', m(sideBar)),
		m('.db.fl-ns.w-80-ns.w-100.b--green.bl-ns',
			m(main, {
				style: {
					marginTop: '10px',
					minHeight: '500px'
				}
			}, vnode.children),
			m(footer)
		)
	)
};

module.exports = pureLayout