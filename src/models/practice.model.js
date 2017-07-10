// practice-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
	const mongooseClient = app.get('mongooseClient');
	const practice = new mongooseClient.Schema({
		// text: {type: String, required: true},
		// _id: {type: String},
		name: {type: String, required: true},

		grade  : {type: String},
		subject: {type: String},
		group  : [ String ],
		level  : {type: String},

		description: {type: String},

		questionList: [ mongooseClient.Schema.Types.ObjectId ],

		author: {type: mongooseClient.Schema.Types.ObjectId},

		scorePerQuestion: {type: Number},
		duration        : {type: Number}, //by minute

		status: {type: String},//


		createdAt: {type: Date, default: Date.now},
		updatedAt: {type: Date, default: Date.now},
	});

	return mongooseClient.model('practice', practice);
};
