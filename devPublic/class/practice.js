/**
 * Created by huy on 6/9/17.
 */
const stream = require('mithril/stream')
class practiceClass {
	constructor(practice) {
		if (practice) {
			this._id = practice._id
			this.name = stream(practice.name)
			//
			this.grade = stream(practice.grade)
			this.subject = stream(practice.subject)
			this.group = practice.group
			this.level = stream(practice.level)
			//
			this.text = stream(practice.text)
			this.description = stream(practice.description)
			//
			this.questionList = practice.questionList
			//
			this.author = practice.author
			this.scoreEfficient = stream(practice.scoreEfficient)
			this.duration = stream(practice.duration)
			this.status = stream(practice.status)
		} else {
			this.name = stream("")
			//
			this.grade = stream('')
			this.subject = stream('')
			this.group = []
			this.level = stream(0)
			//
			// this.text = stream('')
			this.description = stream('')
			//
			this.questionList = []
			//
			this.scoreEfficient = stream(1)
			this.duration = stream(0)
			this.status = stream(0)
		}
	}

}
module.exports = practiceClass
