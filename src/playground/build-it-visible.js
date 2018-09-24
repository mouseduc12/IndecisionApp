class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      visibility: !this.state.visibility
    });
  }

  render() {
    return (
      <div>
        <h1> Visibility </h1>
        <button onClick={this.handleToggle}>
          {this.state.visibility ? "Show Detail" : "Hide Detail"}
        </button>
        {this.state.visibility && <p>Gotta catch 'em all!</p>}
      </div>
    );
  }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

/*let visibility = false;

const toggle = () => {
  visibility = !visibility;
  render();
};
const render = () => {
  const visible = (
    <div>
      <h1> Visibility </h1>
      <button onClick={toggle}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && (
        <div>
          <p> Hello World again! </p>
        </div>
      )}
    </div>
  );
  const appRoot = document.getElementById("app");
  ReactDOM.render(visible, appRoot);
};
render();
*/
