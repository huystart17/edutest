/**
 * Created by huy on 7/7/17.
 */
const m = require('mithril')
const uploadModel = require('../../model/restUpload')

const mailTable = require('../../component/mail/mailTable')
const switchViewByKey = require('../../template/switchViewByKey')
const mailControl = require('../../component/mail/mailControl')
const wait = require('../../component/mail/wait')
const solved = require('../../component/mail/solved')
const cancel = require('../../component/mail/cancel')
const msgBox = require('../../component/mail/msgBox/msgBox')
const myMail = {
	oninit: vnode => {
		vnode.attrs.action = vnode.attrs.action || 'default'
	},
	view  : vnode => m('.db'
		, m('.db.pa1.ma2'
			, m(mailControl))
		, m(switchViewByKey, {
			components      : [
				{component: mailTable, key: 'default'}
				, {component: mailTable, key: 'view'}
				, {component: solved, key: 'solved'}
				, {component: wait, key: 'wait'}
				, {component: cancel, key: 'cancel'}
				, {component: msgBox, key: 'new'}
			]
			, key           : vnode.attrs.action
			, defaultKey    : 'default'
			, componentAttrs: {}
		})
	)
};

module.exports = myMail
/*
 * Hòm thư thì bao gồm :
 * Các thư gần đây
 *
 *  Thắc mắc của học sinh
 *  Thắc mắc được giải quyết hay chưa
 *
 * Gửi thắc mắc bao gồm
 *
 * Form gồm  2 phần  , 1 là gửi ảnh , 2 là điền nội dung
 *
 * */