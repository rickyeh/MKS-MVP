
// var Test = React.createClass({

//   render: function() {
//     return (
//       <div className="comment">
//         How are you doing?
//       </div>
//     );
//   }
// });

// ReactDOM.render(
//   <Test/>,
//   document.getElementById('content')
// );

function postServer(searchString) {
  $.ajax({
    type: 'POST',
    url: '/',
    data: searchString,
    success: function(data) {
      console.log('Successful POST with data : ', data);
      renderImages(data);
    },
    dataType: 'json'
  });
}

function renderImages(arrayOfImages) {
  $('#searchResults').html('');

  for (var i = 0; i < arrayOfImages.length; i++) {
    // Appending each thumbnail image with links to full image suffixes h and q are for image size
    $('#searchResults')
      .append('<a href="' + arrayOfImages[i] + '_h.jpg"><div class="thumbnail"><img src=' + arrayOfImages[i] + '_q.jpg></div></a>');
  }
}

$(document).ready(function(){
  $('#submitForm').submit(function(e) {
    e.preventDefault();
    console.log($('#searchContent').val());

    var searchString = $('#searchContent').val();
    postServer(searchString);
  });

  $('.trendingLink').click(function() {
    var searchString = $(this).text().slice(1);
    postServer(searchString);
  });

});