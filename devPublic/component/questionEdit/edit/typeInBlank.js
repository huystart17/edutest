/**
 * Created by huy on 6/7/17.
 */
const m = require('mithril')
const inputLabeled = require('../../../template/inputLabeled')
const stream = require('mithril/stream')
const typeInBlank = {
	oninit: vnode => {
		console.log(vnode)
		vnode.state.correctString = vnode.attrs.correctString
	},
	view: vnode => m('.db.pa2',
		m('.db.ma1.f4.b', 'Đáp án đúng'),
		vnode.state.correctString.map((answer, index) =>
			m('.db.relative',
				m(inputLabeled, {
					label: 'Ô trống' + (1 + index),
					oninput: e => answer(e.target.value),
					value: answer()
				}),
				m('button.br-100.absolute[type=button]', {
					style: {
						top: 15,
						right: -5
					},
					onclick: e => {
						vnode.state.correctString.splice(index, 1)
					}
				}, 'X')
			)
		),
		m('button[type=button].pa2.bg-blue.b--blue.ba.ma1', {onclick: e => vnode.state.correctString.push(stream())}, 'Thêm đáp án')
	)
};

module.exports = typeInBlank
