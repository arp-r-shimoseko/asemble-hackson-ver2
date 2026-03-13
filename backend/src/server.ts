import express, { type Request, type Response } from 'express';
import { supabase } from './supabase';

const app = express();

// シンプルな CORS 設定（フロントからの fetch 用）
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

app.get('/search', async (req: Request, res: Response) => {
  const keyword =
    typeof req.query.keyword === 'string' ? req.query.keyword : undefined;
  if (!keyword) return res.status(400).json({ error: 'keyword is required' });

  const { data } = await supabase
    .from('items')
    .select('id, item_name, description, image_url')
    .ilike('item_name', `%${keyword}%`);

  res.json(data);
});

app.listen(Number(process.env.PORT) || 4000);
