const assert = require('assert');
const app = require('../../src/app');

describe('\'mail\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/mail');

    assert.ok(service, 'Registered the service');
  });
});
