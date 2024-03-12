// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}
  getRandomNumber = () => Math.ceil(Math.random() * 100)
  onIncrement = () => {
    const randomNum = this.getRandomNumber()
    this.setState(prevState => ({
      count: prevState.count + randomNum,
    }))
  }

  render() {
    const {count} = this.state
    const res = count % 2 == 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <h1 className="default">Count {count}</h1>
        <p className="count">Count is {res}</p>
        <button type="button" className="btn" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="text">*Increase by random number between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
