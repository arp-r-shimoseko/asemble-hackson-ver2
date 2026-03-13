import express, { type Request, type Response } from 'express';
import { supabase } from './supabase';

const app = express();

app.get('/search', async (req: Request, res: Response) => {
  const keyword =
    typeof req.query.keyword === 'string' ? req.query.keyword : undefined;
  if (!keyword) return res.status(400).json({ error: 'keyword is required' });

  const { data } = await supabase
    .from('items')
    .select('id, item_name, description')
    .eq('item_name', keyword);

  res.json(data);
});

app.listen(Number(process.env.PORT) || 4000);
