const axios = require('axios');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { url, kind, start, end } = req.query;
  if (!url) {
    return res.status(400).json({ error: 'Parameter url wajib diisi.' });
  }

  try {
    const upstreamRes = await axios.get('https://am.zervida.my.id/api/drive-media', {
      params: { url, kind, start, end },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      responseType: 'stream',
      timeout: 30000,
      validateStatus: () => true
    });

    res.status(upstreamRes.status);
    for (const [k, v] of Object.entries(upstreamRes.headers)) {
      if (['content-type', 'content-length', 'content-range', 'accept-ranges'].includes(k.toLowerCase())) {
        res.setHeader(k, v);
      }
    }
    upstreamRes.data.pipe(res);
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Gagal memproses media Google Drive.' });
  }
};
