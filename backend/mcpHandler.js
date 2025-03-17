const { getUserPlaylists, getUserTopTracks } = require('./spotifyService');

async function handleMCPRequest(req, res) {
    const { model } = req.params;

    try {
        let context = [];
        if (model === 'spotify_playlists') {
            context = await getUserPlaylists();
        } else if (model === 'spotify_top_tracks') {
            context = await getUserTopTracks();
        } else {
            return res.status(400).json({ error: 'Invalid MCP request' });
        }

        res.json({ model, context });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { handleMCPRequest };
