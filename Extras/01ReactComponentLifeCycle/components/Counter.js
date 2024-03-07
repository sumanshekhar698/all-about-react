import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    console.log("Constructor");
    super(props);
    this.state = { counter: 0 };
    this.increment = () => this.setState({ counter: ++this.state.counter });
    this.decrement = () => this.setState({ counter: --this.state.counter });
    this.reset = () => this.setState({ counter: 0 });
  }

  componentDidMount() {
    console.log("componentDidMount () <<");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate () <<");
  }

  componentWillUnmount() {
    console.log("componentWillUnMount () <<");
  }

  shouldComponentUpdate(nextProps, nextState){
    return true;
  }
  

  render() {
    console.log("Render");
    return (
      <div>
        <div className="counter">
          <h1>
            Counter: <span>{this.state.counter}</span>
          </h1>
        </div>
        <div className="counter-buttons">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}
