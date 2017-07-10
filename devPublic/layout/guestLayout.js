/**
 * Created by huy on 6/30/17.
 */
const m = require('mithril')
const header = require('./header')
const footer = require('./footer')
const guestLayout = {
	oninit: vnode => {
	},
	view  : vnode => m('.db'
		, m(header)
		, m('main', {style: 'min-height:600px'}, vnode.children)
		, m(footer)
	)
};

module.exports = guestLayout