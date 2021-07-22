let container = null

export const bootstrap = async function (){
  console.log("一般应用启动中。。");
}

export const mount = async function(){
  console.log("一般应用挂载中。。");
  container = document.createElement("div")
  container.innerHTML = "这个是没有使用框架的一般应用"
  container.id = "container"
  document.body.appendChild(container)
}
export const unmount = async function(){
  console.log("一般应用卸载中");
  document.body.removeChild(container)
}
