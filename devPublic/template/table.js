/**
 * Created by huy on 7/8/17.
 */
const m = require('mithril')

const table = {
	oninit: vnode => {
		vnode.state.rowClick = vnode.attrs.rowClick
			|| function (row) {
				console.log(row._id)
			}
	},
	view  : vnode => m('table'
		, {
			class  : vnode.attrs.class
			, id   : vnode.attrs.id
			, style: vnode.attrs.style
		}
		, m('tr', vnode.attrs.header.map(item => m('th', item)))
		, vnode.attrs.body.map(item => m('tr', {
				onclick: e => {
					vnode.state.rowClick(item)
				}
			}
			, item.map(row => m('td', row))))
	)
};

module.exports = table