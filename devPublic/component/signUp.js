/**
 * Created by huy on 5/22/17.
 */
const m = require('mithril')
const stream = require('mithril/stream')
const client = require('../model/baseClient')

const text = require('../data/text')

const inputLabeled = require('../template/inputLabeled')
const inputSubmit = require('../template/inputSubmit')
const appLink = require('../template/appLink')
const headLine = require('../template/headLine')

const signUpData = {
    userName: '',
    email: '',
    password: '',
    cfPassword: '',
    grade: '',
    dateOfBirth: '',
    school: ''
}

const signUp = {
    oninit: vnode => {
    },
    submit: vnode => {
        client.service('users').create(signUpData)
            .then(() => {
                alert('Bạn đã tạo tài khoản thành công')
                m.route.set('sign-in')
            })
            .catch(err => {
                alert('Tạo tài khoản thất bại')
            })
    },
    view: vnode => m('form.db', {
            onsubmit: e => {
                e.preventDefault()
                signUp.submit(vnode)
            }
        },
        m(headLine, "Đăng Ký"),
        m(inputLabeled,
            {
                label: text.userName,
                required: true,
                value: signUpData.userName,
                oninput: e => signUpData.userName = e.target.value
            }),
        m(inputLabeled,
            {
                label: text.email,
                required: true,
                type: 'email',
                value: signUpData.email,
                oninput: e => signUpData.email = e.target.value
            }),
        m(inputLabeled,
            {
                label: text.password,
                required: true,
                type: 'password',
                value: signUpData.password,
                oninput: e => signUpData.password = e.target.value
            }),
        m(inputLabeled,
            {
                label: text.cfPassword,
                required: true,
                type: 'password',
                value: signUpData.cfPassword,
                oninput: e => signUpData.cfPassword = e.target.value
            }),
        m(inputLabeled,
            {
                label: text.grade,
                required: true,
                type: 'number',
                value: signUpData.grade,
                oninput: e => signUpData.grade = e.target.value
            }),
        m('.db.i', "*Cần nhập đúng khối đang học, để có thể xem được đề khối của mình"),
        m(inputLabeled,
            {
                label: text.birth,
                type: 'date',
                required: true,
                value: signUpData.dateOfBirth,
                oninput: e => signUpData.dateOfBirth = e.target.value
            }),
        m(inputLabeled,
            {
              value: signUpData.school,
              label: text.school,
              required: true,
                oninput: e => signUpData.school = e.target.value
            }),
        m(inputSubmit, {value: text.signUp})
    )
};

module.exports = signUp
