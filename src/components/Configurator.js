import React from "react";

class Configuratior extends React.Component {
  render() {
    const { title, isDisabled, time, onChangeText } = this.props;
    return (
      <div>
        <h5>
          <b>{title}</b>
        </h5>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">
            <span className="glyphicon glyphicon-time" aria-hidden="true" />
          </span>
          <input
            type="number"
            min="1"
            max="60"
            step="1"
            disabled={isDisabled}
            className="form-control"
            value={time}
            placeholder="Duration"
            onChange={onChangeText}
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    );
  }
}

export default Configuratior;
