$(document).ready(function(){

	$('.form-signin').validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			password: {
				minlength: 6,
				required: true
			},
			confirmation: {
				minlength: 6,
				equalTo: '#password'
			}
		},
		success: function(element) {
			element
			.text('OK!').addclass('valid')
		}
	});
});