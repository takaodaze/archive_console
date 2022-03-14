// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllPost } from "../../../lib/post";
import { Post } from "../../../types/Post";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Post[]>
) {
    const allPost = getAllPost();
    res.status(200).json(allPost);
}
