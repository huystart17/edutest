/**
 * Created by huy on 6/19/17.
 */
const m = require('mithril')
const textarea = require('../../../template/textareaAutoGrow')
const stream = require('mithril/stream')
const typeInBlank = {
	oninit: vnode => {
		//TODO : sửa phần cập nhật thông khi thêm đáp án
		vnode.state.userTypeInBlank = vnode.attrs.answer.correctString.map(item => stream(''))

	},
	view  : vnode => m('.db',
		vnode.state.userTypeInBlank.map(
			(item, index) =>
				m('.db',
					!vnode.attrs.viewAnswer ?
					m('.db', `Ô trống ${index + 1 }:`,
						m(textarea, {text: item})) :
					m('.db.mt2',
						m('table',
							m('tr',
								m('td.underline', 'Bạn điền: '),
								m('td', item())),

							m('tr',
								m('td.underline', 'Đáp án: '),
								m('td', vnode.attrs.answer.correctString[ index ]())))
					)
				)
		)
	)
};

module.exports = typeInBlank