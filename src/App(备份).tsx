import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router'
import { useAppSelector, useAppDispatch, shallowEqualApp } from './store'
import { changeMessageAction } from './store/modules/counter'

function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqualApp
  )

  const dispatch = useAppDispatch();
  function handleChangeMessage(){
    dispatch(changeMessageAction('hhhhhhh'));
  }

  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <h2>{count}</h2>
      <h2>{message}</h2>
      <button onClick={handleChangeMessage}>点击修改Message</button>
      <Suspense fallback="">{useRoutes(routes)}</Suspense>
    </div>
  )
}

export default App
