'use strict';

// Initializes the `practice` service on path `/practice`
const createService = require('feathers-mongoose');
const createModel = require('../../models/practice.model');
const hooks = require('./practice.hooks');
const filters = require('./practice.filters');

module.exports = function () {
	const app = this;
	const Model = createModel(app);
	const paginate = app.get('paginate');

	const options = {
		name: 'practice',
		Model,
		paginate
	};

	// Initialize our service with any options it requires
	app.use('practice', createService(options));

	// Get our initialized service so that we can register hooks and filters
	const service = app.service('practice');

	service.hooks(hooks);

	if (service.filter) {
		service.filter(filters);
	}
};
