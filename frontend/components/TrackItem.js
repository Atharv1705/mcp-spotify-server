const TrackItem = ({ track }) => {
    return (
      <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4 shadow-md hover:shadow-lg transition">
        <img src={track.albumImage} alt={track.name} className="w-16 h-16 rounded-lg" />
        <div className="flex-1">
          <h2 className="text-lg font-bold text-white">{track.name}</h2>
          <p className="text-gray-400">{track.artist}</p>
        </div>
        <a
          href={track.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600"
        >
          Play
        </a>
      </div>
    );
  };
  
  export default TrackItem;
  