/**
 * Created by huy on 5/22/17.
 */
const m = require('mithril')
const pratice = require('../../component/practice')
const practiceData = require('../../data/practice')
const practicePage = {
    oninit: vnode => {
    },
    view: vnode => m('.db',
        m(pratice,  practiceData))
};

module.exports = practicePage