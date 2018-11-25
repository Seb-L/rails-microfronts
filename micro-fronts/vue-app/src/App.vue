<template>
  <div id="app">
    <h1>VueJs App!</h1>
    <button @click="sayHi">SAY HI TO REACT</button>

    <br>
    <h2>From React</h2>

    <ul>
      <li>Msg: {{ fromReact.msg }}</li>
      <li>Timestamp: {{ fromReact.timestamp }}</li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data () {
    return {
      fromReact: {
        msg: null,
        timestamp: null
      }
    }
  },
  methods: {
    sayHi () {
      console.log('VUEJS: TO REACT')
      window.PubSub.publish('HI_FROM_VUEJS', {
        msg: 'Hi from VueJs',
        timestamp: new Date().getTime()
      })
    }
  },
  created () {
    console.log('VUEJS: SUBSCRIBE')

    window.PubSub.subscribe('HI_FROM_REACT', (topic, data) => {
      console.log('VUEJS: FROM REACT')
      this.fromReact = data
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 300px;
  height: 300px;
  background-color: #efefef;
  float: left;

  ul{
    text-align: left;
  }
}
</style>
