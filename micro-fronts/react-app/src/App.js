import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      msg: null,
      timestamp: null
    }
  }

  componentDidMount () {
    console.log('REACT: SUBSCRIBE')

    window.PubSub.subscribe('HI_FROM_VUEJS', (topic, data) => {
      console.log('REACT: FROM VUEJS')
      this.setState((state, props) => {
        return {
          msg: data.msg,
          timestamp: data.timestamp
        }
      })
    })
  }

  talkToVuejs () {
    console.log('REACT: TO VUEJS')

    window.PubSub.publish('HI_FROM_REACT', {
      msg: 'Hi from React',
      timestamp: new Date().getTime()
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <button onClick={this.talkToVuejs}>SAY HI TO VUEJS</button>

        <h2>From VueJs</h2>
        <ul>
          <li>Msg: { this.state.msg }</li>
          <li>Timestamp: { this.state.timestamp }</li>
        </ul>
      </div>
    );
  }
}

export default App;
