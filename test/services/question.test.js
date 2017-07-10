const assert = require('assert');
const app = require('../../src/app');

describe('\'question\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/question');

    assert.ok(service, 'Registered the service');
  });
});
