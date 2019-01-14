import React from "react";
import Configurator from "./components/Configurator";
import TimeCounter from './components/TimeCounter';
import TimerControl from './components/TimerControl';

class App extends React.Component {
  state = {
     opts: {
            shortBreak: 3, 
            longBreak: 15,
            pomodoroDuration: 1
        }
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <h2>POMODORO APP</h2>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <Configurator title="Short Break" time={this.state.opts.shortBreak} />
            </div>
            <div className="col-sm-4">
              <Configurator title="Long Break" time={this.state.opts.longBreak} />
            </div>
            <div className="col-sm-4">
              <Configurator title="Pomodoro Duration" time={this.state.opts.pomodoroDuration} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 text-center">
              <TimeCounter minutes={this.state.opts.pomodoroDuration}></TimeCounter>
            </div>
            <div className="col-sm-12">
                <TimerControl></TimerControl>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
