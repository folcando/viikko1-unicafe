import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  return (
    <div>
      <h1>statistics</h1>
    </div>
  )
}

const Button = () => {
  return (
    <div></div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App