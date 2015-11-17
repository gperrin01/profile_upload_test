$(document).ready(function(){
  $('#form').on('submit', submitForm)
})

var server = 'http://localhost:8088';

function submitForm () {
  event.preventDefault();
  var fd = new FormData($('#form')[0]);

  // show spinner while we wait for results
  toggleSpinner('on');

  $.ajax({
    type: 'POST', 
    url: server + '/profiles', 
    data: fd,
    processData: false,
    contentType: false
    }).then(function (response) {
      // display success or error message
      toggleSpinner('off')
      var banner = $('h4');
      banner.text(response.text)
      response.status === 'error' ? banner.addClass('bg-danger text-danger') : banner.addClass('bg-success text-success');
  })
}

function toggleSpinner(status) {
  var form = $('#form');
  var wait = $('#wait');
  if (status === 'on') {
    wait.removeClass('hide');
    form.addClass('hide')
  }
  else {
    wait.addClass('hide');
    form.removeClass('hide');
  }
}
