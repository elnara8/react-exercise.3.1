import React, { Component } from "react";
import Wine from "./Wine";
class Main extends Component {
  render() {
    return (
      <div className="products">
        <Wine title="A Sparkling Wine" description="France" rating="3.6" />
      </div>
    );
  }
}
export default Main;
