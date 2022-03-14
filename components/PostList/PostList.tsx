import styled from "@emotion/styled";
import { useContext } from "react";
import useSWR from "swr";
import { COLORS } from "../../constant/color";
import { PostIdContext } from "../../Context/PostIdContext";
import { ApiPath } from "../../lib/ApiPath";
import { Post } from "../../types/Post";
import { fetcher } from "../../utils/fetcher";
import { PostItem } from "../PostItem/PostItem";

export const PostList = () => {
    const { data: posts, error } = useSWR<Post[]>(ApiPath.post(), fetcher);
    const postIdContext = useContext(PostIdContext);
    if (error != null) {
        console.error("error:", error);
    }

    return (
        <List>
            {posts != null &&
                posts.map((post, idx) => (
                    <PostItem
                        key={idx}
                        id={post.id}
                        title={post.title}
                        active={post.id === postIdContext.id}
                    />
                ))}
        </List>
    );
};

const List = styled.div({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    background: COLORS.SUB_BACKGROUND,
    padding: "10px",
    borderRadius: "12px",
});
