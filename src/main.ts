import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"
import store from "./store"

import naive from "naive-ui";
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

createApp(App).use(router).use(store).use(naive).mount("#app");
