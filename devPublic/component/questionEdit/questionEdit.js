/**
 * Created by huy on 6/6/17.
 */
const m = require('mithril')
const stream = require('mithril/stream')
const inputLabeled = require('../../template/inputLabeled')
const inputRadio = require('../../template/inputRadio')
const icon = require('../../template/icon')
const questionModel = require('../../model/question')
const myUtil = require('../../util/myUtil')

const writeQuestion = require('./edit/writeQuestion')
const typeInBlank = require('./edit/typeInBlank')
const multiChoice = require('./edit/multiChoiceAnswer')

const infoForm = require('./infoForm')
const switchViewByKeyfield = require('../../template/switchViewByKey')

const preview = require('./preview')

const questionField = require('../../data/questionField')
//
const button = 'button.pa2.bg-blue.b--blue.ba'

//
//
const question = require('../../class/question')


//
//có 2 cái cần quan tâm {
// cancel : lệnh đóng cửa sổ
// action : {text : "Dung để hiển thị tiêu đề"}
// question : {} rỗng sẽ dùng để thêm câu, {có dữ liệu sẽ dùng để sửa hoặc clone câu hỏi}
// }
//
function setSubjectGrade() {
	return {
		subject: m.route.param('subject'),
		grade  : m.route.param('grade')
	}
}
const questionEdit = {
	oninit: vnode => {
		console.log(vnode.attrs)
		vnode.attrs.question
			? vnode.state.question = new question(vnode.attrs.question)
			: vnode.state.question = new question()
		Object.assign(vnode.state.question, setSubjectGrade())
		vnode.state.action = vnode.attrs.action || {text: 'Thêm câu hỏi', value: ''}
		vnode.state.hasGuide = false
		console.log(vnode.state.question)
	},
	add   : vnode => {
		vnode.state.question._id = null
		questionModel.create(vnode.state.question)
		             .then(result => {
			             vnode.attrs.data.push(result)
		             })
		             .then(() => isAction(false))
	},
	update: vnode => {
		if (vnode.state.question._id) {
			questionModel.update(vnode.state.question)
			             .then(result => {
				             Object.assign(vnode.attrs.data.find(q => q._id == vnode.state.question._id), result)
			             })
			             .then(() => isAction(true))
		}
	},
	remove: vnode => {
		questionModel.remove(vnode.state.question)
		questionModel.find(myUtil.getSubjectGrade())
	},
	submit: (e, vnode) => {
		e.preventDefault()
		function isAction(trueOrFalse) {
			vnode.state.inAction = trueOrFalse
			m.redraw()
		}

		console.log(vnode.state.action)
		isAction(true)
		if (vnode.state.action.value == 'add') {
			vnode.state.add(vnode)
			     .then(() => isAction(false))
		}
		if (vnode.state.action.value == 'update') {
			vnode.state.update(vnode)
			     .then(() => isAction(false))
		}
		if (vnode.state.action.value == 'remove') {
			vnode.state.remove(vnode)
			     .then(() => isAction(false))
		}
	},
	view  : vnode =>
		m('.db.overflow-auto',
			m('form.db.bg-white.db.center.w-50.fl.pa2',
				{
					onsubmit: e => vnode.state.submit(e, vnode)
				},
				m('.db.f3.b.ma3.tc', vnode.attrs.action ? vnode.attrs.action.text : 'Thêm câu hỏi'),
				m('.db.f4.underline.tc.ttc', m.route.param('subject') + ' ' + m.route.param('grade')),
				m(infoForm, {question: vnode.state.question}),

				m(switchViewByKeyfield, {
					components: [ {component: multiChoice, key: 1},
					              {component: typeInBlank, key: 2},
					              {component: writeQuestion, key: 3},
					],

					defaultKey    : 1,
					key           : vnode.state.question.questionType(),
					componentAttrs: vnode.state.question.answer
				})
				,
				m('hr'),
				m('label.db.ma1', m('input[type=checkbox]', {
					onclick: e => {
						vnode.state.hasGuide = e.target.checked
					}
				}), 'Có hướng dẫn giải bài'),
				vnode.state.hasGuide ?
				m('.db.f4.w-100.pa2.ma2',
					m('span.db', 'Hướng dẫn giải bài '),
					m('.db.w-100.overflow-auto',
						m('.db.fl.w-100',
							m('textarea.w-100', {
								oninput: e => {
									vnode.state.question.guide(e.target.value)
									e.target.style.height = ''
									e.target.style.height = e.target.scrollHeight + 'px'

								},
								style  : {
									minHeight: '80px'
								},
								value  : vnode.state.question.guide()
							}))
					)
				) :
				'',
				m(button, {
					onclick : () => {
						vnode.state.action.value = 'add'
					},
					disabled: vnode.state.inAction
				}, 'Thêm câu hỏi'),
				m(button, {
					onclick : () => vnode.state.action.value = 'update',
					disabled: !vnode.state.question._id
				}, 'Cập nhập'),
				m(button, {
					onclick: () => {
						vnode.state.action.value = ''
						vnode.attrs.cancel ? vnode.attrs.cancel() : ''
					}
				}, 'Hủy'),
				m(button, {
					onclick : () => {
						vnode.state.action.value = 'remove'

					},
					disabled: !vnode.state.question._id
				}, 'Xóa')
			),
			m('.db.bg-white.db.center.w-50.fl.pa2', m(preview, {question: vnode.state.question}))
		)
};

module.exports = questionEdit
