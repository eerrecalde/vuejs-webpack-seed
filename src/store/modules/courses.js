import courseApi from '../../api/mockCourseApi'

export default {
  state: {
    courses: []
  },

  actions: {

    FETCH_COURSES: ({ commit, state }) => {
      if (state.courses.length) {
        return false
      }

      return courseApi.getAllCourses().then((courses) => {
        commit('SET_COURSES', { courses })
      }).catch((error) => {
        throw (error)
      })
    },

    SAVE_COURSE: ({ commit, state }, { course }) => {
      console.log('000', course)
      return commit('SET_COURSE', { course })
    },

  },

  mutations: {
    SET_COURSES: (state, { courses }) => {
      state.courses = courses
      console.log(state)
    },

    SET_COURSE: (state, { course }) => {
      const courses2 = state.courses.map((c) => {
        if (c.id === course.id) {
          c = course
          console.log('FOUND', c)
        }
        return c
      })
      console.log('CC', courses2, course)
      // state.courses = courses
      // console.log(state)
    }
  },

  getters: {
    getCourses: state => state.courses
  }
}
