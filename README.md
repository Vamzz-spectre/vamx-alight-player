# Vamx AM Web - Alight Motion Preset Player & Web Runtime Engine

Browser-based web runtime dan video renderer untuk file preset Alight Motion (`.xml`), official share link (`alight.link`), dan Google Drive presets.

⚡ **Powered by [VamxAPI](https://vamxapi.my.id)**  
Author: **Vamz Spectre**

---

## 🌟 Fitur Utama
- **Browser-based AM Player**: Menjalankan scene preset XML langsung di browser menggunakan WebGL & Canvas renderer.
- **Multiple Preset Sources**:
  - Direct upload file `.xml`
  - Link resmi Alight Motion (`https://alight.link/...` atau `https://alightcreative.com/am/share/...`)
  - Link Google Drive publik (`https://drive.google.com/file/d/.../view`)
  - 27+ Preset gratis bawaan server
- **Interactive Timeline**: Beat marker navigation, frame-by-frame inspector, audio visualizer.
- **Media Customizer**: Ganti foto, video, dan audio musik langsung di browser.
- **Client-side Video Export**: Render dan ekspor ke video MP4 / WebM menggunakan WebCodecs & FFmpeg WASM.
- **Vercel Serverless API**: Proxy dan caching cerdas untuk Google Drive XML, Alight Cloud project resolver, dan TikTok audio extractor.

---

## 🚀 Deployment (Vercel)
Website ini dirancang untuk dideploy ke [Vercel](https://vercel.com) dengan zero configuration:
```bash
npm install
vercel --prod
```

## 📄 Lisensi
MIT License &copy; 2026 Vamz Spectre
