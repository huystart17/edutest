/**
 * Created by huy on 6/7/17.
 */
const m = require('mithril')
const markdown = require('./../../markdownRender')
const writeQuestion = {
	oninit: vnode => {
		vnode.state.howTo = vnode.attrs.howTo
	},
	view: vnode => m('.db',
		m('label',
			m('.db.b', 'Hướng dẫn chấm điểm'),
			m('db.w-100.overflow-auto',

				m('textarea.w-100', {
					oninput: e => {
						vnode.state.howTo(e.target.value)
						e.target.style.height = ''
						e.target.style.height = e.target.scrollHeight + 'px'
					},
					style: {
						minHeight: '50px'
					},
					value: vnode.state.howTo()
				})
			)
		)
	)

};

module.exports = writeQuestion
