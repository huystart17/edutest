/**
 * Created by huy on 6/20/17.
 */
const m = require('mithril')
const questionModel = require('../../model/question')
const questionClass = require('../../class/question')
const questionPreview = require('./previewQuestion')
const previewPractice = {
	oninit: vnode => {
		//console.log(vnode.attrs)
		vnode.state.questionDetailList = []
		console.log(vnode.attrs.practice.questionList)
		vnode.attrs.practice.questionList.map(
			item => questionModel
				.get(item)
				.then(result => {
					vnode.state.questionDetailList.push(new questionClass(result))
					m.redraw()
				})
		)

	},
	view  : vnode => m('.db',
		vnode.state.questionDetailList.map((item, index) => m(
			'.db.ba.b--gray.pa1.ma1',
			m(questionPreview, {question: item, index: index}))))
};

module.exports = previewPractice