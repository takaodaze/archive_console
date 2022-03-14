import { Layout } from "../components/Layout";
import { NextPage } from "next";
import { PostList } from "../components/PostList/PostList";

const Index: NextPage = () => {
    return (
        <Layout title="unknown_archives">
            <PostList />
        </Layout>
    );
};

export default Index;
