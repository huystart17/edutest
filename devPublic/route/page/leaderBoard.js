/**
 * Created by huy on 6/29/17.
 */
const m = require('mithril')
const scoreModel = require('../../model/score')
const tableHeader = require('../../template/tableHeader')
const tableRow = require('../../template/tableRow')
const leaderBoard = {
	oninit: vnode => {

		vnode.state.allScore = []
		scoreModel.find({$select: 'userId total'})
		          .then(result => vnode.state.allScore = result.data)
		          .then(m.redraw)
	},
	view  : vnode => m('.db'
		, m('.db.f4.tc.ma3.b', 'Bảng xếp hạng')
		, m('table.w-100'
			, m(tableHeader, {list: [ 'Học sính', 'Điểm số', 'Danh hiệu' ]})
			, vnode.state.allScore.map((row, index) => m(tableRow, {list: [ row.userName, row.total, 'Top ' + (index + 1) ]})))
		// ,
	)
};

module.exports = leaderBoard