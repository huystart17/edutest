/**
 * Created by huy on 5/22/17.
 */
const m = require('mithril')
const stream = require('mithril/stream')
const multiChoice = require('../template/multiChoice')
const practiceHeader = require('../template/practiceHeader')

const setValue = require('../template/util/setValue')


const practiceEdit = {
    oninit: vnode => {
        //set initial value
        setValue.ifNot(vnode.attrs.list, [])
        vnode.attrs.list.forEach(setValue.addIndex)
        vnode.attrs.list.forEach(elem => elem.userChoice = stream())

    },
    getUserAllChoice: vnode => {
        return vnode.attrs.list.map(elem => elem.userChoice())
    },
    view: vnode => m('form.db',

        m(practiceHeader, vnode.attrs),
        vnode.attrs.list.map(question => m(multiChoice, question)),
        m('button[type=button]', {
            onclick: e => console.log(vnode.state.getUserAllChoice(vnode))
        }, 'Hello')
    )
};

module.exports = practiceEdit
