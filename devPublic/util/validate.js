/**
 * Created by huy on 6/15/17.
 */
//Dung voi stream only
const valid = {
	moreThan: (value, target) => {
		return target > value
	},
	setValueToIf: (value, target, condition) => {
		if (valid[ condition ](value, target)) {
			return target(value)
		} else {
			throw `${value} should ${condition} ${target}`
		}
	},
	hasAttribute: (target, attributeName, msg) => {
		let hasAttr = false
		for (key in target) {
			if (key == attributeName) {
				hasAttr = true
				break
			}
		}
		if (!hasAttr) {
			console.warn(msg || 'should has attrs : ' + attributeName)
		}
		return hasAttr
	}
}

module.exports = valid