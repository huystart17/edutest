/**
 * Created by huy on 5/22/17.
 */
const m = require('mithril')
const setValue = require('./util/setValue')
const tableHeader = {
	oninit: vnode => {
		setValue.ifNot(vnode.attrs.list, [])

	},
	view  : vnode => m('tr',
		vnode.attrs.list.map(th => m('th', th))
	)
};

module.exports = tableHeader
