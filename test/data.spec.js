global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe("data.egg", () => {

  const muestra = [{
    "name": "Machamp",
    "id": "068",
    "egg": "Not in Eggs",
  },{
    "name": "Tentacruel",
    "id": "073",
    "egg": "Not in Eggs",
  },{
    "name": "Doduo",
    "id": "084",
    "egg": "5 Km",
  },{
    "name": "Kabuto",
    "id": "140",
    "egg": "10 Km",
  }]
  
  it("debería ser una función", () => {
    assert.equal(typeof window.filter.egg, "function");
  });

  it("debería retornar Onix al filtrar por 10 Km", () => {
    assert.deepEqual(window.filter.egg(muestra,"10 Km"), [{"name":"Onix","egg": "10 Km"}]);
  });
})


