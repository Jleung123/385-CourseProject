$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 4
                },
                subject: {
                    required: true,
                    minlength: 8
                },
                number: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
				address: {
                    required: true,
                    minlength: 20
                }
				zip: {
                    required: true,
                    minlength: 11
                }
				country: {
                    required: true,
                    minlength: 30
                }
            },
            messages: {
                name: {
                    required: "Your name is requried?",
                    minlength: "your name must consist of at least 4 characters"
                },
                subject: {
                    required: "Please enter a subject so we can properly assist you?",
                    minlength: "your subject must consist of at least 8 characters"
                },
                number: {
                    required: "Your phone number is required",
                    minlength: "your number must consist of at least 10 characters"
                },
                email: {
                    required: "Your email is requried for us to reach back to you"
                },
                message: {
                    required: "Please tell us what the problem is so we can properly assist you",
                    minlength: "Please enter in detail what the problem is, so we a properly assist you"
                }
				address: {
                    required: "We need your address to know where to ship your laptop"
                    minlength: "Plese enter a address so we know where to ship to"
                }
				zip: {
                    required: "We need you city to locate your building"
                    minlength: "We requried a zip to locate your building"
                }
				country: {
                    required: "We ship internationally so we need the country you are in"
                    minlength: "We need the country to know where to ship to"
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})