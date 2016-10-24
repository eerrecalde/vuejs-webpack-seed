import Vue from 'vue'
import Vuex from 'vuex'
import courseStore from './modules/courses'
import authorStore from './modules/authors'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    courseStore,
    authorStore
  }
})

export default store
