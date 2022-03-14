// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getPostById } from "../../../lib/post";
import { Post } from "../../../types/Post";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Post>
) {
    const requestPostId = req.query.id;
    if (typeof requestPostId != "string") {
        res.status(400);
        return;
    }
    const post = getPostById(requestPostId);
    res.status(200).json(post);
}
