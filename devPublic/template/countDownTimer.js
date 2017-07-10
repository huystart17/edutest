/**
 * Created by huy on 5/21/17.
 */
const m = require('mithril')
const util = require('./util/time')
const countDownTimer = {
	oninit  : vnode => {
		//default
		vnode.state.duration = vnode.attrs.duration || 0
		vnode.state.remain = vnode.attrs.duration
		vnode.state.onendTimer = vnode.attrs.onendTimer
		//set interval and and time
		vnode.state.setInterval = setInterval(() => {
			if (vnode.state.remain > 0) {
				vnode.state.remain = vnode.state.remain - 1000
			} else {
				vnode.state.onendTimer ? vnode.state.onendTimer() : ''
				clearInterval(vnode.state.setInterval)
			}
			m.redraw()
		}, 1000)

	},
	onremove: vnode => {
		clearInterval(vnode.state.setInterval)
	},

	view: vnode => m('span', vnode.attrs, util.time.to_minSecond(vnode.state.remain)
	)
};

module.exports = countDownTimer