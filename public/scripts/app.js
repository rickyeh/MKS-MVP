
var Test = React.createClass({

  render: function() {
    return (
      <div className="comment">
        How are you doing?
      </div>
    );
  }
});

ReactDOM.render(
  <Test/>,
  document.getElementById('content')
);

$(document).ready(function(){
  $("#submitForm").submit(function(e) {
    e.preventDefault();
    console.log($('#searchContent').val());

    var searchString = $('#searchContent').val();

    $.ajax({
      type: 'POST',
      url: '/',
      data: searchString,
      success: function(data) {
        console.log('Successful POST with data : ', data);
      },
      dataType: 'json'
    });

  });


});