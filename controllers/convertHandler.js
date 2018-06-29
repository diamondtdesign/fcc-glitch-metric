/*
*
*
*       Complete the handler logic below
*       
*       
*/

const round = function(number, precision = 0) {
  var shift = function(number, precision, reverseShift) {
    if (reverseShift) {
      precision = -precision;
    }

    var numArray = ("" + number).split("e");
    return +(
      numArray[0] +
      "e" +
      (numArray[1] ? +numArray[1] + precision : precision)
    );
  };

  return shift(Math.round(shift(number, precision, false)), precision, true);
};

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
        return parseFloat(nums[0]) == nums[0] ? parseFloat(nums[0]) : NaN;
      
      case 2:
        if (!(parseFloat(nums[0]) == nums[0])) return NaN;
        if (!(parseFloat(nums[1]) == nums[1])) return NaN;
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
      case "gal": return round(initNum * galToL, 5);
      case "l": return round(initNum / galToL, 5);
      case "lbs": return round(initNum * lbsToKg, 5);
      case "kg": return round(initNum / lbsToKg, 5);
      case "mi": return round(initNum * miToKm, 5);
      case "km": return round(initNum / miToKm, 5);
      default: return NaN;
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
