import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Play = () => {

  const {time,track,seekBar,seekBg,playStatus,play,pause,previous,next,seekSong, isMiniPlayer,toggleMiniPlayer,volumeBar, changeVolume,isLoop,toggleLoop} = useContext(PlayerContext);
  return (
    <div className="h-[10%] bg-[#121212] flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0,12)}</p>
          </div>
      </div>
      
      <div className="flex flex-col items-center gap-1 m-auto">
         <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="" />
          <img onClick={previous} className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
          {playStatus
           ?<img onClick={pause} className="w-4 cursor-pointer" src={assets.pause_icon} alt="" />
           :<img onClick={play} className="w-4 cursor-pointer" src={assets.play_icon} alt="" />
           }
          <img onClick={next}className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
          <img onClick={toggleLoop} className={`w-4 cursor-pointer transition duration-300 ${isLoop ? 'filter brightness-150' : 'opacity-50'}`} src={assets.loop_icon} alt="Loop" title={`Loop ${isLoop ? 'On' : 'Off'}`}/>
         </div>
         <div className="flex items-center gap-5">
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg} onClick={seekSong} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr ref={seekBar} className="h-1 border-none w-0  bg-green-800 rounded-full" />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
         </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4"src={assets.plays_icon} alt="" />
        <img className="w-4"src={assets.mic_icon} alt="" />
        <img className="w-4"src={assets.queue_icon} alt="" />
        <img className="w-4"src={assets.speaker_icon} alt="" />
       <img className="w-4" src={assets.volume_icon} alt="" />
        <div ref={volumeBar} onClick={changeVolume} className="w-20 bg-slate-50 h-1 rounded cursor-pointer relative">
         <hr className="absolute top-0 left-0 h-full bg-green-800 border-none w-[50%] rounded" />
        </div>
      <img onClick={toggleMiniPlayer} className="w-4 cursor-pointer" src={assets.mini_player_icon} alt="MiniPlayer"/>
      </div>
    </div>
  );
}

export default Play
