/**
 * Created by huy on 5/22/17.
 */
const m = require('mithril')
const msg = {
    err: "Có lỗi",
    done: "Ok"
}
/*status : 0 => not active
 * status : 1 => error
 * staus : 2 => done
 */
const tooltip = {
    oninit: vnode => {
    },
    view: vnode => m('span',
        Object.assign({
            status: 0,
            err: msg.err,
            done: msg.done
        }, vnode.attrs), vnode.attrs.status == 0 ?
            ""
            : vnode.attrs.status > 0
            ? m('span.red', vnode.attrs.err)
            : m('span.green', vnode.attrs.done)
    )
};

module.exports = tooltip