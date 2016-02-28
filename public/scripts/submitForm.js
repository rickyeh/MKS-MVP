var React = require('react');
// var SearchResults = require('./searchResults.js')

var SubmitForm = React.createClass({

  getInitialState: function() {
    return {
      query: ''
    };
  },

  onChange: function(event) {
    this.setState( {query: event.target.value }, function() {
      console.log('State set! : ', this.state.query);

      this.props.onChangeCallback(this.state.query);
    });

  },

  render: function() {
    return (
      <div>
        <input type="text"
               name="name"
               placeholder="Search"
               value= {this.state.value}
               id="searchContent"
               onChange= { this.onChange } />
        <div className="center googleButton" id="buttonContainer">
          <button className="googleButton">Instapaper Search</button>
        </div>
      </div>
    );
  }
});

module.exports = SubmitForm;