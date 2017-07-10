/**
 * Created by huy on 5/22/17.
 */
const m = require('mithril')
const stream = require('mithril/stream')

const multiChoice = require('./multiChoice')
const inputLabeled = require('./inputLabeled')
const textareaLabeled = require('./textareaLabeled')
const selectLabeled = require('./selectLabeled')

const multiChoiceEdit = {
        oninit: vnode => {
            //new Question
        },
        view: vnode => m('.db.w-100',
            m('.db.fl.w-50',
                m('.db.f4.b.tc.mb2', "Chỉnh sửa câu hỏi"),
                m(textareaLabeled, {
                    label: "Nội dung",
                    oninput: e => vnode.attrs.text = e.target.value,
                    value: vnode.attrs.text
                }),
                vnode.attrs.answers.map((answer, index) =>
                    m(textareaLabeled,
                        {
                            label: "Đáp án " + (answer.answerId + 1),
                            oninput: e => vnode.attrs.answers[index].text = e.target.value,
                            value: answer.text
                        }
                    )
                ),
                m(selectLabeled, {
                    label: "Đáp án đúng",
                    value: vnode.attrs.corectIndex || 0,
                    onchange: e => vnode.attrs.correctIndex = e.targget.value,
                    optionList: [
                        {text: 'Đáp án 1', value: 0},
                        {text: 'Đáp án 2', value: 1},
                        {text: 'Đáp án 3', value: 2},
                        {text: 'Đáp án 4', value: 3},
                    ]
                }),
                m(textareaLabeled, {
                    label: "Lời giải",
                    oninput: e => vnode.attrs.title = e.target.value,
                    value: vnode.attrs.title
                }),
                m(textareaLabeled, {
                    label: "Ghi chú",
                    oninput: e => vnode.attrs.title = e.target.value,
                    value: vnode.attrs.title
                })
            ),
            m('.db.fl.w-50',
                m('.db.f4.b.tc', "Xem giao diện"),
                m(multiChoice, {
                    text: vnode.attrs.text,
                    index: 0,
                    answers: vnode.attrs.answers,
                    userChoice: stream()
                })
            )
        )
    }
    ;

module.exports = multiChoiceEdit