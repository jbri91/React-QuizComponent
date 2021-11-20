import React, { Component } from "react";

class QuizQuestionButton extends Component {
  render() {
    function handleClick(props) {
      this.props.clickHandler(props.button_text);
    }

    return (
      <li>
        <button onClick={this.handleClick.bind(this)}>
          {this.props.button_text}
        </button>
      </li>
    );
  }
}

export default QuizQuestionButton;
