/**
 * Created by huy on 5/20/17.
 */
//components
const m = require('mithril');
const welcomeText = require('../../template/welcomeText')
const studySchedule = require('../../component/studySchedule')
const practiceList = require('../../component/practiceList')
const practiceTableList = require('../../component/practiceTableList')
//data
const scheduleData = {
	headers: require('../../data/scheduleHeader.json'),
	data   : require('../../data/scheduleData.json')
}


const praticeModel = require('../../model/practice')

const user = {
	userName: ""
}
const userModel = require('../../model/meStudent')
//view
const home = {
	oninit: vnode => {
		//something
		userModel
			.getMyInfo()
			.then(
				() => praticeModel.find({grade: userModel.data.grade}))


	},
	view  : vnode => m(
		'.db.w-100',
		m(welcomeText, userModel.data),
		// m('hr'),
		// m(studySchedule, scheduleData),
		// m('hr'),
		m('.db.f4.pa2.tc', 'Đề thi đang diễn ra'),
		m(practiceList, {list: praticeModel.data.data}),
		m('.db.f4.pa2.tc.b', 'Bài thi gần đây'),
		m('.db.center.ma1.pa1',
			m(practiceTableList, {
				header: [ 'Môn', 'Tên bài kiểm tra', 'Độ khó', 'Số câu hỏi', 'Vào thi' ],
				list  : praticeModel.data.data
			})))
};

module.exports = home;
