/**
 * Created by huy on 6/19/17.
 */
const m = require('mithril')
const inputRadio = require('../../template/inputRadio')
const questionField = require('../../data/questionField')
const inputLabeled = require('../../template/inputLabeled')
const infoForm = {
	oninit: vnode => {
		vnode.state.question = vnode.attrs.question
	},
	view: vnode => m('.db',
		m('.db.f4.w-100-ns.fl.pa2',
			m('span.db', 'Kiểu câu hỏi'),
			questionField.questionType.map(questionType => m(inputRadio, {
					onclick: e => {
						console.log(vnode.attrs.question.questionType())
						vnode.state.question.questionType(e.target.value)
					},
					name: 'questionType',
					label: questionType.text,
					value: questionType.value,
					required: true,
					checked: vnode.state.question.questionType() == questionType.value
				})
			)
		),
		m('.db.f4.w-50-ns.fl.pa2',
			m('span.db', 'Công khai'),
			questionField.status.map(status => m(inputRadio, {
					onclick: e => {
						vnode.state.question.status(e.target.value)
					},
					name: 'status',
					label: status.text,
					value: status.value,
					required: true,
					checked: vnode.state.question.status() == status.value
				})
			)
		),
		m('.db.f4.w-50-ns.fl.pa2',
			m('span.db', 'Độ khó'),
			questionField.level.map(level => m(inputRadio, {
					onclick: e => {
						console.log(vnode.attrs.question.questionType())
						vnode.state.question.level(e.target.value)
					},
					name: 'level',
					label: level.text,
					value: level.value,
					required: true,
					checked: vnode.state.question.level() == level.value
				})
			)
		),
		m('.db.f4.w-100-ns.pa2', m(inputLabeled, {
			label: 'Chuyên mục',
			oninput: e => {
				vnode.state.question.group = e.target.value.split(',')
			},
			value: vnode.state.question.group.join(','),
			name: 'group'
		})),
		m('.db.f4.w-100.pa2.ma2',
			m('span.db', 'Nội dung: '),
			m('.db.w-100.overflow-auto',
				m('.db.fl.w-100',
					m('textarea.w-100', {
						oninput: e => {
							vnode.state.question.text(e.target.value)
							e.target.style.height = ''
							e.target.style.height = e.target.scrollHeight + 'px'
						},
						style: {
							minHeight: '80px'
						},
						value: vnode.state.question.text()
					}))
			)
		)
	)
};

module.exports = infoForm