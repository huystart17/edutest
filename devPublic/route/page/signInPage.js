/**
 * Created by huy on 5/24/17.
 */
const m = require('mithril')
const signIn = require('../../component/signIn')
const signInPage = {
    oninit: vnode => {
    },
    view: vnode => m('.db',
        m(signIn))
};

module.exports = signInPage