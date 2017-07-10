/**
 * Created by huy on 5/16/17.
 */
const m = require('mithril');
const css = require('./cssByClass/css')
const applink = {
  oninit: vnode => {
    //something
  },
  view: vnode => m(
    `a.link${css.appLink}`, Object.assign({oncreate: m.route.link}, vnode.attrs),
    vnode.children
  )
};

module.exports = applink;
