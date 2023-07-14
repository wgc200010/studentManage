/**
 * @功能描述: 组件引入
 * @author: 王国超
 * @date: 2023-07-10 14:15:00
 * @version: 1.0.0
 */
import Vue from "vue";
import App from "./App.vue";
import "element-ui/lib/theme-chalk/index.css";
import "@/style/css/root.css";
import "@/style/css/aside.css";
import "@/style/css/header.css";
import "@/style/css/main.css";
import "@/style/css/searchStudent.css"
import "@/style/css/element-ui-reset.css"
import {Button, Container, Header, Aside, Main, Radio,Row,Col,Menu,Submenu,MenuItem,MenuItemGroup,Table,TableColumn,
    Form,FormItem,RadioGroup,RadioButton,Input,Popover, MessageBox,Message,Select,Option} from "element-ui";
// 第一步: 引入router 插件
import VueRouter from 'vue-router'
import router from './router'
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$ELEMENT = {size: "small", zIndex: 3000};
Vue.prototype.$msgbox = MessageBox;
// 使用插件
Vue.use(VueRouter)
Vue.use(Select)
Vue.use(Option)
Vue.use(Popover)
Vue.use(Input)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(TableColumn)
Vue.use(Table)
Vue.use(Row)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Menu)
Vue.use(Col)
Vue.use(Button);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Radio);
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router
}).$mount("#app");
