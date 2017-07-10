// Initializes the `mail` service on path `/api/mail`
const createService = require('feathers-mongoose');
const createModel = require('../../models/mail.model');
const hooks = require('./mail.hooks');
const filters = require('./mail.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'mail',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/mail', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/mail');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
