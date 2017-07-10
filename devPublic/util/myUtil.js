/**
 * Created by huy on 6/20/17.
 */
const m = require('mithril')
const myUtil = {
	getSubjectGrade    : () => {
		return {
			subject: m.route.param('subject'),
			grade  : m.route.param('grade'),
		}
	},
	addedToArray       : (targetArray, elem) => {
		if (targetArray.some(item => item == elem)) {
			return undefined
		} else {
			targetArray.push(elem)
			return elem
		}
	},
	getSubjectGradeText: () => m.route.param('subject') + ' ' + m.route.param('grade')

}
module.exports = myUtil

