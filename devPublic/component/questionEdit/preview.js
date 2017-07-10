/**
 * Created by huy on 6/17/17.
 */
const m = require('mithril')
const switchComponentByKey = require('../../template/switchViewByKey')
const multiChoices = require('./preview/multiChoice')
const typeInBlank = require('./preview/typeInBlank')
const writeAnswer = require('./preview/writeAnswer')
const md = require('../markdownRender')
const stream = require('mithril/stream')


const preview = {
	oninit: vnode => {
		vnode.state.question = vnode.attrs.question
		vnode.state.previewMode = stream(0)
	},

	view: vnode => m('.db',
		m('.db.f3.b.ma3.tc', "Xem trước"),
		m('.db.b.mb2',
			m('button', {onclick: e => vnode.state.previewMode(0)}, "Khi học sinh làm bài"),
			m('button', {onclick: e => vnode.state.previewMode(1)}, "Khi học sinh xem giải")
		),
		vnode.state.previewMode == 0 ?
		m('.db',
			m('.db.b.underline.mb2', "Khi học sinh làm bài"),
			m('.db.b', 'Câu hỏi:'),
			m.trust(md.render(vnode.state.question.text())),
			m(switchComponentByKey, {
				components    : [
					{component: multiChoices, key: 1},
					{component: typeInBlank, key: 2},
					{component: writeAnswer, key: 3}
				],
				key           : vnode.state.question.questionType(),
				defaultKey    : 1,
				componentAttrs: Object.assign(vnode.state.question, {viewAnswer: false})
			})) : vnode.state.previewMode == 1 ?
		        m('.db',
			        m('.db.b.underline.mb2', "Khi học sinh xem giải"),
			        m('.db', m('b', `Câu hỏi: `), m('i', `(độ khó ${vnode.state.question.level})`)),
			        m.trust(md.render(vnode.state.question.text())),
			        m(switchComponentByKey, {
				        components    : [
					        {component: multiChoices, key: 1},
					        {component: typeInBlank, key: 2},
					        {component: writeAnswer, key: 3}
				        ],
				        key           : vnode.state.question.questionType(),
				        defaultKey    : 1,
				        componentAttrs: Object.assign(vnode.state.question, {viewAnswer: true})
			        }),
			        m('.db.b', 'Hướng dẫn giải: '),
			        m('.db.pa2', m.trust(md.render(vnode.state.question.guide()))),
			        m('hr')
		        ) : ''
	)
};

module.exports = preview