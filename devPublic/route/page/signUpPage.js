/**
 * Created by huy on 5/25/17.
 */
const m = require('mithril')
const signUp = require('../../component/signUp')
const signUpPage = {
    oninit: vnode => {
    },
    view: vnode => m('.db',
        m(signUp))
};

module.exports = signUpPage