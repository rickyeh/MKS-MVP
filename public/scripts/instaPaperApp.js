var React = require('react');
var CenterContainer = require('./centerContainer.js');
var SearchResults = require('./searchResults.js')

var InstaPaperApp = React.createClass({

  getInitialState: function() {

    return {
      queriedPhotos: []
    };

  },

  getQuery: function(query) {
    console.log('getQuery Called : ' , query);

    if (query.length > 2) {
      this.searchPhotos(query);  
    }
  },

  searchPhotos: function(searchString) {
    var that = this;

    $.ajax({
      type: 'POST',
      url: '/',
      data: searchString,
      success: function(data) {
        console.log('Successful POST with data : ', data);
        that.setState( {queriedPhotos: data } );
      },
      dataType: 'json'
    });
  },

  render: function() {
    return (
      <div>
        <CenterContainer queryCallback={this.getQuery} />
        <div className="center" id="trendingWrapper">
          <ul className="trendingList">
            <li className="trendingLink">#mountain</li>
            <li className="trendingLink">#islands</li>
            <li className="trendingLink">#forest</li>
            <li className="trendingLink">#flowers</li>
            <li className="trendingLink">#kittens</li>
          </ul> 
        </div>
        <SearchResults returnedData={this.state.queriedPhotos}/>
      </div>
    );
  }
});

module.exports = InstaPaperApp;
