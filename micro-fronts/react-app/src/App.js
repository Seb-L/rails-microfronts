import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      msg: null,
      timestamp: null,
      features: window.gon.features
        .reduce((featuresObj, feature) => {
          featuresObj[feature.id] = feature.activated
          return featuresObj
        }, {}),
      config: window.gon.config
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
    let button
    let userInfos

    if (this.state.features.react_msg_btn) {
      button = <button onClick={this.talkToVuejs} className="btn btn-primary">SAY HI TO VUEJS</button>
    }

    if (this.state.features.show_user_infos) {
      userInfos = (
        <div>
          <h5>Current User</h5>
          <ul>
            <li>Name: { this.state.config.user.name }</li>
            <li>Email: { this.state.config.user.email }</li>
          </ul>
        </div>
      )
    }

    return (
      <div className="App">
        <h1>React App</h1>

        {button}

        <br/><br/>

        <h4>From VueJs</h4>
        <ul>
          <li>Msg: { this.state.msg }</li>
          <li>Timestamp: { this.state.timestamp }</li>
        </ul>

        {userInfos}
      </div>
    );
  }
}

export default App;
