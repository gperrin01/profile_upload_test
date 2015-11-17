$(document).ready(function(){

  $('#form').on('submit', submitForm)

})

var server = 'http://localhost:8088';

function submitForm () {
  event.preventDefault();
  var fd = new FormData($('#form')[0]);
  // fd.append('file', $('#inputFile')[0].files[0]);
  // fd.append('name', $('#inputUsername').val())

  $.ajax({
    type: 'POST', 
    url: server + '/profiles', 
    data: fd,
    processData: false,
    contentType: false
    }).then(function (response) {
      console.log('resp ajax', response);
  })
}

