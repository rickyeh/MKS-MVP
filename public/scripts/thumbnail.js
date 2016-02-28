var React = require('react');

var Thumbnail = React.createClass({


  handleClick: function() {
    console.log(this.props.url);
  },

  render: function() {
    var completeURL = this.props.url + '_q.jpg';

    return (
      <div onClick={this.handleClick} className="thumbnail">
        <img className="" src={completeURL} />
      </div>
    );
  }

});

module.exports = Thumbnail;
