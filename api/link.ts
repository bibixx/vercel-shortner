import { NowRequest, NowResponse } from '@vercel/node';

export default (req: NowRequest, res: NowResponse) => {
  if (req.url === undefined) {
    res.status(500).json({ status: 500, error: 'no url' });
    return;
  }

  const pathParts = req.url.split('/');
  const id = pathParts[pathParts.length - 1];

  res.json({ path: 'link.ts', id });
};
