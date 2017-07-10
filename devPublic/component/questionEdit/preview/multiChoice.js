/**
 * Created by huy on 6/18/17.
 */
const m = require('mithril')
const markdown = require('../../markdownRender')

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

const multiAnswer = {
	oninit: vnode => {
		vnode.state.answer = vnode.attrs.answer
		vnode.state.chosen = vnode.attrs.userAnswer.value || [ false, false, false, false ]
		vnode.attrs.userAnswer.value = vnode.state.chosen
		vnode.attrs.viewAnswer = vnode.attrs.viewAnswer || false

	},
	view  : vnode => m('.db.overflow-auto',
		vnode.state.answer.choices.map((item, index) =>
			m('.db.fl.w-25-ns.w-100.pa1.mt1',
				m('.br2.pa2.overflow-auto.bg-animate.ba.b--dotted.b--blue.hover-orange.pointer',
					{
						class  : vnode.state.chosen[ index ] ? 'bg-blue' : '',
						onclick: e => {
							if (!vnode.attrs.viewAnswer) {
								vnode.state.chosen[ index ] = !vnode.state.chosen[ index ]
								vnode.attrs.makeAnswer(vnode.state.chosen, vnode.attrs.index)
							} else {
								alert('Không thể chọn đáp án khi đang xem giải')
							}
						}
					},
					m('.db', m.trust(markdown.render(
						vnode.attrs.viewAnswer ?
						item.isCorrect() ? '__Đúng__ ' + item.text() :
						item.text()
							: item.text()
						))
					)))),
		m('.db',
			vnode.attrs.viewAnswer ?
			compareTwoArrayOfScore(
				vnode.state.answer.choices.map(item => item.isCorrect()), vnode.state.chosen) ?
			m('.db.green', "Bạn đã làm đúng") :
			m('.db.red', "Bạn đã làm sai") :
			''
		)
	)
};

module.exports = multiAnswer