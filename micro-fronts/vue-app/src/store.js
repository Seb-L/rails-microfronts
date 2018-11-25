import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    features: window.gon.features
      .reduce((featuresObj, feature) => {
        featuresObj[feature.id] = feature.activated
        return featuresObj
      }, {})
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    features: state => state.features
  }
})
