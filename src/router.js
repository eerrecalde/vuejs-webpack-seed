import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Courses from './views/Courses'
import CourseForm from './views/CourseForm'
import About from './views/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/courses', component: Courses },
    { path: '/course/:id', component: CourseForm },
    { path: '/course/', component: CourseForm },
    { path: '/about', component: About },
  ],
})
