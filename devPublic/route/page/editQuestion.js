/**
 * Created by huy on 5/28/17.
 */
const m = require('mithril')
const multiChoiceEdit = require('../../template/multiChoiceEdit')
const model = {
    questionId: 1,
    title: "",
    text: "Tìm chu vi hanh tam giác biết cạnh  a, b, c ",
    answers: [
        {text: "a + b + c", answerId: 0},
        {text: "a * b * c", answerId: 1},
        {text: "a + b - c", answerId: 2},
        {text: "a * b / c", answerId: 3},
    ],
    correctIndex: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: "01212",
    isPublic: true,
    questionGroupId: ""
}
const editQuestion = {
    oninit: vnode => {

    },
    view: vnode => m('.db',
        m(multiChoiceEdit, model))
};

module.exports = editQuestion