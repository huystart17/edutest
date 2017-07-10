/**
 * Created by huy on 5/19/17.
 */
const m = require('mithril');
const appLink = require('./appLink')
const profileImg = {
	oninit: vnode => {
		//something
	},
	view  : vnode => m(
		'.db',
		m(appLink, {
			href : vnode.attrs.href || "",
			class: 'db tc overflow-auto'
		}, m('img.br-100.b--white.ba.w-90', Object.assign({
				style: {
					"max-height": "200px"
				},
			}, vnode.attrs
		)))
	)
};

module.exports = profileImg;
