/**
 * Created by huy on 5/15/17.
 */

const m = require('mithril')
const praticePage = require('./page/practice')
const notFound = require('./page/notFound')
const profile = require('./page/profile')

const questionTable = require('./page/questionTable')
const prepareTest = require('./page/prepareTest')
const doTest = require('./page/doTest')
const leaderBoard = require('./page/leaderBoard')
const myMail = require('./page/myMail')
//
const home = require('./page/home')
//
const set_layout = require('../layout/layout')
const routes = function () {
	m.route(document.getElementById('app'), '/', {
		'/'                                   : set_layout(home),
		'/home'                               : set_layout(home),
		'/profile'                            : set_layout(profile),
		'/subject'                            : set_layout(),
		'/leaderBoard'                        : set_layout(leaderBoard),
		'/practice/:practiceId'               : set_layout(),
		'/practice'                           : {view: () => m(praticePage)},
		'/practice/:practiceId/action/prepare': set_layout(prepareTest),
		'/practice/:practiceId/action/do-test': {view: vnode => m(doTest)},
		'/my-mail'                            : set_layout(myMail, {action: 'default'}),
		'/my-mail/new'                        : set_layout(myMail, {action: 'new'}),
		'/my-mail/solved'                     : set_layout(myMail, {action: 'solved'}),
		'/my-mail/wait'                       : set_layout(myMail, {action: 'wait'}),
		'/my-mail/cancel'                     : set_layout(myMail, {action: 'cancel'}),
		'/:notfound'                          : set_layout(notFound)
	})

}
module.exports = routes

