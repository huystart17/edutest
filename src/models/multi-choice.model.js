'use strict';

// multiChoice-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
    const mongooseClient = app.get('mongooseClient');
    const multiChoice = new mongooseClient.Schema({

        description: {type: String},
        text: {type: String},
        isPublic: {type: Boolean},
        explain: {type: String},

        answers: [mongooseClient.Schema.Types.Mixed],
        correctIndex: [Number],

        authorId: {type: mongooseClient.Schema.Types.ObjectId, required: true, ref: 'users'},
        questionGroupId: {type: mongooseClient.Schema.Types.ObjectId, required: true, ref: 'questionGroup'},

        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now}
    });

    return mongooseClient.model('multiChoice', multiChoice);
};
