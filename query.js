var post = function() {
  
  var one = $('#new-one').val()

  var two = $('#new-two').val()

  //var three = $('#new-three').val()

  /*var tweet = "<div class='tweet-box'><img class='profile-image' src=" + data.picture + "><div class='tweet-container'><p class='profile-name'>" + data.name + "</p><p class='profile-handle'>" + data.handle + "</p><p class='date-time'>" + data.time + "<p class='text-box'>" + fname + " " + data.text + " " + gname + "</p></div>"

  $('#feed').prepend(tweet)*/

  $.ajax({
    'url': 'https://sheets.googleapis.com/v4/spreadsheets/1kGv4KThsr_i8vF8yWLwXcUvyL7_aDZRqQEpiHcQbrG8/values/Sheet1!?valueInputOption=RAW',
    'range': "Sheet1!A8:B8",
    'majorDimension': "ROWS",
    'values': [
      ['one', 'two']
    ],
    'type': 'PUT',
    /*crossDomain: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },*/
    error: function(error) { console.log(error); post()},
    sucess: function(data) {cosole.log('success'), post()},
});

  $('#new-one').val("")

  $('#new-two').val("")

  //$('#new-three').val("")

};
  
$(document).on("keypress", /*"#new-one" "#new-two", "#new-three",*/ function(e) {
  if (e.which == 13) {
    post()
  }
});

$('#button1').click(function() {
  post()
});

$('#button2').click(function() {

  $('#feed').children().last().remove()

  if ($('#feed').children().length == 0) {
    $('.b-box').css('width', '534px')
    $('#button2').addClass('hidden')
  }
});
