import { getAllPost, getPostById, Post } from "lib/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "node:querystring";
import { VFC } from "react";

type Params = ParsedUrlQuery & {
    postId: Post["id"];
};

type Props = {
    post: Post;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const postFileNames = getAllPost();

    const paths = postFileNames.map((post) => ({
        params: { postId: post.id },
    }));

    return {
        paths,
        fallback: true, // false or 'blocking'
    };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
    params,
}) => {
    const post = getPostById(params?.postId ?? "");
    return {
        props: { post },
    };
};

const PostContentPage: VFC<Props> = (props) => {
    console.log("props", props);

    return <div></div>;
};

export default PostContentPage;
