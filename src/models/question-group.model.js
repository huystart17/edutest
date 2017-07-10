'use strict';

// questionGroup-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
    const mongooseClient = app.get('mongooseClient');
    const questionGroup = new mongooseClient.Schema({
        text: {type: String},
        level: {type: String, required: true},
        subject: {type:String, required:true},
        topic: {type:String, required:true},
        tag: {type:String},
        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now}
    });

    return mongooseClient.model('questionGroup', questionGroup);
};
