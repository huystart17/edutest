'use strict';

// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
    const mongooseClient = app.get('mongooseClient');
    const users = new mongooseClient.Schema({

        userName: {type:String, required: true},
        fullName: {type:String},

        dateOfBirth :{type:String},
        grade : {type:String},

        telephone : {},
        email: {type: String, unique: true},
        password: {type: String},


        googleId: {type: String},

        facebookId: {type: String},

        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now}
    });

    return mongooseClient.model('users', users);
};