/**
 * Created by huy on 6/28/17.
 */
const m = require('mithril')
const tableHeader = require('../template/tableHeader')
const tableRow = require('../template/tableRow')
const myScore = {
	oninit: vnode => {
		vnode.state.score = vnode.attrs.score || []
		console.log(vnode.attrs.score)
	},
	view  : vnode => m('table.w-100'
		, m(tableHeader, {
			list: [
				'Bài kiểm tra', 'Môn học', 'Độ khó', 'Số điểm'
			]
		})
		, vnode.state.score.map(item => m(tableRow, {
			list: [
				item.testName,
				item.subject + ' ' + item.grade,
				m.trust(item.level + '&#9733;'),
				item.value
			]
		}))
	)
};

module.exports = myScore