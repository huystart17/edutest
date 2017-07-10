/**
 * Created by huy on 7/9/17.
 */
const m = require('mithril')

const wait = {
	oninit: vnode => {
	},
	view  : vnode => m('.db',
		'Hello')
};

module.exports = wait