'use strict';

const assert = require('assert');
const app = require('../../src/app');

describe('\'multiChoice\' service', () => {
  it('registered the service', () => {
    const service = app.service('multi-choice');

    assert.ok(service, 'Registered the service');
  });
});
