'use strict';

const assert = require('assert');
const app = require('../../src/app');

describe('\'questionGroup\' service', () => {
  it('registered the service', () => {
    const service = app.service('question-group');

    assert.ok(service, 'Registered the service');
  });
});
