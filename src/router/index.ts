import { createRouter,createWebHistory } from 'vue-router'
//createRouter方法，用于创建路由器实例，可以管理多个路由
export default createRouter({
  //路由模式设置
  history:createWebHistory(),
  routes: [
    {
      path:'/home',
      component: () => import('@/pages/home/index.vue')
    },
    {
      path:'/hospital',
      component: () => import('@/pages/hospital/index.vue')
    },
    {
      path: '/',
      redirect:'/home'
    }
  ],
  //滚动行为
  scrollBehavior(){
    return {
      left: 0,
      top: 0,
    }
  }
})
