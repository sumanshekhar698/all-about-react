import React from "react";
import ReactDOM from "react-dom";
import "./css/style.css";
import Heading from "./components/Heading";
import PlacesList from "./components/PlacesList";
// import PlacesList from "./components/Counter";
import Counter from "./components/Counter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
    };

    this.mountController = () => this.setState({ mount: true });
    this.unmountController = () => this.setState({ mount: false });
  }

  render() {
    return (
      <div className="app">
        <Heading />
        <PlacesList />

        <div>
          <div className="mount-buttons">
            <button onClick={this.mountController} disabled={this.state.mount}>
              Mount
            </button>
            <button
              onClick={this.unmountController}
              disabled={!this.state.mount}
            >
              Unmount
            </button>
          </div>

          {this.state.mount ? <Counter /> : null}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
