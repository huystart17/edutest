/**
 * Created by huy on 5/27/17.
 */
const m = require('mithril')
const setValue = require('./util/setValue')

const css = require('./cssByClass/css')
//vnode interface
/*
 vnode.attrs  : {optionList,value,labeled}
 * */

const selectLabeled = {
    oninit: vnode => {
        //
        setValue.ifNot(vnode.attrs.optionList, [])
        //
        //vnode.attrs should have  {optionList,value}
    },
    view: vnode =>
        m('label.db' + css.inputLabeled,
            m('span' + css.label, vnode.attrs.label),
            m('select' + css.input, {
                    name: vnode.attrs.name,
                    seletedIndex: vnode.attrs.seletedIndex || 0,
                    value: vnode.attrs.value
                },
                vnode.attrs.optionList.map(option => m('option', {
                    value: option.value
                }, option.text))
            )
        )
};

module.exports = selectLabeled