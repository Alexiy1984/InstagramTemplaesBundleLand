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
});
