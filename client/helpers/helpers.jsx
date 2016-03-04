Date.prototype.yyyymmdd = function(symbol) {
	var yyyy = this.getFullYear().toString();
	var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
	var dd  = this.getDate().toString();

	return yyyy + symbol + (mm[1]?mm:"0"+mm[0]) + symbol + (dd[1]?dd:"0"+dd[0]); // padding
};

jQuery.validator.addMethod("lettersonly", function(value, element) {
  return this.optional(element) || /^[a-z ]+$/i.test(value);
}, "Letters only please");