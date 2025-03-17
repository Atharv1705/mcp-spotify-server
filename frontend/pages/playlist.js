import Navbar from '@/components/Navbar';
import PlaylistCard from '@/components/PlaylistCard';

const playlists = [
  {
    name: "Top Hits 2025",
    description: "The best tracks of the year!",
    image: "/spotify-icon.png",
    url: "https://open.spotify.com/playlist/12345",
  },
  {
    name: "Coding Vibes",
    description: "Chill beats for coding sessions",
    image: "/logo.png",
    url: "https://open.spotify.com/playlist/67890",
  }
];

export default function Playlists() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4 text-green-400">Your Playlists</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {playlists.map((playlist, index) => (
            <PlaylistCard key={index} playlist={playlist} />
          ))}
        </div>
      </div>
    </div>
  );
}
