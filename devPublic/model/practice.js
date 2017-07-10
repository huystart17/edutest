/**
 * Created by huy on 5/18/17.
 */
/**
 * Created by huy on 5/18/17.
 */
/**
 * Created by huy on 6/6/17.
 */
const client = require('./baseClient')
const practiceService = client.service('practice')
const m = require('mithril')
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
const practiceModel = {
	data  : {
		data : [],
		total: 0,
		skip : 0,
		limit: 0
	},
	query : {},
	get   : id => client.authenticate()
	                    .then(() => practiceService.get(id))
	                    .then((result) => {
		                    m.redraw()
		                    return result
	                    })
	                    .catch(console.log)
	,
	find  : query => client.authenticate()
	                       .then(() => practiceService.find({query: query}))
	                       .then(listPractice => Object.assign(practiceModel.data, listPractice))
	                       .then(result => {
		                       m.redraw()
		                       return result
	                       })
	                       .catch(consoleErr),
	create: practice => client.authenticate()
	                          .then(() => practiceService.create(practice))
	                          .then(alertAfterEnd)
	                          .catch(consoleErr),
	update: practice => client.authenticate()
	                          .then(() => practiceService.update(practice._id, practice))
	                          .then(alertAfterEnd)
	                          .catch(consoleErr),
	remove: practice => client.authenticate()
	                          .then(() => practiceService.remove(practice._id))
	                          .then(() => practiceModel.data.data = practiceModel.data.data.filter(item => item._id != practice._id))
	                          .then(alertAfterEnd)
	                          .catch(consoleErr)

}

module.exports = practiceModel
