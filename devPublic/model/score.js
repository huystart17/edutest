/**
 * Created by huy on 6/29/17.
 */
const client = require('./baseClient')
const m = require('mithril')
const model = client.service('api/score')
const userModel = require('./meStudent')
function alertAfterEnd(practice) {
	alert('Cập nhật thành công')
	m.redraw()
	return practice
}
function consoleErr(err) {
	alert("cập nhật thất bại")
	m.redraw()
	console.log(err)
}

const scoreModel = {
	find       : query => client.authenticate()
	                            .then(() => model.find(query)),
	get        : () => client.authenticate()
	                         .then(() => model.get('myScore')),
	sendMyScore: score => userModel.getMyInfo('my-info')
	                               .then((user) => model.patch('my score id', {
		                               $push   : {
			                               scoreList: score
		                               }, $inc : {
			                               total: score.value
		                               },
		                               userId  : user._id,
		                               userName: user.userName
	                               }))
}
module.exports = scoreModel