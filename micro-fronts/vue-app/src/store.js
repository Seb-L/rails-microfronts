import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    features: window.gon.features
      .reduce((featuresObj, feature) => {
        featuresObj[feature.id] = feature.activated
        return featuresObj
      }, {}),
    config: window.gon.config
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    features: state => state.features,
    config: state => state.config
  }
})
