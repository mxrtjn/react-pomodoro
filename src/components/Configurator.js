import React from "react";

class Configuratior extends React.Component {

    state = {
        time: this.props.time
    };

  onChangeTaskText = e => {
    this.setState({ time: isNaN(e.target.value) ? 3 : parseInt(e.target.value,10) });
    //this.setState({ time: isNaN(e.target.value) ? 3 : parseInt(e.target.value,10) });
  };

  render() {
    return (
      <div>
        <h5>
          <b>{this.props.title}</b>
        </h5>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">
            <span className="glyphicon glyphicon-time" aria-hidden="true" />
          </span>
          <input
            type="text"
            className="form-control"
            value={this.state.time}
            placeholder="Duration"
            onChange={this.onChangeTaskText}
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    );
  }
}

export default Configuratior;
