const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const jsonPath = path.join(process.cwd(), 'public', 'api-presets.json');
    if (fs.existsSync(jsonPath)) {
      const data = fs.readFileSync(jsonPath, 'utf8');
      return res.status(200).json(JSON.parse(data));
    }
    // Fallback static
    return res.status(200).json({ presets: [], audio: [], images: [] });
  } catch (err) {
    return res.status(500).json({ error: 'Gagal membaca katalog preset.' });
  }
};
