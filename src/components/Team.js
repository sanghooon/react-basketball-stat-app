import React, { Component } from 'react';

class Team extends Component {
  constructor() {
    super();

  }
  render(props) {
    return(
      <div>
        <h2>Player: {props}</h2>
      </div>
    );
  }
}

export default Team;
