import React, { Component } from "react";

class QuizQuestionButton extends Component {
    render() {
        return (
            <li>
                <button>
                    {this.props.buttonText}
                </button>
            </li>
        );
    };
};

export default QuizQuestionButton;