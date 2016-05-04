import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
  render () {
    return (
      <div>
        <h1>Bolt</h1> 
        <p>Quickly start react apps.</p> 
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
