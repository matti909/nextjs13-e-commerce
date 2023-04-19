import { NextApiResponse } from 'next';
import { NextRequest } from 'next/server';
import prisma from '../../../../prisma/client';

export async function GET(req: NextRequest, res: NextApiResponse) {
  const data = await prisma.post.findMany();
  return res.json(data);
}
