/**
 * Created by huy on 6/19/17.
 */
const m = require('mithril')
const textarea = require('../../../template/textareaAutoGrow')
const md = require('../../markdownRender')
const stream = require('mithril/stream')
const writeAnswer = {
	oninit: vnode => {
		vnode.state.answer = vnode.attrs.answer
		vnode.state.userWrite = stream('')
	},
	view: vnode => m('.db',
		!vnode.attrs.viewAnswer ?
			m(textarea, {
				text: vnode.state.userWrite
			}) :
			m('.db.overflow-auto.mb2',
				m('.db.fl.w-60',
					m('.db.underline', 'Bài viết của bạn: '),
					m('.db', m.trust(md.render(vnode.state.userWrite().toString())))),
				m('.db.fl.w-40',
					m('.db.underline', 'Biểu điểm: '),
					m('.db', vnode.state.answer.howTo())))
	)
};

module.exports = writeAnswer