jQuery.validator.addMethod("validate-date-au", function(value, element) { 
	var regex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
	if(!regex.test(value)) return this.optional(element);
	parts = value.match(regex);
	var d = new Date(parts[3], parts[2]-1, parts[1], 23, 59, 59); // months are 0-based
	return this.optional(element) || ( parseInt(RegExp.$2, 10) == (1+d.getMonth()) ) && 
				(parseInt(RegExp.$1, 10) == d.getDate()) && 
				(parseInt(RegExp.$3, 10) == d.getFullYear() );
}, "Por favor, forne&ccedil;a uma data no formato dd/mm/aaaa.");

jQuery.validator.addMethod("validate-currency-br", function(value, element) { 
  return this.optional(element) || /^([1-9]{1}[0-9]{0,2}(\.[0-9]{3})*(\,[0-9]{0,2})?|[1-9]{1}\d*(\,[0-9]{0,2})?|0(\,[0-9]{0,2})?|(\,[0-9]{1,2})?)$/.test(value);
}, "Por favor, forne&ccedil;a um um valor no formato 9.999,99.");

jQuery.validator.addClassRules({
  'validate-zipcode': {
    minlength: 8,
    maxlength: 9
  },
	'validate-number': {
		number: true
	},
	'validate-email': {
		email: true
	},
});