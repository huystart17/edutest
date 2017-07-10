/**
 * Created by huy on 5/22/17.
 */
const m = require('mithril')
const stream = require('mithril/stream')
const multiChoiceHeader = require('./multiChoiceHeader')
const multiChoiceAnswers = require('./multipleChoiceAnswers')

const setValue = require('./util/setValue')
//answer :{text ,id}
const multiChoice = {
    oninit: vnode => {
        // console.log(vnode)
    },
    view: vnode => m('.db.pa2.ma2',
        m(multiChoiceHeader, {text: vnode.attrs.text, index: vnode.attrs.index}),
        m(multiChoiceAnswers, {
            list: vnode.attrs.answers,
            userChoice: vnode.attrs.userChoice,
            questionId: vnode.attrs.questionId
        }))
};

module.exports = multiChoice