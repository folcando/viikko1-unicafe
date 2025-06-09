import { useState } from 'react'

const StatisticsLine = ({text, value}) => {
  return <div>{text} {value}</div>
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad

  if (total === 0) {
    return <p>No feedback given</p>
  }

  return (
    <div>
      <h2>Statistics</h2>
      <StatisticsLine text='good' value={good}/>
      <StatisticsLine text='neutral' value={neutral} />
      <StatisticsLine text='bad' value={bad} />
      <StatisticsLine text='all' value={total} />
      <StatisticsLine text='average' value={(good - bad) / total} />
      <StatisticsLine text='positive' value={((good / total)*100)+'%'} />
    </div>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {     //demonstration
    setGood(good + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={addGood} text='good'/>
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button onClick={() => setBad(bad + 1)} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App