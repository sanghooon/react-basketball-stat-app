import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <section className="wrapper">
          <div className="container">
            <div className="game-body">
              <div className="game-score row">
                <div className="col-sm-6 team1">
                  <h3>Team1</h3>
                  <h4>12</h4>
                </div>
                <div className="col-sm-6 team2">
                  <h3>Team2</h3>
                  <h4>18</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 team1-stats">
                  <div>John Smith</div>
                  <div>
                    <h4>PTS</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>RBS</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>AST</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>TO</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>STL</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                </div>
                <div className="col-sm-6 team2-stats">
                  <div>Adam Smith</div>
                  <div>
                    <h4>PTS</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>RBS</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>AST</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>TO</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>STL</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 team1-stats">
                  <div>John Smith</div>
                  <div>
                    <h4>PTS</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>RBS</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>AST</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>TO</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>STL</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                </div>
                <div className="col-sm-6 team2-stats">
                  <div>Adam Smith</div>
                  <div>
                    <h4>PTS</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>RBS</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>AST</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>TO</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>STL</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 team1-stats">
                  <div>John Smith</div>
                  <div>
                    <h4>PTS</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>RBS</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>AST</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>TO</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>STL</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                </div>
                <div className="col-sm-6 team2-stats">
                  <div>Adam Smith</div>
                  <div>
                    <h4>PTS</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>RBS</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>AST</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>TO</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>STL</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 team1-stats">
                  <div>John Smith</div>
                  <div>
                    <h4>PTS</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>RBS</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>AST</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>TO</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>STL</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                </div>
                <div className="col-sm-6 team2-stats">
                  <div>Adam Smith</div>
                  <div>
                    <h4>PTS</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>RBS</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>AST</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>TO</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>STL</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 team1-stats">
                  <div>John Smith</div>
                  <div>
                    <h4>PTS</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>RBS</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>AST</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>TO</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>STL</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                </div>
                <div className="col-sm-6 team2-stats">
                  <div>Adam Smith</div>
                  <div>
                    <h4>PTS</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>RBS</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>AST</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>TO</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                  <div>
                    <h4>STL</h4>
                    <button>+</button>
                    <h4>0</h4>
                    <button>-</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
