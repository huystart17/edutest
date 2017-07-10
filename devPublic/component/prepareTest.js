/**
 * Created by huy on 6/5/17.
 */
const m = require('mithril')
const text = require('../data/text')
const praticeData = require('../data/practiceList.json')
const appLink = require('../template/appLink')
const model = require('../model/practice')
const practiceInfo = require('./practiceInfo')

//const testData = require('../data/katexSample')
function changeToDo() {
	let current = m.route.get()
	let targetRoute = current.replace('/prepare', '/do-test')
	m.route.set(targetRoute)
}
const prepareTest = {
	oninit: vnode => {
		//console.log(m.route.param)

	},
	view  : vnode => m('.db.w-100.animated.fadeIn',
		m(practiceInfo),
		m('button.db.center.ma3.pa2.white.bg-blue.f4.br2.b--blue', {
			onclick: e => {
				changeToDo()
			}
		}, "Làm ngay")
	)
};

module.exports = prepareTest
