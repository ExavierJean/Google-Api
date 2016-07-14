var mb = document.getElementById("r-response");


var post = function() {
  var one = $('#new-one').val();
  var two = $('#new-two').val();
  var three = $('#new-three').val();
  /*
  $('#feed').prepend(tweet)
  */

  var object =  {
    "spreadsheetId": "1kGv4KThsr_i8vF8yWLwXcUvyL7_aDZRqQEpiHcQbrG8", 
    "valueInputOption": "USER_ENTERED",
    "range": "Sheet1!A7",
    "values":[
      [one, two, three]
    ]
  }
    gapi.client.sheets.spreadsheets.values.update(object).then(function(response) {
      console.log(response);
    });

  //$('#new-one').val("");
  //$('#new-two').val("");
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

var inProgress = 'In-Progress'
var fixed = 'Fixed'
$( document ).ready(function(){

  if (mb.val = inProgress.val) {
  $('#r-response').css('background', 'orange')
} else if (mb.val = fixed.val) {
    $('#r-response').css('background', 'green')
  }

});




