/**
 * Created by huy on 6/5/17.
 */
const m = require('mithril')
const practiceInfo = require('../../component/prepareTest')
const practiceView = require('../../component/practiceEdit/previewPractice')

const practiceModel = require('../../model/practice')
const questionModel = require('../../model/question')
const userModel = require('../../model/meStudent')
const practiceClass = require('../../class/practice')
const questionClass = require('../../class/question')
const testInfo = require('../../component/practiceInfoV1')
const scoreClass = require('../../class/score')
const questionView = require('../../component/practiceEdit/previewQuestion')
const panel = require('../../component/doTestPanel')
const timer = require('../../template/countDownTimer')
const tableHeader = require('../../template/tableHeader')
const tableRow = require('../../template/tableRow')
const scoreModel = require('../../model/score')
const layout = require('../../layout/pureLayout')
const endingTest = {
	oninit  : vnode => {
		vnode.attrs.totalScore = vnode.state.calScore(vnode.attrs.questionDetailList, vnode.attrs.userAnswer)
		userModel.getMyInfo()
		         .then(() => scoreModel.sendMyScore(new scoreClass(vnode.attrs.practice, vnode.attrs.totalScore)))
		         .then(console.log)
		         .catch(console.log)
	},
	calScore: (questionDetailList, userAnswer) => {
		function compareTwoArrayOfScore(trueAnswer, chosenAnswer) {
			let result = true
			for (let i = 0; i <= trueAnswer.length; i++) {
				if (trueAnswer[ i ] != chosenAnswer[ i ]) {
					result = false
					break
				}
			}
			return result
		}

		let solution = questionDetailList.map(item => item.answer.choices.map(answerChoice => answerChoice.isCorrect()))
		let score = solution.map((item, index) => compareTwoArrayOfScore(item, userAnswer[ index ].value)).filter(item => item == true).length
		console.log(score)
		return score
	},
	view    : vnode => m('.db.f3.ma2'
		, m(testInfo, {practice: vnode.attrs.practice})
		, m('.db.w-80.mt2.center',
			m('table.w-100.ba'
				, m(tableHeader, {list: [ 'Học sinh', "Điểm số" ]})
				, m(tableRow, {list: [ userModel.data.userName, vnode.state.calScore(vnode.attrs.questionDetailList, vnode.attrs.userAnswer) + '/' + vnode.attrs.questionDetailList.length ]}))
		)
	)
}
const doTest = {
	//cung cap abstraction makeAnswer de luu dap an
	oninit: vnode => {
		vnode.state.questionDetailList = []
		vnode.state.userAnswer = []
		vnode.state.totalScore = 0
		vnode.state.practice = new practiceClass()
		vnode.state.makeAnswer = (answer, index) => {
			vnode.state.userAnswer[ index ].value = answer
		}
		vnode.state.isDone = false
		vnode.state.loaded = false
		practiceModel.get(m.route.param('practiceId'))
		             .then(result => {
			             vnode.state.practice = new practiceClass(result)
			             return questionModel.find({
				             $or: vnode.state.practice.questionList.map(item => {
					             return {_id: item}
				             })
			             })
		             }).then(result => {
			             return vnode.state.questionDetailList = result.data.map(item => new questionClass(item))
		             })
		             .then(result => result.map(question => {
			             vnode.state.userAnswer.push({value: ''})
		             }))
		             .then(() => {
			             vnode.state.loaded = true
			             m.redraw()
		             })
		vnode.state.submit = () => {
			vnode.state.isDone = true
		}
		vnode.state.sendscore = () => {

		}
	},
	view  : vnode =>
		vnode.state.isDone
			//KHi xem ket qua
			?
		m(layout,
			m('.db'
				, m(endingTest, {
					practice          : vnode.state.practice,
					questionDetailList: vnode.state.questionDetailList,
					userAnswer        : vnode.state.userAnswer,
					totalScore        : vnode.state.totalScore
				})
				, m('details.w-80.center.ba'
					, m('summary.f4.pa1', "Xem phần giải đáp")
					, m('.db.overflow-auto'
						, m('.db', {style: "margin-top : 40px;"}
							, vnode.state.questionDetailList.map((item, index) =>
								m('.db.b--gray.pa1.mb1'
									, m(questionView, {
										question     : item
										, index      : index
										, makeAnswer : vnode.state.makeAnswer
										, userAnswer : vnode.state.userAnswer[ index ]
										, previewMode: 1
									}))))))))
			//KHi lam bai
			:
		m('.db.overflow-auto'
			, m('.db.pa1.bg-blue.f5.f4-ns.w-100.b.fixed'
				, {style: "top:0;height:36px;max-width:1000px"}
				, m('.db'

					, m('.db.fl.w-60.pr1', vnode.state.practice.name() + ' ')
					, m('.db.fl.w-20.bl.tc.pl1', {style: 'min-width:60px'}
						, vnode.state.loaded
							? vnode.state.practice.duration != 0 ?
							  m(timer, {duration: vnode.state.practice.duration * 60 * 1000})
							  : ''
							: ''
					)
					, m('.db.fr.w-20.tr', m('button.bg-white.br1.b--white.ba.pa1', {onclick: vnode.state.submit}, 'Nộp bài'))))

			, m('.db', {style: "margin-top : 40px;"}
				, vnode.state.questionDetailList.map((item, index) =>
					m('.db.pa1.mb1'
						, m(questionView, {
							question     : item
							, index      : index
							, makeAnswer : vnode.state.makeAnswer
							, userAnswer : vnode.state.userAnswer[ index ]
							, previewMode: 0
						})))))
};

module.exports = doTest

