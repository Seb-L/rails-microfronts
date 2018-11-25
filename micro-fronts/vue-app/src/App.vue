<template>
  <div id="app">
    <h1>VueJs App!</h1>
    <button
      v-if="features.vuejs_msg_btn"
      @click="sayHi"
      class="btn btn-primary"
    >
      SAY HI TO REACT
    </button>

    <br><br>

    <h4>From React</h4>

    <ul>
      <li>Msg: {{ fromReact.msg }}</li>
      <li>Timestamp: {{ fromReact.timestamp }}</li>
    </ul>

    <div v-if="features.show_user_infos">
      <h5>Current User</h5>
      <ul>
        <li>Name: {{ config.user.name }}</li>
        <li>Email: {{ config.user.email }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
  computed: mapGetters(['features', 'config']),
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
    console.log(this.features)
    console.log(this.config)

    window.PubSub.subscribe('HI_FROM_REACT', (topic, data) => {
      console.log('VUEJS: FROM REACT')
      this.fromReact = data
    })
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  ul{
    text-align: left;
  }
}
</style>
