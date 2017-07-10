/**
 * Created by huy on 6/28/17.
 */
class score {
	constructor(testInfo, value) {
		this.testId = testInfo._id
		this.testName = testInfo.name
		this.subject = testInfo.subject
		this.grade = testInfo.grade
		this.level = testInfo.level
		this.value = value
	}
}
module.exports = score
