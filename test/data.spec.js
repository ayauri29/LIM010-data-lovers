global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('example', () => {  
  it('debería ser una función', () => {
    expect(typeof example).toBe('function');
  });

  it('debería retornar "example"', () => {
    expect(typeof example).toBe('string');
    expect(example()).toBe('example');
  });
});

