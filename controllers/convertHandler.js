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
    const match = input.match(/[a-z]/i);
    if (!match) return "invalid";
    
    input = input.substring(match.index);
    if (['gal', 'l', 'lbs', 'kg', 'mi', 'km'].indexOf(input) + 1) return input;
    return "invalid";
  };
  
  this.getReturnUnit = function(initUnit) {
    switch (initUnit.toLowerCase()) {
      case "gal": return "l";
      case "l": return "gal";
      case "lbs": return "kg";
      case "kg": return "lbs";
      case "mi": return "km";
      case "km": return "mi";
      default: return "invalid";
    }
  };

  this.spellOutUnit = function(unit) {
    switch (unit.toLowerCase()) {
      case "gal": return "gallons";
      case "l": return "liters";
      case "lbs": return "pounds";
      case "kg": return "kilograms";
      case "mi": return "miles";
      case "km": return "kilometers";
      default: return "invalid";
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    switch (initUnit.toLowerCase()) {
      case "gal": return initNum * galToL;
      case "l": return initNum / galToL;
      case "lbs": return initNum * lbsToKg;
      case "kg": return initNum / lbsToKg;
      case "mi": return initNum * miToKm;
      case "km": return initNum / miToKm;
      default: return NaN;
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
