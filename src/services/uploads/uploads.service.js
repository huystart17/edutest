// Initializes the `uploads` service on path `/uploads`
const hooks = require('./uploads.hooks');
const filters = require('./uploads.filters');

const fs = require('fs-blob-store')
const blobService = require('feathers-blob')
const blogStorage = fs(__dirname + '/uploads')
module.exports = function () {
	const app = this;
	const paginate = app.get('paginate');

	const options = {
		name: 'uploads',
		paginate
	};

	// Initialize our service with any options it requires
	app.use('/uploads', blobService({Model: blogStorage}));

	// Get our initialized service so that we can register hooks and filters
	const service = app.service('uploads');

	service.hooks(hooks);

	if (service.filter) {
		service.filter(filters);
	}
};
