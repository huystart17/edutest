/**
 * Created by huy on 7/7/17.
 */
const client = require('./baseClient')
const uploadService = client.service('uploads')

const model = {
	create: (data, resolve, reject) => {
		resolve = resolve || function () {
				console.log("Upload success")
			}
		reject = reject || function () {
				console.log("Upload success")
			}

		let reader = new FileReader()
		reader.readAsDataURL(data)
		reader.addEventListener('load', () => {
			uploadService.create({uri: reader.result})
			             .then(data => {
				             resolve()
			             })
			             .catch(() => console.log(reader.result))
		}, reject())

	}
}
module.exports = model