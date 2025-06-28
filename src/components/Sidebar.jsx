import React, { useState, useContext } from 'react';
import { assets, songsData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';

const Sidebar = () => {
  const navigate = useNavigate();
  const { playWithId } = useContext(PlayerContext);

  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState('');

  const filteredSongs = songsData.filter(song =>
    song.name.toLowerCase().includes(query.toLowerCase()) ||
    song.desc.toLowerCase().includes(query.toLowerCase())
  );

  const handleSongClick = (id) => {
    playWithId(id);
    setQuery('');
    setShowSearch(false);
  };

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex overflow-y-auto">
      {/* Top Section */}
      <div className="bg-[#121212] rounded flex flex-col justify-around py-4">
        <div onClick={() => navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold">Home</p>
        </div>

        {/* Search Section */}
        <div onClick={() => setShowSearch(!showSearch)} className="flex items-center gap-3 pl-8 cursor-pointer mt-4">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>

        {/* Search Input Field */}
        {showSearch && (
          <div className="mt-2 px-4">
            <input
              type="text"
              placeholder="Search songs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full p-1.5 text-sm rounded bg-gray-700 outline-none text-white"
            />

            {/* Search Results */}
            {query && (
              <div className="mt-2 max-h-40 overflow-y-auto bg-gray-900 rounded">
                {filteredSongs.length > 0 ? (
                  filteredSongs.map(song => (
                    <div
                      key={song.id}
                      onClick={() => handleSongClick(song.id)}
                      className="p-2 hover:bg-green-700 cursor-pointer text-sm"
                    >
                      <p className="font-semibold">{song.name}</p>
                      <p className="text-xs opacity-70">{song.desc}</p>
                    </div>
                  ))
                ) : (
                  <p className="p-2 text-red-400 text-xs">No songs found</p>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Library Section */}
      <div className="bg-[#121212] h-[85%] rounded mt-4 overflow-y-auto">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>

        {/* Playlist Promo */}
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col gap-1 pl-4">
          <h1>Create your first playlist</h1>
          <p className="font-light">It's easy, we will help you</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 cursor-pointer">
            Create Playlist
          </button>
        </div>

        {/* Podcast Promo */}
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col gap-1 pl-4 mt-4">
          <h1>Let's find some podcasts to follow</h1>
          <p className="font-light">We will keep you updated on new episodes</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 cursor-pointer">
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
