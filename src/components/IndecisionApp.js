import React from "react";
import Action from "./Action";
import AddOption from "./AddOption";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

//ran into error because there is no babel loader

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  handleDeleteSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };
  handleDeleteOptions = () => {
    this.setState({
      options: []
    });
  };
  handlePick = () => {
    const pickOption = Math.round(Math.random() * this.state.options.length);
    const appPick = this.state.options[pickOption];
    this.setState(() => ({
      selectedOption: appPick
    }));
  };
  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };
  handleAddOption = option => {
    if (!option) {
      return "Enter a valid String";
    } else if (this.state.options.indexOf(option) > -1) {
      return "It already exists";
    } else {
      this.setState(prevState => ({
        options: prevState.options.concat(option)
      }));
    }
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      //console.log("fetching data");
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      //Do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      //console.log("saving data");
    }
  }
  render() {
    const title = "Indecision App";
    const subtitle = "Put your life in hands of computer";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePickOption={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleDeleteSelectedOption={this.handleDeleteSelectedOption}
        />
      </div>
    );
  }
}
