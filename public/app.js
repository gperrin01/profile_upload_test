$(document).ready(function(){

  $('#form').on('submit', submitForm)

})

var server = 'http://localhost:8088';

function submitForm () {
  event.preventDefault();
  var file = $('#inputFile')[0].files[0];
  var fd = new FormData();
  fd.append('file', $('#inputFile')[0].files[0])

  $.ajax({
    type: 'POST', 
    url: server + '/profiles', 
    data: fd,
    processData: false,
    contentType: 'multipart/form-data'
  }).then(function (response) {
    console.log('resp ajax', response);
  })
}

