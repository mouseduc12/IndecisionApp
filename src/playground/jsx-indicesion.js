console.log("APP.js");

const app = {
  title: "TodoList",
  subTitle: "Every piece of work will accummulate mutual amount",
  options: ["one", " two"]
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderCounterApp();
  }
};

const removeAll = () => {
  app.options = [];
  renderCounterApp();
};

const makeDecision = () => {
  const randomNumber = Math.round(Math.random() * app.options.length);
  const option = app.options[randomNumber];
  console.log(option);
};

const renderCounterApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p> {app.options.length} </p>
      <button disabled={app.options.length === 0} onClick={makeDecision}>
        {" "}
        What Should I Do?{" "}
      </button>
      <button onClick={removeAll}>Remove all</button>
      <ol>
        {app.options.map(item => {
          return <li key={item}> {item} </li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );

  const appRoot = document.getElementById("app");
  ReactDOM.render(template, appRoot);
};
renderCounterApp();
