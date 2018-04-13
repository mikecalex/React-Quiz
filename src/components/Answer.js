import React from 'react'

const Answer = (props) => {

  let handleClick = () => {
    props.setSelectedAnswer(props.id)
    props.setSelectedCorrect(props.result)
  }

  return(
    <div className="answer">
      <ul onClick={handleClick} className={props.className}>{props.answer}</ul>
    </div>
  )
}

export default Answer
