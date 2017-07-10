/**
 * Created by huy on 5/16/17.
 */
const m = require('mithril');
const stream = require('mithril/stream')
const answerRadio = require('./answerInputRadio')
const setValue = require('./util/setValue')
const handleInput = (e) => {
}
const multipleChoiceAnswer = {
    oninit: vnode => {
        //set initial
        // streaming userAnswer

        //answer {id,value,name,text}

        vnode.attrs.list.forEach(answer => setValue.setField(answer, {name: "question" + vnode.attrs.questionId}))
        vnode.attrs.list.forEach(answer => setValue.setField(answer, {value: answer.answerId}))
        vnode.attrs.list.forEach(answer => setValue.setField(answer, {onchange: m.withAttr("value", vnode.attrs.userChoice)}))
        vnode.attrs.list.forEach(answer => setValue.setField(answer, {selectedValue: vnode.attrs.userChoice}))

    },
    view: vnode => m(
        '.db', vnode.attrs.list.map(answer => m(answerRadio, answer)
        )
    )
};

module.exports = multipleChoiceAnswer;