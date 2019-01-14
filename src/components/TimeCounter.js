import React from "react";
import CircularProgressbar from "react-circular-progressbar";

class TimeCounter extends React.Component {
  state = {
    totalPomodoro: this.props.minutes * 60, //in sec
    elapsedMinutes: this.props.minutes,
    elapsedSeconds: 0,
    percentage: 100
  };
  timerHandler = null;

  padNumber = n => (n < 10 ? "0" : "") + n;

  startCounter = _ => {
    this.timerHandler = setInterval(_ => {
      if (this.state.elapsedSeconds === 0) {
        this.setState({
            elapsedMinutes: this.state.elapsedMinutes - 1,
            elapsedSeconds: 59
        });
      } else {
        this.setState({
            elapsedSeconds: this.state.elapsedSeconds - 1
        });
      }
      this.setState({
        percentage:
          ((this.state.elapsedMinutes * 60 + this.state.elapsedSeconds) /
            this.state.totalPomodoro) *
          100.0
      });
      if (this.state.elapsedSeconds <= 0 && this.state.elapsedMinutes <= 0)
        clearInterval(this.timerHandler);
    }, 1000);
  };

  pauseCounter = _ => {
      if(this.timerHandler)
        clearInterval(this.timerHandler);
  }

  resetCounter = _ => {
      this.pauseCounter();
      this.setState({
        elapsedMinutes: this.props.minutes,
        elapsedSeconds: 0,
        percentage: 100
      });
  }

  componentDidMount() {
    this.startCounter();
  }

  render() {
    return (
      <CircularProgressbar
        percentage={this.state.percentage}
        text={`${this.padNumber(this.state.elapsedMinutes)}:${this.padNumber(
          this.state.elapsedSeconds
        )}`}
      />
    );
  }
}

export default TimeCounter;
