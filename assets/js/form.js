//conent-us-validation//
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


//activ-link-nav//
const currentlocation = location.href; 
const menuitem = document.querySelectorAll('.navbar-index-nav .nav-link,.nav-pills .nav-linke');
 const menulength = menuitem.length
for (let i = 0; i<menulength; i++){
 if(menuitem[i].href === currentlocation) {
   menuitem[i].className = "active" 
    }
}
///
$(document).ready(function() {
  $('.navber-index .nav-item .nav-link').removeClass('active').removeAttr('aria-current');
  $('a[href="' + location.pathname + '"]').closest('li').addClass('active').attr('aria-current', 'page'); 
});
//activ-link-nav//
$('.owl-carousel').owlCarousel({
  autoplay:false,
autoplayTimeout:5000,
autoplayHoverPause:false,
  loop:true,
  margin:10,
  nav:true,
  rtl:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
  
});
$( ".owl-prev").html('<img src="./assets/img/awwer.png">');
 $( ".owl-next").html('<img src="./assets/img/awwer-r.png">');
 /*** */
 $(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});