'use strict';

const assert = require('assert');
const app = require('../../src/app');

describe('\'practiceGroup\' service', () => {
  it('registered the service', () => {
    const service = app.service('practice-group');

    assert.ok(service, 'Registered the service');
  });
});
