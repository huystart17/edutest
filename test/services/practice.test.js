'use strict';

const assert = require('assert');
const app = require('../../src/app');

describe('\'practice\' service', () => {
  it('registered the service', () => {
    const service = app.service('practice');

    assert.ok(service, 'Registered the service');
  });
});
