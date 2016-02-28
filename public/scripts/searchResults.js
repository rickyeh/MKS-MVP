var React = require('react');
var Thumbnail = require('./thumbnail.js');

var SearchResults = React.createClass({

  getInitialState: function() {

    return {
      arrayOfImages: this.props.returnedData
    };

  },

  render: function() {
    var that = this;

    console.log(this.props.returnedData);

    var imageNodes = this.props.returnedData.map(function(imageURL) {
      return (
        <Thumbnail url={imageURL} />
        );
    });

    return (
      <div id="searchResults">
        {imageNodes}
      </div>
    );
  }
});

module.exports = SearchResults;