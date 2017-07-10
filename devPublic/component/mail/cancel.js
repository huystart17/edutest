/**
 * Created by huy on 7/9/17.
 */
const m = require('mithril')

const cancel = {
	oninit: vnode => {
	},
	view  : vnode => m('.db',
		'Hello')
};

module.exports = cancel