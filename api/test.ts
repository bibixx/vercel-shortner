import { NowRequest, NowResponse } from '@vercel/node';

export default (_req: NowRequest, res: NowResponse) => {
  res.json({ path: 'test.ts', test: true });
};
