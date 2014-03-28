// MODAL PLUGIN
(function($) {
  // basic modal
  var modalConent = '<div id="modal"></div><div id="modal-holder"><div id="modal-close">X</div><div id="modal-content-holder"></div></div>';
  
  // content to add to modal
  var conentToAdd = $('#modal-content').clone();
  $('#modal-content').remove();

  // centers modal
  $.fn.center =  function() {
    var windowWidth = $(window).width()/2; // screen width
    var videoWidth  = $(this).outerWidth()/2; // video width
    var finalWidth  = windowWidth-videoWidth; // subtract to get the center

    $('#modal-holder').css({
      'left':finalWidth
    });
  };

  //remove modal
  $.fn.removeModal = function() {
    $('#modal, #modal-holder').fadeOut(300, function() {
      $('#modal, #modal-holder').remove();
    });
  };

  // add modal to body
  $.fn.modal = function() {
    $('body').append(modalConent);
    $('#modal-content-holder').append(conentToAdd);
    $('#modal-holder').center();
  };

  // removes modal
  $('body').on('click', '#modal, #modal-close', function() {
    $(this).removeModal();
  });

  // launch modal
  $('.launchModal').on('click', function(e) {
    $(this).modal();
    e.preventDefault();
  });

  // esc key removes modal
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $(this).removeModal();
    };
    e.preventDefault();
  });

  $(window).resize(function() {
    $('#modal-holder').center();
  });
}(jQuery));
