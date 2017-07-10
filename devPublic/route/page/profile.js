/**
 * Created by huy on 6/5/17.
 */
const m = require('mithril')
const myscore = require('../../component/myScore')
const scoreModel = require('../../model/score')
const userModel = require('../../model/meStudent')
const stream = require('mithril/stream')
const tableHeader = require('../../template/tableHeader')
const tableRow = require('../../template/tableRow')
const profile = {
	oninit: vnode => {
		vnode.state.userResult = {}
		vnode.state.scoreList = stream([])
		vnode.state.loaded = false
		scoreModel.get()
		          .then(result => Object.assign(vnode.state.userResult, result))
		          .then(result => {
			          vnode.state.scoreList(result.scoreList)
		          })
		          .then(() => userModel.getMyInfo())
		          .then(() => vnode.state.loaded = true)
		          .then(m.redraw)
	},
	view  : vnode => m('.db.overflow-auto',
		vnode.state.loaded
			? [
			m('.db.w-50-ns.w-100.fl'
				, m('.db.f4.tc.ma2.b', 'Thông tin cá nhân')
				, m('table.w-100.pa2'
					, m(tableHeader, {list: [ 'Thông tin ', 'Chi tiết' ]})
					, [
						[ 'Tên', userModel.data.userName ]
						, [ 'Số câu trả lời đúng', vnode.state.userResult.total ]
						, [ 'Số bài kiểm tra', vnode.state.scoreList().length ]
						, [ 'Đã làm', vnode.state.scoreList().filter(item => item.subject == "toán").length + ' Đề toán' ]
						, [ 'Đã làm', vnode.state.scoreList().filter(item => item.subject == "văn").length + ' Đề văn' ]
						, [ 'Đang học ', 'Lớp ' + userModel.data.grade ]
						, [ 'Ngày sinh', userModel.data.dateOfBirth ]
					].map(item => m(tableRow, {list: item})))
			),
			m('.db.w-50-ns.w-100.fl'
				, m('.db.f4.tc.ma2.b', 'Các bài kiểm tra gần đây')
				, m(myscore, {score: vnode.state.scoreList().reverse().slice(0, 10)})
			)

		]
			: m('.db.tc.ma2.f4', "Hãy làm một bài kiểm tra để cập nhật hồ sơ học tập")
	)
};

module.exports = profile
