import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js';

let quizData = require('./quiz_data.json');

export default class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = { quiz_position: 1 }
    };

    render() {
        return (
        <div>
            <QuizQuestion  quiz_question={quizData.quiz_questions[this.state.quiz_position-1]}/>
        </div>
        )};
};