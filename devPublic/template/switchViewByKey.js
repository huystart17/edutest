/**
 * Created by huy on 6/18/17.
 */
const m = require('mithril')
const setValue = require('../util/setValue')
const shouldHasAttr = require('../util/validate').hasAttribute
//questionType
const switchComponentByKey = {
	oninit: vnode => {
		setValue.ifNot(vnode.attrs.components, [], 'Cần phải có [{component , value}] để kiểm tra ')
		shouldHasAttr(vnode.attrs, 'components')
		shouldHasAttr(vnode.attrs, 'key')
		shouldHasAttr(vnode.attrs, 'defaultKey')
		shouldHasAttr(vnode.attrs, 'componentAttrs')
	},
	matchComponent: vnode => {
		let key = vnode.attrs.key || vnode.attrs.defaultKey
		if (typeof (key) != 'undefined') {
			let matchedItem = vnode.attrs.components.find(item => {
				return item.key == key
			})
			let selectedComponent = matchedItem ? matchedItem.component : null
			return setValue.ifNot(
				selectedComponent,
				{view: vnode => m('.db', 'Không tìm thấy component được gán với giá trị đã định trước')},
				"Không tìm thấy component được gán với giá trị đã định trước"
			)
		}
	},
	view: vnode => m(
		'.db',
		m(vnode.state.matchComponent(vnode), vnode.attrs.componentAttrs)
	),
}
module.exports = switchComponentByKey