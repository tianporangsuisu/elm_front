import { createApp } from 'vue'
// eslint-disable-next-line no-unused-vars
import ElementPlus, {ElMessage} from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router/index'
import api from "@/axios/api";
import "./css/default.css"

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus)
app.use(router)
app.use(api)
app.mount('#app')

// eslint-disable-next-line no-unused-vars
// router.beforeEach((to,from,next)=>{
//     api.shopList().then(async res=>{
//         if (res.data.state===false){
//             await ElMessage({
//                 message: '请先登录!',
//                 type: 'warning'
//             })
//             if(to.path === '/' || to.path === '/loginPage') {  // 在为空的情况下，我们路由跳转的是'/' 就放行。'/'代表我们登录页
//                 next()
//             }else {
//                 to.path="/loginPage"
//                 next()
//             }
//         }
//         next()
//     })
//     next()
// })