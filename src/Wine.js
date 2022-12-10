import React, { Component } from "react";
class Wine extends Component {
  render() {
    return (
      <div className="wine">
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <p>{this.props.rating}</p>
      </div>
    );
  }
}
export default Wine;
