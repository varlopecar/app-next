// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const posts = await prisma.post.findMany()
    res.status(200).json({ posts })
  } catch (error) {
    return res.status(500).json(error)
  }
}
