/**
 * Created by huy on 6/5/17.
 */
const m = require('mithril')
const prepareTest = require('../../component/prepareTest')
const prepareTestPage = {
  oninit: vnode => {
  },
  view: vnode => m('.db',
    m(prepareTest)
  )
};

module.exports = prepareTestPage
