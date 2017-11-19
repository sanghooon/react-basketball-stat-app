import React, { Component } from 'react';
import firebase from './../firebase.js';

class Team extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      stats: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const teamRef = firebase.database().ref(`teams/${this.props.match.params.id}`);
    teamRef.on('value', (snapshot) => {
      console.log(snapshot.val());
      /*let team = snapshot.val();
      let newState = [];
      for(let player in team) {
        newState.push({
          id: players,
          name: players[player].name,
        });
      }
      this.setState({
        players: newState
      });*/
    });

  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const teamRef = firebase.database().ref(`teams/${this.props.match.params.id}`);
    const player = {
      name: this.state.name,
    }
    teamRef.push(player);
    this.setState({
      name: ''
    });
  }

  render() {
    return(
      <div className="container">
        <h1>Team: </h1>
        <h2>Players: </h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" onChange={this.handleChange} value={this.state.name} />
          <button>Add Player</button>
        </form>
      </div>
    );
  }
}

export default Team;
