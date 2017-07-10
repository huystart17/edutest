/**
 * Created by huy on 5/20/17.
 */
const m = require('mithril');
const setValue = require("./util/setValue")

const welcomeText = {
	oninit: vnode => {
		//something
		setValue.ifNot(vnode.attrs.user, {})
	},
	view  : vnode => m(
		'.db',
		m('.db.f3.tc', 'Xin chào ', m('b', vnode.attrs.userName))
	)
};

module.exports = welcomeText;
