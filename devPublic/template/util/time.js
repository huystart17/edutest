/**
 * Created by huy on 5/21/17.
 */
const get_minSecond = milisecond => {
	let min = parseInt(milisecond / (1000 * 60))
	let second = Math.round(milisecond % (1000 * 60) / 1000)
	return `${min}:${second}`
}
const dif = (startTime, endTime) => {
	let start = new Date(startTime)
	let end = new Date(endTime)
	let byMilisecond = start.getTime() - end.getTime()
	return {byMilisecond: byMilisecond}
}
module.exports = {
	time: {
		to_minSecond: get_minSecond
	}
}