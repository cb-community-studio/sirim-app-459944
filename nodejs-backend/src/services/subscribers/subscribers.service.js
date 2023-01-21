const { Subscribers } = require('./subscribers.class');
const createModel = require('../../models/subscribers.model');
const hooks = require('./subscribers.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/subscribers', new Subscribers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('subscribers');

  service.hooks(hooks);
};