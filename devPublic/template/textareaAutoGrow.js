/**
 * Created by huy on 6/7/17.
 */
const m = require('mithril')

const textareaAutoGrow = {
	oninit: vnode => {
	},
	view  : vnode => m('textarea.w-100.pa1', {
		oninput    : e => {

			vnode.attrs.text(e.target.value)
			e.target.style.height = ''
			e.target.style.height = e.target.scrollHeight + 'px'
		},
		placeholder: vnode.attrs.placeholder,
		disabled   : vnode.attrs.disabled,
		value      : vnode.attrs.text,
		style      : {
			minHeight: '20px'
		},

	})
};

module.exports = textareaAutoGrow
