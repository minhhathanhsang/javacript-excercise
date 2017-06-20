function myMap() {
var myCenter = new google.maps.LatLng(10.69654, 106.59523);
var mapProp = {center:myCenter, zoom:12, mapTypeId:google.maps.MapTypeId.ROADMAP};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
var marker = new google.maps.Marker({position:myCenter});
marker.setMap(map);
}
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });

   $("#subscription-form").validate({
            rules: {
                "email-subcription": {
                    required: true,
                    email:true
                }
            },
            messages: {
                "email-subcription": {
                    required: "Email can not be blank",
                    email: "Invalid email format"
                }
            },
            highlight: function(element) {       
               $(element).closest('.input-group').removeClass('has-success').addClass('has-error');              
            },
            unhighlight: function(element) {
               $(element).closest('.input-group').removeClass('has-error').addClass('has-success'); 
            },
            errorElement: 'span',
            errorClass: 'my-custom-error',
            errorPlacement: function(error, element) {
            if(element.length) {
                error.insertAfter(element.closest('.row'));
            } else {
            error.insertAfter(element.closest('.row'));
            }
        } 
    });

    $("#contact-form").validate({
            rules: {
                "name-contact":{
                    required: true,
                },
                "comments-contact":{
                    required: true,
                },
                "email-contact": {
                    required: true,
                    email:true
                }
            },
            messages: {
                "email-subcription": {
                    required: "Email can not be blank",
                    email: "Invalid email format"
                }
            },
            highlight: function(element) {       
               $(element).closest('.form-group').removeClass('has-success').addClass('has-error');              
            },
            unhighlight: function(element) {
               $(element).closest('.form-group').removeClass('has-error').addClass('has-success'); 
            },
            errorElement: 'span',
            errorClass: 'help-block',
            errorPlacement: function(error, element) {
            if(element.length) {
                error.insertAfter(element);
            } else {
            error.insertAfter(element);
            }
        } 
    });

    $('#btn-subcription,#btn-contact').click(function() {
        $(this).closest('form').valid();
    });
})