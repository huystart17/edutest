/**
 * Created by huy on 6/27/17.
 */
/**
 * Created by huy on 6/6/17.
 */
const client = require('./baseClient')
const m = require('mithril')
const questionService = client.service('/api/question')
function alertAfterEnd(question) {
	alert('Cập nhật thành công')
	return question
}
function consoleErr(err) {
	alert("cập nhật thất bại")
	console.log(err)
}
const questionModel = {
	data  : {
		data : [],
		total: 0,
		skip : 0,
		limit: 0
	},
	query : {},
	get   : id => client.authenticate()
	                    .then(() => questionService.get(id))
	                    .catch(console.log)
	,
	find  : query => client.authenticate()
	                       .then(() => questionService.find({query: query}))
	                       .then(listQuestion => Object.assign(questionModel.data, listQuestion))
	                       .then(result => {
		                       m.redraw()
		                       return result
	                       })
	                       .catch(consoleErr),
	create: question => client.authenticate()
	                          .then(() => questionService.create(question))
	                          .then(alertAfterEnd)
	                          .catch(consoleErr),
	update: question => client.authenticate()
	                          .then(() => questionService.update(question._id, question))
	                          .then(alertAfterEnd)
	                          .catch(consoleErr),
	remove: question => client.authenticate()
	                          .then(() => questionService.remove(question._id))
	                          .then(alertAfterEnd)
	                          .catch(consoleErr)

}


module.exports = questionModel
