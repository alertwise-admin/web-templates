// offcanvas menu close
$('.nav-link').on( "click", function(){
  $('.close').click(); 
});


// scroll active menu change 
  $('#nav_ul').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 300,
    scrollThreshold: 0.5, 
    filter: '',
    offset: 90,
    easing: 'swing'
  }); 


// dark & light mode
  const togButton = document.getElementById("btnSwitch");
  let currThemeMode = localStorage.getItem("dark") === "true";
// Set initial theme
  setTheme(currThemeMode);
  togButton.addEventListener("click", () => {
    currThemeMode = !currThemeMode;
    setTheme(currThemeMode);
    localStorage.setItem("dark", currThemeMode);
  });
  function setTheme(isDark) {
    if (isDark) {
      document.documentElement.setAttribute("data-furnozia-theme", "dark");
      togButton.innerHTML = `<i class="fa fa-sun"></i>`;
    } else {
      document.documentElement.setAttribute("data-furnozia-theme", "light");
      togButton.innerHTML = `<i class="fa fa-moon"></i>`;
    }
  }

// current year
$(document).ready(function () {
var year = new Date().getFullYear();
$('#currentyear').text(year);
});

// star rating
$(function(){
  $('.star-rating').each(function(){
    let $c = $(this), r = parseFloat($c.data('rating'));
    for(let i=1;i<=5;i++) $c.append('<span class="star">&#9733;</span>');
    $c.find('.star').each(function(i){
      if(i+1 <= r) $(this).addClass('filled');
      else if(i < r) $(this).addClass('half');
    });
  });
});



// testimonial-slider
 document.addEventListener('DOMContentLoaded', function () {
  new Splide('#testimonial-slider', {
    type   : 'loop',
    perPage: 1,
    autoplay: false,
    interval: 2000,
    arrows : false,
    pagination: true, 
    pauseOnHover: false,
    gap: 20,
    breakpoints: {
      768: { // Mobile and small screens
        perPage: 1,
      },
      1024: { // Tablet screens
        perPage: 1,
      },
    } 
  }).mount();
});

// gallery-slider 
 new Splide('#gallery-slider', {
    type      : 'loop',
    perPage: 3,
    autoplay: true,
    interval: 3000,
    arrows : false,
    pagination: false, 
    pauseOnHover: false,
    perMove: 1,
    gap: 20,
    breakpoints: {
      992: {
        perPage: 2,
      },
      576: {
        perPage: 1,
      }
    }
  }).mount();


AOS.init();

//   back to top
  var btn = $('#backtotop');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function scrollToTop(e){
      window.scrollTo(0, 0);
  });
  

// newsletter Form validate  
$("#contactform").validate({
  rules: {
    fname:{
      required: true
    },
    lname:{
      required: true
    },
    email:{
      required: true,
      email: true
    },
    phone:{
      required: true,
      digits: true,
      minlength: 10,
      maxlength: 10
    },
    message:{
      required: true
    }
  },
  messages: {
    fname:{
      required: "Enter Your First Name"
    },
    lname:{
      required: "Enter Your Last Name"
    },
    email:{
      required: "Enter Your Email Address",
      email: "Please Enter Valid Email Address"
    },
    phone:{
      required: "Enter Your Phone Details",
      digits: "Only digits are allowed",
      minlength: "Phone must be exactly 10 digits",
      maxlength: "Phone must be exactly 10 digits"
    },
    message:{
      required: "Enter Your Message"
    }
  },
  errorElement: 'div',
  submitHandler: function (form) {
    // Show Bootstrap alert
    $("#formSuccess")
      .removeClass("d-none")
      .addClass("show");

    // Reset form
    form.reset();
  }
});