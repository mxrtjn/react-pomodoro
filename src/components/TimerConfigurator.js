import React from "react";
import Configurator from "./Configurator";

class TimeConfigurator extends React.Component {
  render() {
    const {
      shortBreak,
      longBreak,
      pomodoroDuration,
      handleChangeTextShortTime,
      handleChangeTextLongTime,
      handleChangeTextPomodoroTime,
      isDisabled
    } = this.props;
    return (
      <div className="row">
        <div className="col-sm-4">
          <Configurator
            title="Short Break"
            time={shortBreak}
            onChangeText={handleChangeTextShortTime}
            isDisabled={isDisabled}
          />
        </div>
        <div className="col-sm-4">
          <Configurator
            title="Long Break"
            time={longBreak}
            onChangeText={handleChangeTextLongTime}
            isDisabled={isDisabled}
          />
        </div>
        <div className="col-sm-4">
          <Configurator
            title="Pomodoro Duration"
            time={pomodoroDuration}
            onChangeText={handleChangeTextPomodoroTime}
            isDisabled={isDisabled}
          />
        </div>
      </div>
    );
  }
}

export default TimeConfigurator;
