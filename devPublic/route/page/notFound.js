/**
 * Created by huy on 7/9/17.
 */
const m = require('mithril')

const notFound = {
	oninit: vnode => {
	},
	view  : vnode => m('.f3.tc.db.pa5',
		'Không tìm thấy địa chỉ yêu cầu')
};

module.exports = notFound