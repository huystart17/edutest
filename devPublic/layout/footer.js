/**
 * Created by huy on 5/19/17.
 */
const m = require('mithril')
const contactData = require('../data/contact.json')
const logo = require('../template/logo')
const footer = {
  oninit: vnode => {
  },
  view: vnode => m('.db.overflow-auto.bt.mt3.pa2', vnode.attrs,
    m('.db.w-40-ns.w-50.fl', m(logo, {}), "Trách nhiệm - Tận tâm - Hiệu quả"),
    m('.db.w-30-ns.w-50.fl',
      m('.db', 'Thông tin liên hệ: '),
      m('.db', contactData.address),
      m('.db', "Hotline: "),
      m('.db', contactData.phone)
    ),
    m('.db.w-30-ns.fl.w-100', '')
  )
}
module.exports = footer
