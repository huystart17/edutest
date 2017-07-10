/**
 * Created by huy on 5/19/17.
 */
const m = require('mithril');
const icon = require('./icon')
const appLink = require('./appLink')

const notifyBar = {
    oninit: vnode => {
        //something
    },
    view: vnode => m(
        '.db',
        m(appLink, {href: '/profile'}, m(icon, {icon: 'user'})),
        m(appLink, {href: '/notify'}, m(icon, {icon: 'calendar'}))
    )
};

module.exports = notifyBar;