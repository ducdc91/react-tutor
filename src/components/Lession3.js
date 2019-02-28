import React, { Component } from 'react';

class Lession3 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      	<h1>test</h1>
        {this.props.hasvacancy ? 'Vacancy' : 'No Vacancy'}
      </div>
    );
  }
}

// Set default value of props
Lession3.defaultProps = {
    hasvacancy : true
}

export default Lession3;
