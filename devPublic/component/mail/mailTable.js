/**
 * Created by huy on 7/8/17.
 */
const m = require('mithril')
const table = require('../../template/table')
const mailView = {
	oninit: vnode => {
	},
	view  : vnode => m('.db',

		m(table, {
			class   : '.db w-100'
			, header: [ 'stt'
				, 'Tiêu đề'
				, 'Môn học'
				, 'Thời gian'
				, 'Trạng thái'
			]
			, body  : [
				[ '1', '' ]
			]
		}))
};

module.exports = mailView