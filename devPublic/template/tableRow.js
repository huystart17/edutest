/**
 * Created by huy on 5/22/17.
 */
const m = require('mithril')
const setValue = require('./util/setValue')
const tableRow = {
	oninit: vnode => {
		setValue.ifNot(vnode.attrs.list, [])

	},
	view  : vnode => m('tr.hover-bg-blue.hover-white.f4.pointer',
		vnode.attrs.list.map(td => m('td.ba.ttc.tc.pa2 ', td))
	)
};

module.exports = tableRow
