import React from "react";
import TimeCounter from "./components/TimeCounter";
import TimerControl from "./components/TimerControl";
import TimerConfigurator from "./components/TimerConfigurator";
import classNames from "classnames";

class App extends React.Component {
  timerHandler = null;
  state = {
    opts: {
      shortBreak: 3,
      longBreak: 15,
      pomodoroDuration: 1
    },
    isPlayed: false,
    totalSeconds: 60,
    remainingSeconds: 60,
    pomodoroCounter: 1,
    isWorkSession: true
  };

  handleChangeTextShortTime = e => {
    this.setState({
      opts: {
        ...this.state.opts,
        shortBreak: e.target.value
      }
    });
  };

  handleChangeTextLongTime = e => {
    this.setState({
      opts: {
        ...this.state.opts,
        longBreak: e.target.value
      }
    });
  };

  handleChangeTextPomodoroTime = e => {
    this.setState({
      opts: {
        ...this.state.opts,
        pomodoroDuration: e.target.value
      }
    });
  };

  startCounter = _ => {
    this.pauseCounter();
    this.setState({ isPlayed: true });
    this.timerHandler = setInterval(_ => {
      this.setState(prevState => {
        return { remainingSeconds: prevState.remainingSeconds - 1 };
      });
      if (this.state.remainingSeconds === 0) {
        this.audioBeep.play();
        if (this.state.isWorkSession) this.startBreakTime();
        else this.startWorkTime();
      }
    }, 500);
  };

  startWorkTime = _ => {
    this.setState(prevState => {
      return {
        remainingSeconds: prevState.opts.pomodoroDuration * 60,
        isWorkSession: true,
        pomodoroCounter: prevState.pomodoroCounter + 1,
        totalSeconds: prevState.opts.pomodoroDuration * 60
      };
    });
  };

  startBreakTime = _ => {
    this.setState(prevState => {
      let breakTime =
        prevState.pomodoroCounter % 4 === 0
          ? prevState.opts.longBreak
          : prevState.opts.shortBreak;
      return {
        remainingSeconds: breakTime * 60,
        isWorkSession: false,
        totalSeconds: breakTime * 60
      };
    });
  };

  pauseCounter = _ => {
    if (this.timerHandler) {
      clearInterval(this.timerHandler);
      this.setState({ isPlayed: false });
    }
  };

  resetCounter = _ => {
    this.pauseCounter();
    this.setState(prevState => {
      return {
        isWorkSession: true,
        pomodoroCounter: 1,
        isPlayed: false,
        remainingSeconds: prevState.opts.pomodoroDuration * 60
      };
    });
  };

  handlePlayClick = _ => {
    if (!this.state.isPlayed) {
      console.log("played");
      this.startCounter();
    }
  };

  handlePauseClick = _ => {
    if (this.state.isPlayed) {
      console.log("paused...");
      this.pauseCounter();
    }
  };

  handleResetClick = _ => {
    console.log("reset...");
    this.resetCounter();
  };

  getSessionName = isWorkSession => {
    return isWorkSession
      ? "Pomodoro # " + this.state.pomodoroCounter
      : this.state.pomodoroCounter % 4 === 0
      ? "LONG BREAK"
      : "BREAK";
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <h2>POMODORO APP</h2>
            </div>
            <div className="navbar-header pull-right">
              <h2>{this.getSessionName(this.state.isWorkSession)}</h2>
            </div>
          </div>
        </nav>
        <div className="container timerPomodoro">
          <TimerConfigurator
            shortBreak={this.state.opts.shortBreak}
            longBreak={this.state.opts.longBreak}
            pomodoroDuration={this.state.opts.pomodoroDuration}
            handleChangeTextShortTime={this.handleChangeTextShortTime}
            handleChangeTextLongTime={this.handleChangeTextLongTime}
            handleChangeTextPomodoroTime={this.handleChangeTextPomodoroTime}
            isDisabled = {this.state.isPlayed}
          />
          <div className="row">
            <div
              className={classNames("col-sm-12", "text-center", {
                breakSession: !this.state.isWorkSession
              })}
            >
              <TimeCounter
                remainingSeconds={this.state.remainingSeconds}
                percentage={
                  (this.state.remainingSeconds / this.state.totalSeconds) *
                  100.0
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <TimerControl
                isPlayed={this.state.isPlayed}
                onPlayClick={this.handlePlayClick}
                onPauseClick={this.handlePauseClick}
                onResetClick={this.handleResetClick}
              />
              <audio
                id="beep"
                preload="auto"
                src="https://goo.gl/65cBl1"
                ref={audio => {
                  this.audioBeep = audio;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
