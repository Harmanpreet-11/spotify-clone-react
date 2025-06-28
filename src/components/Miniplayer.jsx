import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';
import { assets } from '../assets/assets';

const MiniPlayer = () => {
  const { track, playStatus, play, pause, toggleMiniPlayer } = useContext(PlayerContext);

  return (
    <div className="fixed bottom-4 right-4 bg-[#121212] shadow-lg rounded flex items-center gap-3 p-2 z-50 w-[250px]">
      <img className="w-12 h-12 rounded" src={track.image} alt="Thumbnail" />
      <div className="flex-grow">
        <p className="text-sm text-white">{track.name}</p>
      </div>
      {playStatus ? (
        <img
          onClick={pause}
          src={assets.pause_icon}
          className="w-5 h-5 cursor-pointer"
          alt="Pause"
        />
      ) : (
        <img
          onClick={play}
          src={assets.play_icon}
          className="w-5 h-5 cursor-pointer"
          alt="Play"
        />
      )}
      <img
        onClick={toggleMiniPlayer}
        src={assets.zoom_icon}  // You can replace this with an "expand" icon if you have
        className="w-5 h-5 cursor-pointer"
        alt="Expand"
      />
    </div>
  );
};

export default MiniPlayer;
