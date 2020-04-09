import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd.js';

let quizData = require('./quiz_data.json');

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = { quiz_position: 1 }
    };

    render() {
        const isQuizEnd = quizData.quiz_questions.length;
        return (
        <div>
            if (isQuizEnd == -1)
            <QuizEnd />
            <QuizQuestion  quiz_question={quizData.quiz_questions[this.state.quiz_position-1]}/>
        </div>
        )};
};
export default Quiz;