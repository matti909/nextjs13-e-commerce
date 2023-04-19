import { NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../prisma/client';

export async function GET(req: NextRequest, res: NextApiResponse) {
  const data = await prisma.post.findMany();
  return NextResponse.json(data);
}
