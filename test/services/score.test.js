const assert = require('assert');
const app = require('../../src/app');

describe('\'score\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/score');

    assert.ok(service, 'Registered the service');
  });
});
