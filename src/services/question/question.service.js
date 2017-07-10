// Initializes the `question` service on path `/api/question`
const createService = require('feathers-mongoose');
const createModel = require('../../models/question.model');
const hooks = require('./question.hooks');
const filters = require('./question.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'question',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/question', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/question');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
