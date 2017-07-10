/**
 * Created by huy on 5/21/17.
 */
const m = require('mithril')

const logo = {
  oninit: vnode => {
  },
  view: vnode => m('.db',
    m('img', Object.assign({
      src: vnode.attrs.src || '/asset/img/logo.png',
      style: {"max-height": "40px"}
    }, vnode.attrs)),
    vnode.children
  )
};

module.exports = logo
