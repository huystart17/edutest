// Initializes the `score` service on path `/api/score`
const createService = require('feathers-mongoose');
const createModel = require('../../models/score.model');
const hooks = require('./score.hooks');
const filters = require('./score.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'score',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/score', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/score');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
