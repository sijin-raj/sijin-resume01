var animateHTML = function() {
  var elems,
      windowHeight

  var init = function() {
    elems = document.getElementsByClassName("animate-fadeup");
    slideleftelements = document.getElementsByClassName("animate-slide-left");
    frame1pageColor = document.getElementById("frame1");
    windowHeight = window.innerHeight;
    _addEventHandlers();
  }

  var _addEventHandlers = function() {
      window.addEventListener("scroll", _checkPosition);
      window.addEventListener("resize", init)
  }
  var _checkPosition = function() {
    for ( var i = 0; i < elems.length; i++ ) {
      var posFromTop = elems[i].getBoundingClientRect().top;
      if ( posFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace( "animate-fadeup", "fade-up" );
      }
    }
    for ( var j = 0; j < slideleftelements.length; j++ ) {
      var posFromTop = slideleftelements[j].getBoundingClientRect().top;
      if ( posFromTop - windowHeight <= 0) {
        slideleftelements[j].className = slideleftelements[j].className.replace( "animate-slide-left", "slide-left" );
      }
    }
  }

  return {
    init: init
  }
}

animateHTML().init();

mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
