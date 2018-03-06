import React from 'react';
import Day from './Day';

class App extends React.Component {
  render() {
    return (
      <div>
          <Day events={this.props.events}/>
      </div>
    );
  }
};

export default App;
