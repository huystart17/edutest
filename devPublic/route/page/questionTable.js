/**
 * Created by huy on 5/28/17.
 */
const m = require('mithril')
const questionData = require('../../data/questions.json')
const table = require('../../template/questionListTable')
const questionTable = {
    oninit: vnode => {
    },
    view: vnode => m('.db',
        m(table, {list: questionData}))
};

module.exports = questionTable