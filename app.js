var
  // Dependencies
  amanda      = require('amanda')
, Benchmark   = require('benchmark')
, basicSchema = require('./schemas/basic')
, basicData   = require('./data/basic')
, advancedSchema = require('./schemas/advanced')
, advancedData   = require('./data/advanced')

  // Vars
, validator = amanda('json')
, suite     = new Benchmark.Suite
;

suite.add('Basic Validation', function(){
  validator.validate(basicData, basicSchema, function(error){
    if (error) console.log(error);
  });
})
suite.add('Advanced Validation', function(){
  validator.validate(advancedData, advancedSchema, function(error){
    if (error) console.log(error);
  });
})
.on('complete', function(){
  console.log(this.filter('successful'));
})
.run();