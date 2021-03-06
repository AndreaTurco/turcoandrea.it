function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = response.result;
    $('#search-container').html('<h3>Total Result: ' + str.pageInfo.totalResults + '</h3>');
    str.items.map(function(value){
      $('#search-container').append('<div style="display :block;"><iframe width="854" height="480" src="https://www.youtube.com/embed/'+value.id.videoId+'" frameborder="0" allowfullscreen></iframe></div>');
    });
  });
}