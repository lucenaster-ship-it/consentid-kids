import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  // --- API ROUTES ---
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'ConsentID Kids API' });
  });

  // Example API endpoint for Gemini (Server-side to protect keys)
  app.post('/api/analyze-risk', async (req, res) => {
    // Implement Gemini logic here using process.env.GEMINI_API_KEY
    res.json({ message: 'Analysis complete', riskScore: 0.02 });
  });

  // --- VITE MIDDLEWARE / STATIC ASSETS ---
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve from dist folder
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 ConsentID Kids running at http://localhost:${PORT}`);
  });
}

startServer();
