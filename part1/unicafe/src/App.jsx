import { useState } from 'react'

const Button = (props) => (
  <button onClick = {props.handleClick}>
    {props.text}
  </button>
)

const Header = (props) => <h1>{props.text}</h1>

const StatisticLine = (props) => <div>{props.text} {props.number}</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text = 'give feadback here'/>
      <Button handleClick = {() => setGood(good + 1)} text = 'good' />
      <Button handleClick = {() => setNeutral(neutral + 1)} text = 'neutral' />
      <Button handleClick = {() => setBad(bad + 1)} text = 'bad' />
      <Header text = 'statistics' />
      {good === 0 && neutral === 0 && bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <tr>
              <td>good</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>bad</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>all</td>
              <td>{good + neutral + bad}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{(good + neutral + bad)/3}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{(good/(good + neutral + bad))*100}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

export default App