import React, { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './compontents/app-header'
import AppFooter from './compontents/app-footer'
import AppPlayerBar from './views/player/app-player-bar'
import { useAppDispatch } from './store'
import { fetchCurrentSongAction } from './views/player/store/player'

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCurrentSongAction(1896178370))
  })
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className='main'>
        {useRoutes(routes)}
        </div>
      </Suspense>
      <AppFooter />
      <AppPlayerBar />
    </div>
  )
}

export default App
