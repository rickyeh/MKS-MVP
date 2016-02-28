var React = require('react');
var SubmitForm = require('./submitForm.js')
var CenterContainer = React.createClass({

  render: function() {
    return (
      <div className="center" id="centerContainer">
        <div className="center" id="title">
          <h1 className="center">PhotoReactor</h1>
        </div>
        <SubmitForm onChangeCallback={this.props.queryCallback} />
      </div>
    );
  }
});

module.exports = CenterContainer;