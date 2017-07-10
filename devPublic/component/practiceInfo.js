/**
 * Created by huy on 6/28/17.
 */
const m = require('mithril')
const appLink = require('../template/appLink')
const model = require('../model/practice')
const info = require('./practiceInfoV1')
const practiceInfo = {
	oninit: vnode => {
		vnode.state.practice = {}
		model.get(m.route.param('practiceId'))
		     .then(result => Object.assign(vnode.state.practice, result))
		     .then(() => m.redraw())

	},
	view  : vnode => m('.db',
		m(info, {practice: vnode.state.practice })
	)

};

module.exports = practiceInfo