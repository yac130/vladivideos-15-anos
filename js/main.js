function set_body_height() { // set body height = window height
  $('body').height($(window).height());
}

// video portada
  var player;
  var obj = $("#vladivideo");
  var pos = obj.position();
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('vladivideo', {
        events: {
            'onStateChange': onPlayerStateChange,
            'onReady': onPlayerReady
          }
      });
    }
    if(window.opera){
      addEventListener('load', onYouTubeIframeAPIReady, false);
  }

// fin video portada
  function onPlayerStateChange(event) {        
    if(event.data === 0) {            
      $('#vladivideo').fadeOut('slow');
      $('.overlay').fadeIn('slow');
    }
  }

// scroll video portada
  function onPlayerReady(event) {
    $(document).on('scroll', function() {
      var scrollTop = $(window).scrollTop();
        if (scrollTop > pos.top + 500) {
            player.stopVideo();
        }
    })
  }

$(document).ready(function() {

  $(window).bind('resize', set_body_height);
  set_body_height();  

  // play video
  $('.icon-play').click(function() {
    $('#vladivideo').fadeIn('slow');
    $('.overlay').fadeOut('slow');
  });

  // foto portada diario

  $('#mas-1').click(function(e) {
    e.preventDefault();
    $.swipebox( [
      { href:'/especiales/vladivideos-15-anos/img/portada-3.jpg'},
      { href:'/especiales/vladivideos-15-anos/img/portada-2.jpg'}
      
    ]);
  });

  $('#mas-2').click(function(e) {
    e.preventDefault();
    $.swipebox( [
      { href:'/especiales/vladivideos-15-anos/img/portada-1.jpg'}      
    ]);
  });

});



