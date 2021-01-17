!(function($) {
	"use strict";
  
	// Preloader
	$(window).on('load', function() {
	  if ($('#preloader').length) {
		$('#preloader').delay(100).fadeOut('slow', function() {
		  $(this).remove();
		});
	  }
	});
  
  })(jQuery);
 
 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: false
 });

$(document).ready(function() {
   $('#reg_form').bootstrapValidator({
       fields: {
           name: {
               validators: {
                       stringLength: {
                       min: 2,
                   },
                       notEmpty: {
                       message: 'Nama tidak boleh kosong'
                   }
               }
           },
          
           phone: {
               validators: {
                   notEmpty: {
                       message: 'Nomor telepon tidak boleh kosong'
                   },
                   regexp: {
                            regexp: /^\+62(\d{3,4}-?){2}\d{3,4}$/g,
                       message: 'Format telepon anda tidak sesuai'
                   }
               }
           },
   comment: {
               validators: {
                     stringLength: {
                       min: 10,
                       max: 200,
                       message:'Masukkan minimal 10 huruf dan maximal 200 huruf'
                   }
                   }
                },	
  email: {
               validators: {
                   notEmpty: {
                       message: 'Email tidak boleh kosong'
                   },
                   emailAddress: {
                       message: 'Format email anda tidak sesuai'
                   }
               }
           },

    password: {
                validators: {
                    notEmpty: {
                        message: 'Password tidak boleh kosong'
                    },
                    identical: {
                        field: 'confirmPassword',
                        message: 'Isikan konfirmasi password sama dengan password'
                    }
                }
            },
    confirmPassword: {
                validators: {
                    notEmpty: {
                        message: 'Konfirmasi Password tidak boleh kosong'
                    },
                    identical: {
                        field: 'password',
                        message: 'Konfirmasi password tidak sama dengan password'
                    }
                }
            },
         
     
           
           }
       })
   
  
       .on('success.form.bv', function(e) {
           $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
               $('#reg_form').data('bootstrapValidator').resetForm();

           // Prevent form submission
           e.preventDefault();

           // Get the form instance
           var $form = $(e.target);

           // Get the BootstrapValidator instance
           var bv = $form.data('bootstrapValidator');

           window.location.href = "dashboard/tagihan.html";
       });
});