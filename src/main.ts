//用来创建应用实例方法
//@ts-ignore
import { createApp } from 'vue'
import '@/style/reset.scss'
//引入根组件
import App from '@/App.vue'
//引入全局组件
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'
//引入vue-router核心插件并安装
import router from '@/router/index';
//引入element-plus插件
//@ts-ignore
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//国际化文件
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//将应用实例挂载到挂在点上
const app = createApp(App)
app.component('HospitalTop',HospitalTop);
app.component('HospitalBottom',HospitalBottom);
app.use(router)
//安装elementplus
app.use(ElementPlus,{
  locale: zhCn
})
app.mount('#app')