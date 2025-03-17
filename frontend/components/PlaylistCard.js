const PlaylistCard = ({ playlist }) => {
    return (
      <div className="bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition">
        <img src={playlist.image} alt={playlist.name} className="rounded-lg w-full" />
        <h2 className="text-lg font-bold mt-2 text-white">{playlist.name}</h2>
        <p className="text-sm text-gray-400">{playlist.description}</p>
        <a href={playlist.url} target="_blank" rel="noopener noreferrer" className="block mt-2 text-green-400 hover:underline">
          Open on Spotify
        </a>
      </div>
    );
  };
  
  export default PlaylistCard;
  