/**
 * Created by huy on 6/7/17.
 */
const m = require('mithril')
const stream = require('mithril/stream')
const markdown = require('./../../markdownRender')
const multiChoiceAnswer = {
	oninit: vnode => {
		vnode.state.choices = vnode.attrs.choices || [
				{text: stream(''), isCorrect: stream(false)},
				{text: stream(''), isCorrect: stream(false)},
				{text: stream(''), isCorrect: stream(false)},
				{text: stream(''), isCorrect: stream(false)}
			]

	},

	view: vnode => m('.db',
		m('.db.b.f4.ma1', 'Các đáp án'),
		m('table',
			m('tr', m('th', 'Đúng'), m('th', 'Nội dung')),
			vnode.state.choices.map(answer =>
				m('tr',
					m('td', m('input[type=checkbox].pa0', {
						checked: answer.isCorrect(),
						onclick: (e) => {
							answer.isCorrect(!answer.isCorrect())
						}
					})),
					m('td.w-100.overflow-auto',

						m('textarea.w-100', {
							oninput: e => {
								answer.text(e.target.value)
								e.target.style.height = ''
								e.target.style.height = e.target.scrollHeight + 'px'
							},
							style: {
								minHeight: '40px'
							},
							value: answer.text()
						}))
				))
		)
	)
};

module.exports = multiChoiceAnswer
