/**
 * Created by huy on 7/8/17.
 */
const m = require('mithril')
//Phục vụ riêng cho gửi thắc mắc
//Cần ít nhất 3 phương thức
const textAreaAutoGrow = require('../../../template/textareaAutoGrow')
const stream = require('mithril/stream')
const msgBox = {
	oninit: vnode => {
		vnode.state.inputMsg = stream('')
		vnode.state.subject = stream('')
		vnode.state.title = stream('')
		vnode.state.inputFile = stream()

		//
		vnode.state.filePreview = stream('')
		vnode.state.readFile = vnode.state.inputFile.map(value => {
			let reader = new FileReader()
			reader.readAsDataURL(value)
			reader.addEventListener('load', () => {
				vnode.state.filePreview(reader.result)
				m.redraw()
			})
		})
		//
		//
		vnode.state.formData = {
			title  : vnode.state.title,
			subject: vnode.state.subject,
			file   : vnode.state.inputFile,
			msg    : vnode.state.inputMsg
		}
		vnode.state.send = (e, vnode) => {
			e.preventDefault()
			console.log(vnode.state.formData)
		}
		vnode.state.onload = false
	},
	view  : vnode =>
		m('form.pa'
			, {
				onsubmit: e => {
					vnode.state.send(e, vnode)
				}
			}
			, m('h3.tc', "Gửi thắc mắc")
			, m('label.db.overflow-auto.pa2'
				, m('span.dib.label', "Tiêu đề: ")
				, m('input[type=text]'
					, {oninput: m.withAttr('value', vnode.state.title)}))
			, m('label.db.overflow-auto.pa2'
				, m('span.dib.label', "Môn học: ")
				, m('select'
					, {onchange: m.withAttr('value', vnode.state.subject)}
					, [
						{text: 'Toán', value: 'toán'}
						, {text: 'Văn', value: 'văn'}
						, {text: 'Toán', value: 'anh'}
					]
						.map(item => m('option', {value: item.value}, item.text))))
			, m('label.db.overflow-auto.pa2'
				, m('span.dib.label', "Ảnh phần bài tập")
				, m('input[type=file][accept=image/*]', {
					onchange: e => {
						vnode.state.inputFile(e.target.files[ 0 ])

					},
					disabled: vnode.state.onload
				})
				, m('img.db.cb', {src: vnode.state.filePreview()})
			)

			, m('hr')
			, m('label.db.overflow-auto.pa2'
				, m('div.w-90.fl.db'
					, m(textAreaAutoGrow, {
						disabled   : vnode.state.onload,
						placeholder: 'Tin nhắn của bạn',
						text       : vnode.state.inputMsg
					}))
				, m('div.w-10.fl'
					, m('input[type=submit][value=Gửi].db.w-100'))
			)
		)
}
module.exports = msgBox