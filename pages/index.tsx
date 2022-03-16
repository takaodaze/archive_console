import { Layout } from "../components/Layout";
import { NextPage } from "next";
import { PostList } from "../components/PostList/PostList";
import styled from "@emotion/styled";
import { PostContentDisplay } from "../components/PostContentDisplay/PostContentDisplay";

const Index: NextPage = () => {
    return (
        <Layout title="unknown_archives">
            <IndexPageLayout>
                <PostList />
                <PostContentDisplay />
            </IndexPageLayout>
        </Layout>
    );
};

export default Index;

const IndexPageLayout = styled.div({
    display: "grid",
    height: "100%",
    width: "100%",
    gridTemplateColumns: "300px 1fr",
    columnGap: "20px",
    gridTemplateRows: "1fr 50px",
});
