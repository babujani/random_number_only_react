import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  functionRandomNumber = () => {
    this.setState({
      randomNumber: Math.floor(Math.random() * 100),
    })
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="page-bg">
        <div className="counter-card">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.functionRandomNumber}>
            Generate
          </button>
          <h1>{randomNumber}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
