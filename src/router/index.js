import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home';
import about from '@/components/about';
import user from '@/components/user';
import phone from '@/components/phone';
import tablet from '@/components/tablet';
import computer from '@/components/computer';

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
          path:'phone',
          name:'phone',
          component: phone
        },
        {
          path:'tablet',
          name:'tablet',
          component: tablet
        },
        {
          path:'computer',
          name:'computer',
          component: computer
        },
        // 当进入到home时，下面的组件显示
        {
          path: "",
          component: phone
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/',
      redirect: '/home' 
    },
    {
      path: '/user/:id',
      name: 'user',
      component: user
    }
  ]
})
