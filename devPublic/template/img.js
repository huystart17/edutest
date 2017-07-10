/**
 * Created by huy on 5/20/17.
 */
const m = require('mithril');

const img = {
    oninit: vnode => {
        //something
    },
    view: vnode => m(
        'img', Object.assign({}, vnode.attrs)
    )
};

module.exports = img;