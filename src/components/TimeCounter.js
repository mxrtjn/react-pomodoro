import React from "react";
import CircularProgressbar from "react-circular-progressbar";

class TimeCounter extends React.Component {
  padNumber = n => (n < 10 ? "0" : "") + n;

  redeableTime = n => {
    const min = parseInt(n / 60);
    const sec = parseInt(n % 60);
    return `${this.padNumber(min)}:${this.padNumber(sec)}`;
  };

  render() {
    return (
      <CircularProgressbar
        percentage={this.props.percentage}
        text={this.redeableTime(this.props.remainingSeconds)}
      />
    );
  }
}

export default TimeCounter;
