import { getAllPost, getPostById, Post } from "../../lib/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "node:querystring";
import { VFC } from "react";
import { Layout } from "../../components/Layout";
import { TextLine } from "../../components/TextLine/TextLine";

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
    return (
        <Layout title={props.post.title}>
            {props.post.content.split("\n").map((line, idx) => (
                <TextLine key={`line_${idx}`} content={line} duration={100} />
            ))}
        </Layout>
    );
};

export default PostContentPage;
