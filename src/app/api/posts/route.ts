import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import prisma from '../../../../prisma/client';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const data = await prisma.post.findMany();
  return NextResponse.json(data);
}
