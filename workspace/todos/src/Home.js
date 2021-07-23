import React, { useEffect, useState } from 'react'


function useTools() {
  const [tools, setTools] = useState();
  useEffect(() => {
    System.import('@study/tools').then(setTools)
  }, [])
  return tools
}


export const Home = () => {
  const toolsModule = useTools();

  useEffect(() => {
    let subjection = null
    if (toolsModule) {
      toolsModule.sayHello('todos')
      subjection = toolsModule.sharedSubject.subscribe(console.log)
    }
    console.log(subjection);
    return () => subjection && subjection.unsubscribe()
  }, [toolsModule])
  return (
    <div>
      Home
      <button onClick={() => toolsModule.sharedSubject.next('fa fa fa')}>send</button>
    </div>
  )
}
