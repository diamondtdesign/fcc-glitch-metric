/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      if (isNaN(initNum) && initUnit === "invalid") return res.status(422).send("invalid number and unit");
      if (isNaN(initNum)) return res.status(422).send("invalid number");
      if (initUnit === "invalid") return res.status(422).send("invalid unit");
    
      res.json({
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string: toString
      });
    });
    
};
