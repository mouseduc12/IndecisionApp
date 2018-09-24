class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleRemoveOne = this.handleRemoveOne.bind(this);
    this.reset = this.reset.bind(this);
  }
  componentDidMount() {
    const stringCount = localStorage.getItem("counter");
    const counter = parseInt(stringCount, 10);
    if (!isNaN(counter)) {
      this.setState(() => ({
        counter
      }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      //const json = JSON.stringify(this.state.counter);
      localStorage.setItem("counter", this.state.counter);
    }
  }
  handleAddOne() {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      };
    });
  }

  handleRemoveOne() {
    this.setState(prevState => {
      return {
        counter: prevState.counter - 1
      };
    });
  }

  reset() {
    this.setState({
      counter: 0
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.counter}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleRemoveOne}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
