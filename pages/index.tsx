import styled from "@emotion/styled";
import { Layout } from "components/Layout";
import { PostCard } from "components/PostCard/PostCard";
import { getAllSlugs, getPostBySlug } from "lib/posts";
import { InferGetStaticPropsType, NextPage } from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
    const allSlugs = getAllSlugs();
    const allPosts = allSlugs.map((slug) => getPostBySlug(slug));
    return {
        props: { allPosts },
    };
};

const Index: NextPage<Props> = (props) => {
    return (
        <Layout title="all post">
            <Flex>
                {props.allPosts.map((post, idx) => (
                    <PostCard key={`post_card_${idx}`} title={post.title} />
                ))}
            </Flex>
        </Layout>
    );
};

export default Index;

const Flex = styled.div({
    display: "flex",
    padding: "20px",
    gap: "10px",
    width: "600px",
    margin: "0 auto",
});
