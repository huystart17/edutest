/**
 * Created by huy on 6/27/17.
 */
const m = require('mithril')
const doTestPanel = {
	oninit: vnode => {

	},
	view  : vnode => m('.db.fixed.static-ns.mb-s.center.w-50-ns.w-100.bg-light-green'
		, {style: 'bottom : 0;'}
		, m('button', "Nộp bài")

	)
}
module.exports = doTestPanel