import '../styles/index.scss';
import $ from "jquery";
import LazyLoad from 'vanilla-lazyload';
import WOW from 'wow.js';

if (process.env.NODE_ENV === 'development') {
  require('../index.pug');
}

$(function() {
  var lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
  });

  var wow = new WOW({
    boxClass:     'wow',      
    animateClass: 'animate__animated',     
    mobile:       true,       
    live:         true,       
    scrollContainer: null,    
    resetAnimation: true, 
  });

  wow.init();

  $('.tabs__control').on('click', function(){
    $('.tabs__control').removeClass('active');
    $(this).addClass('active');
    $('.tabs__container').hide();
    $($(this).attr('data-target')).show();
  });

  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .on('click', function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 900, function() {
          var $target = $(target);
          $target.triggerHandler( "focus" );
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.triggerHandler( "focus" );
          };
        });
      }
    }
  });

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
  
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight){
        $('.header').removeClass('nav-down').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('.header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
});
