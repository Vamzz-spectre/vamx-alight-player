const axios = require('axios');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ error: 'Parameter id wajib diisi.' });
  }

  try {
    const upstreamRes = await axios.get('https://am.zervida.my.id/api/shape-bin', {
      params: { id },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      responseType: 'arraybuffer',
      timeout: 20000,
      validateStatus: () => true
    });

    res.status(upstreamRes.status);
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    return res.send(Buffer.from(upstreamRes.data));
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Gagal mengambil shape binary.' });
  }
};
