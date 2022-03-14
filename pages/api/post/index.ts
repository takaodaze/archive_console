// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Post } from "../../../types/Post";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Post>
) {
    res.status(200).json({
        title: "example title",
        id: "1",
        date: "2021-12-22",
        content: "hoge\nfoo\nbar",
    });
}
