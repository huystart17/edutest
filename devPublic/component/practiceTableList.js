/**
 * Created by huy on 6/2/17.
 */
const m = require('mithril')
const tableHeader = require('../template/tableHeader')
const tableRow = require('../template/tableRow')
const appLink = require('../template/appLink')
const practiceData = require('../data/practiceList.json')
const practiceTableList = {
	oninit: vnode => {
		console.log(vnode.attrs)
	},
	view  : vnode => m('table.w-100.ba.',
		m(tableHeader, {list: vnode.attrs.header}),
		vnode.attrs.list.map(row => m(tableRow, {
			list: [
				row.subject
				, row.name
				, m.trust(row.level + '&#9733;')
				, row.questionList.length
				, m(appLink, {
					class: 'black',
					href : '/practice/' + row._id + '/action/prepare',
					title: row.title
				}, 'Làm ngay')
			]
		}))
	)

};

module.exports = practiceTableList
