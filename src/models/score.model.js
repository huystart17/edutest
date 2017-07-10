// score-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {

	const mongooseClient = app.get('mongooseClient');
	const scoreItem = new mongooseClient.Schema({
		testId  : {type: mongooseClient.Schema.Types.ObjectId, required: true},
		testName: {type: String, required: true},

		subject: {type: String, required: true},
		grade  : {type: String, required: true},
		level  : {type: String, required: true},

		value: {type: Number, required: true},

		updatedAt: {type: Date, default: Date.now}
	})


	const score = new mongooseClient.Schema({

		userId   : {type: mongooseClient.Schema.Types.ObjectId},
		userName : {type: String},
		total    : {type: Number, default: 0},
		scoreList: [ scoreItem ],
		//text     : {type: String, required: true},
		createdAt: {type: Date, default: Date.now},
		updatedAt: {type: Date, default: Date.now}
	});

	return mongooseClient.model('score', score);
};

const score = {
	testName : '',
	subject  : ' ',
	grade    : ' ',
	testId   : '',
	value    : '',
	updatedAt: ''
}