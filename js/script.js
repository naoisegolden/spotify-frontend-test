/* Author: Naoise Golden Santos (naoise.golden@gmail.com)
*/

// Behaviour for register button and form
$('#register-button').click( function (event) {
	event.preventDefault();
	$(this).fadeOut('slow', function () {
		$($(this).attr('href')).fadeIn('slow');	
	});
});

// fallback for html5 form attr autofocus
if (!("autofocus" in document.createElement("input"))) {
  $("input[name=email]").focus();
}

// validate form
$('#register-form').validate({
	rules: {
		email: 		{ required:true, email:true },
		password: 	{ required: true, minlength: 5 }, 
        c_password: { required: true, equalTo: "#password", minlength: 5 }
	},
	messages: {
		email: "Not valid",
		password: "",
		c_password: "Not the same"
	}
});

// password strength
$('#password').passStrength({
	userid:	'#email'
});




