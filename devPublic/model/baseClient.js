/**
 * Created by huy on 5/18/17.
 */
const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const hooks = require('feathers-hooks');
 const superagent = require('superagent');
//const fetch = require('node-fetch');

const auth = require('feathers-authentication-client');
// Connect to REST endpoints
const feathersClient = feathers();
feathersClient.configure(hooks())
    .configure(rest().superagent(superagent))
    .configure(auth({storage: localStorage}));
module.exports = feathersClient;
