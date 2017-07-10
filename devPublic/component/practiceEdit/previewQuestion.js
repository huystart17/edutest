/**
 * Created by huy on 6/17/17.
 */
const m = require('mithril')
const switchComponentByKey = require('../../template/switchViewByKey')
const multiChoices = require('../questionEdit/preview/multiChoice')
const typeInBlank = require('../questionEdit/preview/typeInBlank')
const writeAnswer = require('../questionEdit/preview/writeAnswer')


const md = require('../markdownRender')
const stream = require('mithril/stream')


const preview = {
	oninit: vnode => {
		vnode.state.question = vnode.attrs.question
		vnode.state.makeAnswer = vnode.attrs.makeAnswer
		vnode.state.previewMode = vnode.attrs.previewMode || 0
	},

	view: vnode => m('.db',
		vnode.state.previewMode == 0 ?
		m('.db.pa1',
			m('.db.bg-washed-blue',
				m('.dib.b', `Câu hỏi ${vnode.attrs.index + 1 || ''}: `),
				m('.dib', m.trust(md.render(vnode.state.question.text())))),
			m(switchComponentByKey, {
				components    : [
					{component: multiChoices, key: 1},
					{component: typeInBlank, key: 2},
					{component: writeAnswer, key: 3}
				],
				key           : vnode.state.question.questionType(),
				defaultKey    : 1,
				componentAttrs: Object.assign(vnode.state.question,
					{
						makeAnswer  : vnode.attrs.makeAnswer
						, viewAnswer: false
						, index     : vnode.attrs.index
						, userAnswer: vnode.attrs.userAnswer

					})
			})) :
		vnode.state.previewMode == 1 ?
		m('.db',
			m('.db', m('b', `Câu hỏi ${vnode.attrs.index + 1 || ''}: `), m('i', `(độ khó ${vnode.state.question.level})`)),
			m.trust(md.render(vnode.state.question.text())),
			m(switchComponentByKey, {
				components    : [
					{component: multiChoices, key: 1},
					{component: typeInBlank, key: 2},
					{component: writeAnswer, key: 3}
				],
				key           : vnode.state.question.questionType(),
				defaultKey    : 1,
				componentAttrs: Object.assign(vnode.state.question,
					{
						makeAnswer  : vnode.state.makeAnswer
						, viewAnswer: true
						, userAnswer: vnode.attrs.userAnswer
						, index     : vnode.attrs.index
					})

			}),
			m('.db.b', 'Hướng dẫn giải: '),
			m('.db.pa2', m.trust(md.render(vnode.state.question.guide())))
		) :
		'')
};

module.exports = preview