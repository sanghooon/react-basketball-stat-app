import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      teamName: '',
      username: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {/*
    e.preventDefault();
    const teamRef = firebase.database().ref('teams');
    const team = {
      title: this.state.teamName,
      captain: this.state.username
    }
    teamRef.push(team);
    this.setState({
      teamName: '',
      username: ''
    });*/
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className="container">
            <h1 className="App-title">Basketball Stat App</h1>
          </div>
        </header>
        <div className="container">
          <div className="game-body">
            <section className="add-team">
              <form onSubmit={this.handleSubmit} >
                <input type="text" name="username" placeholder="Your Name" value={this.state.username} onChange={this.handleChange} />
                <input type="text" name="teamName" placeholder="Team Name" value={this.state.teamName} onChange={this.handleChange} />
                <button>Create</button>
              </form>
            </section>
            <section className="display-team">
              <ul>
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
