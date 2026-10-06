const axios = require('axios');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { url, project } = req.query;
  if (!url) {
    return res.status(400).json({ error: 'Parameter url wajib diisi.' });
  }

  try {
    const upstreamRes = await axios.get('https://am.zervida.my.id/api/project-xml', {
      params: { url, ...(project ? { project } : {}) },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 25000,
      validateStatus: () => true
    });

    return res.status(upstreamRes.status).json(upstreamRes.data);
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Gagal memproses link Alight Motion.' });
  }
};
