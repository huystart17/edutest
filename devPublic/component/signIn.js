/**
 * Created by huy on 5/22/17.
 */
const client = require('../model/baseClient')
const m = require('mithril')
const stream = require('mithril/stream')


const inputLabeled = require('../template/inputLabeled')
const inputSubmit = require('../template/inputSubmit')
const headLine = require('../template/headLine')
const text = require('../data/text')
const appLink = require('../template/appLink')

const signInData = {
	strategy: 'local',
	email   : stream(""),
	password: stream(""),

}

const signIn = {
	oninit          : vnode => {

	},
	onSuccessedLogin: result => location.href = "/",
	onFailedLogin   : err => alert('Bạn đã nhập sai mật khẩu hoặc tài khoản, xin vui lòng nhập lại'),
	submit          : e => {
		e.preventDefault();
		return client.authenticate(signInData)
	},
	view            : vnode => m('form.db', {
			onsubmit: e => signIn.submit(e)
			                     .then(signIn.onSuccessedLogin)
			                     .catch(err => signIn.onFailedLogin(err, vnode))
		},
		m(headLine, "Đăng nhập"),
		m(inputLabeled, {
			label  : text.email,
			name   : 'email',
			oninput: m.withAttr("value", signInData.email),
			value  : signInData.email()
		}),
		m(inputLabeled, {
			label  : text.password,
			type   : 'password',
			name   : 'password',
			oninput: m.withAttr("value", signInData.password),
			value  : signInData.password()
		}),
		m('.db',
			m(inputSubmit, {value: text.signIn}),
			m(appLink, {href: "/sign-up"}, m(inputSubmit, {value: text.signUp}))
		)
	)
};

module.exports = signIn
