/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    const match = input.match(/[a-z]/i);
    if (match) {
      input = input.substring(0, match.index);
    }
    
    if (input.length === 0) return 1;
    
    const nums = input.split("/");
    switch (nums.length) {
      case 1:
        return parseFloat(nums[0]);
      
      case 2:
        return parseFloat(nums[0]) / parseFloat(nums[1]);
        
      default:
        return NaN;
    }
  };
  
  this.getUnit = function(input) {
    var result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
