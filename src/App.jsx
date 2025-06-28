import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'
import  Miniplayer from './components/Miniplayer'

const App = () => {

  const { audioRef, track, isMiniPlayer } = useContext(PlayerContext);
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />

      </div>
     {isMiniPlayer ? <Miniplayer /> : <Player />}
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  )
}

export default App