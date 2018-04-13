import React, { Component } from 'react';
import Answer from '../components/Answer'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
      answer: ''
    }
    this.newId = this.newId.bind(this)
    this.settingAnswer = this.settingAnswer.bind(this)
  }

  newId(id) {
    if (id != this.state.selectedId) {
      this.setState({ selectedId: id })
    } else {
      this.setState({ selectedId: null })
    }
  }

  settingAnswer(selectedAnswer) {
    this.setState({ answer: selectedAnswer})
  }

  render(){
    let question = this.props.data.question.body

    let answers = this.props.data.answers.map(as => {
      let className;
      let result;
      if(as.id === this.state.selectedId) {
        className = 'selected'
      }

      if(as.correct === true) {
        result = 'Correct'
      } else {
        result = 'Incorrect'
      }

      return(
        <Answer
          key={as.id}
          id={as.id}
          answer={as.body}
          quesId={as.question_id}
          result={result}
          setSelectedAnswer={this.newId}
          className={className}
          setSelectedCorrect={this.settingAnswer}
        />
      )
    })

    return(
      <div>
        <h1>{question}</h1>
        <h3>{answers}</h3>
        <h4>{this.state.answer}</h4>
      </div>
    )
  }
}

export default App
