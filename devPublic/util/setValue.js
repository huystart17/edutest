/**
 * Created by huy on 5/22/17.
 */
const ifNot = (target, defaultValue, message) => {
	let obj = {target}
	if (!target) {
		for (key in obj) {
			console.warn(message || 'Co ')
		}
	} else {
		target = target || defaultValue
	}
	return target
}
const addIndex = function (target, index) {
	return Object.assign(target, {index: index})
}
const setField = function (target, field) {

	return Object.assign(target, field)
}

module.exports = {
	ifNot: ifNot,
	addIndex: addIndex,
	setField: setField
}