/**
 * Created by huy on 5/19/17.
 */
const m = require('mithril');
const sideBar = require('./sideBar')
const header = require('./header')
const main = require('./main')
const footer = require('./footer')
const layout = {
	oninit: vnode => {
		//something
	},
	view  : vnode => m('.db.w-100.overflow-auto'
		, {
			style: "background-color: skyblue"
		},
		m(header),
		m('.db.fl-ns.w-20-ns.w-100.', m(sideBar)),
		m('.db.fl-ns.w-80-ns.w-100.bl-ns.b--green.bg-white'
			,m('.db.tc.f4.red.i' , "*Hiện ứng dụng vẫn đang trong quá trình phát triển")
			,m(main, {
				style: {
					marginTop: '10px',
					minHeight: '900px'
				}
			}, vnode.children),
			m(footer)
		)
	)
};
function set_layout(component, attrs) {
	return {view: vnode => m(layout, m(component || '', attrs || ''))}
}
module.exports = set_layout;
