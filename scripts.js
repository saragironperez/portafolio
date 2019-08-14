var senseSpeed = 5;
var previousScroll = 0;

$(window).scroll(function(event){

  var scroller = $(this).scrollTop();
  if (scroller-senseSpeed > previousScroll){
    $("div.extra").filter(':not(:animated)').slideDown();
  } else if (scroller+senseSpeed < previousScroll) {
    $("div.extra").filter(':not(:animated)').slideUp();
  }
  previousScroll = scroller;

  myFunction();

  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

});



var divisor = document.getElementById("divisor"),
    handle = document.getElementById("handle"),
    slider = document.getElementById("slider"),
    advisor = document.getElementById('advisor');

function moveDivisor() {
  handle.style.left = slider.value+"%";
  divisor.style.left = slider.value+"%";
  advisor.style.right = (100 - slider.value)+"%";
}

window.onload = function() {
  moveDivisor();
};



var divisor = document.getElementById("divisor2"),
    handle = document.getElementById("handle"),
    slider = document.getElementById("slider"),
    advisor = document.getElementById('advisor2');

function moveDivisor() {
  handle.style.left = slider.value+"%";
  divisor.style.left = slider.value+"%";
  advisor.style.right = (100 - slider.value)+"%";
}

window.onload = function() {
  moveDivisor();
};


AOS.init({
  duration: 1300,
})


var $carousel = $('.carousel').flickity({
  imagesLoaded: true,
  percentPosition: false,
});

var $imgs = $carousel.find('.carousel-cell img');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';
// get Flickity instance
var flkty = $carousel.data('flickity');

$carousel.on( 'scroll.flickity', function() {
  flkty.slides.forEach( function( slide, i ) {
    var img = $imgs[i];
    var x = ( slide.target + flkty.x ) * -1/8;
    img.style[ transformProp ] = 'translateX(' + x  + 'px)';
  });
});





