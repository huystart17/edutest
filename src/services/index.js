'use strict';

const practice = require('./practice/practice.service.js');

const users = require('./users/users.service.js');

const question = require('./question/question.service.js');

const score = require('./score/score.service.js');

const mail = require('./mail/mail.service.js');

const uploads = require('./uploads/uploads.service.js');

module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  //app.configure(multiChoice);
  //app.configure(questionGroup);

  app.configure(practice);
  //app.configure(tag);
  //app.configure(practiceGroup);
  app.configure(users);
  app.configure(question);
  app.configure(score);
  app.configure(mail);
  app.configure(uploads);
};
