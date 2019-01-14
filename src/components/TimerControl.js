import React from "react";

class TimerControl extends React.Component {
  render() {
    return (
      <div
        className="btn-toolbar"
        style={{ display: "flex", justifyContent: "center" }}
        role="toolbar"
        aria-label="..."
      >
        <div className="btn-group">
          <button type="button" className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-play" aria-hidden="true" />{" "}
            Star
          </button>
          <button type="button" className="btn btn-default btn-lg disabled">
            <span className="glyphicon glyphicon-pause" aria-hidden="true" />{" "}
            Pause
          </button>
          <button type="button" className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-refresh" aria-hidden="true" />{" "}
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default TimerControl;
