$(document).ready(function(){

  $('#form').on('submit', submitForm)

})

var server = 'http://localhost:8088';

function submitForm () {
  event.preventDefault();
  var fd = new FormData($('#form')[0]);

  $.ajax({
    type: 'POST', 
    url: server + '/profiles', 
    data: fd,
    processData: false,
    contentType: false
    }).then(function (response) {
      console.log('resp ajax', response);
      // if error, display error
      // otherwise display thanks and say email has been sent
  })
}

