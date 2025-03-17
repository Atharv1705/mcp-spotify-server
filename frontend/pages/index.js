// frontend/pages/index.js
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function Home() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios.get("/api/playlists")
      .then((response) => {
        setPlaylists(response.data.items || []);
      })
      .catch((error) => console.error("Error fetching playlists:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Your Spotify Playlists
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {playlists.length > 0 ? (
            playlists.map((playlist) => (
              <div
                key={playlist.id}
                className="bg-white rounded shadow p-4 hover:shadow-xl transition"
              >
                <img
                  src={playlist.images[0]?.url || "/default-playlist.png"}
                  alt={playlist.name}
                  className="w-full rounded mb-4"
                />
                <h2 className="text-xl font-semibold">{playlist.name}</h2>
                <p className="text-gray-600">{playlist.tracks.total} tracks</p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-600">No playlists found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
