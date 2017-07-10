/**
 * Created by huy on 6/8/17.
 */
const stream = require('mithril/stream')
class question {
	constructor(q) {
		if (typeof (q) == 'undefined') {
			this.status = stream('')
			this.grade = stream('')
			this.subject = stream('')
			this.group = []
			this.level = stream('')

			this.text = stream('')

			this.questionType = stream(1)
			this.answer = {
				choices: [
					{text: stream(''), isCorrect: stream(false)},
					{text: stream(''), isCorrect: stream(false)},
					{text: stream(''), isCorrect: stream(false)},
					{text: stream(''), isCorrect: stream(false)}
				],
				correctString: [],
				howTo: stream('')
			}
			this.guide = stream('')

			this.author = {}
		} else {
			this._id = q._id
			this.status = stream(q.status)
			this.grade = stream(q.grade)
			this.subject = stream(q.subject)
			this.group = q.group
			this.level = stream(q.level)

			this.text = stream(q.text.toString())

			this.questionType = stream(q.questionType)
			this.answer = {
				choices: q.answer.choices.map(answer => {
					return {text: stream(answer.text), isCorrect: stream(answer.isCorrect)}
				}),
				correctString: q.answer.correctString.map(answer => stream(answer)),
				howTo: stream(q.answer.howTo)
			}
			this.guide = stream(q.guide)

			this.author = {
				_id: "",
				name: "",
			}
		}
	}
}
module.exports = question
