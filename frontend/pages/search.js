import { useState } from "react";
import { searchTracks } from "../services/api";
import Navbar from "../components/Navbar";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const data = await searchTracks(query);
    setResults(data.tracks.items);
  };

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold">Search Songs</h2>
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="mt-2 bg-green-500 px-4 py-2 text-white rounded" onClick={handleSearch}>
          Search
        </button>

        <ul className="mt-4">
          {results.map((track) => (
            <li key={track.id} className="p-2 border-b">
              <strong>{track.name}</strong> - {track.artists[0].name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
