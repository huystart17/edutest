/**
 * Created by huy on 5/27/17.
 */
const m = require('mithril')
const inputLabeled = require('./inputLabeled')
const selectLabeled = require ('./selectLabeled')
const sampleData = {
    _id: '',
    level: '',
    topic: '',
    tag: '',
    name: '',
    subject: '',
    grade: ''
}
const questionGroupClass = {
    constructor(questionGroup){
        this._id = ''
        this.level = ''
        this.topic = ''
        this.tag = ''
        this.name = ''
        this.subject = ''
        this.grade = ''
        Object.assign(this, questionGroup)
        return this
    }
}
//for make question group
const questionGroup = {
    oninit: vnode => {
    },
    view: vnode => m('form.db',
        m(inputLabeled, {label: "Tên nhóm câu hỏi"}),
        m(selectLabeled , {})
    )
};

module.exports = questionGroup