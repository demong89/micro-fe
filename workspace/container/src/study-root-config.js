import { registerApplication, start } from "single-spa";
import { constructApplications, constructRoutes } from "single-spa-layout"


// 获取路由配置对象
const routes = constructRoutes(document.querySelector("#single-spa-layout"))
// 获取路由信息数组
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name)
  }
})
// 遍历路由信息注册应用
applications.forEach(registerApplication)
/**
 * 注册微前端应用
 * name: 微前端应用名称  “@组织名称/应用名称”
 * app : 返回Promise ， 通过systemjs引用打包好的微前端应用模块代码（UMD）
 * activeWhen ： 路由匹配时激活应用
 */
// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });
// registerApplication("@single-spa/welcome", () =>
//   System.import(
//     "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//   ),

//   location => location.pathname === '/')

// registerApplication({
//   name: "@study/common",
//   app: () =>
//     System.import(
//       "@study/common"
//     ),
//   activeWhen: ["/common"],
// });
// registerApplication({
//   name: "@study/todos",
//   app: () => System.import("@study/todos"),
//   activeWhen: ["/todos"]
// })

// registerApplication({
//   name: "@study/realworld",
//   app: () => System.import("@study/realworld"),
//   activeWhen: ["/realworld"]
// })
// registerApplication({
//   name: "@study/navbar",
//   app: () => System.import("@study/navbar"),
//   activeWhen: ["/"]
// });

/**
 * start方法必须在single-spa的配置文件中调用
 * 在调用start之前，应用会被加载 但不会初始化 挂载或卸载
 * 
 * urlRerouteOnly 是否可以通过history.pushState()和history.replaceState()更改触发single-spa路由
 * true 不允许 false 允许
 * 
 */

start({
  urlRerouteOnly: true,
});
