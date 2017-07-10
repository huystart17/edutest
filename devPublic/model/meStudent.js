/**
 * Created by huy on 5/18/17.
 */
const client = require('./baseClient')
const studentModel = {
	data     : {},
	getMyInfo: () => client
		.authenticate()
		.then(() => client.service('users').get('my-info'))
		.then(result => Object.assign(studentModel.data, result))
		.catch((err) => {
			alert("Có lỗi phát sinh")
		})
}
module.exports = studentModel;