/**
 * Created by huy on 5/15/17.
 */

const m = require('mithril')
//
const signInPage = require('./page/signInPage')
const signUpPage = require('./page/signUpPage')
const praticePage = require('./page/practice')
const questionEditPage = require('./page/editQuestion')
const questionTable = require('./page/questionTable')
const guestLayout = require('../layout/guestLayout')
//
const routes = function () {
	m.route(document.getElementById('app'), '/', {
		'/'             : {view: () => m(guestLayout, m(signInPage))},
		'/sign-in'      : {view: () => m(guestLayout, m(signInPage))},
		'/sign-up'      : {view: () => m(guestLayout, m(signUpPage))},
		'/practice'     : {view: () => m(guestLayout, m(praticePage))},
		'/question/edit': {view: () => m(guestLayout, m(questionEditPage))},
		'/questionList' : {view: () => m(guestLayout, m(questionTable))}
	})
}
module.exports = routes