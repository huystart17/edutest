/**
 * Created by huy on 7/8/17.
 */
const m = require('mithril')
const stream = require('mithril/stream')
const tabsPanel = {
	oninit: vnode => {

	},
	view  : vnode => m('.db'
		, vnode.attrs.tabs.map((item, index) =>
			m('span.pa1.ba.b--gray', {
				style :{
					backgroundColor: item.value == vnode.attrs.current ? 'blue': 'white'
				},
				onclick: e => {

					vnode.attrs.current = item.value
					console.log(vnode.attrs.current)
				}
			}, item.text)
		)
	)
};

module.exports = tabsPanel