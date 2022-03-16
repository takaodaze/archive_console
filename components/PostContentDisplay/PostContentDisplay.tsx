import styled from "@emotion/styled";
import React, { useContext } from "react";
import useSWR from "swr";
import { COLORS } from "../../constant/color";
import { PostIdContext } from "../../Context/PostIdContext";
import { ApiPath } from "../../lib/ApiPath";
import { Post } from "../../types/Post";
import { fetcher } from "../../utils/fetcher";
import { TextLine } from "../TextLine/TextLine";

export const PostContentDisplay = () => {
    const postIdContext = useContext(PostIdContext);
    const selected = postIdContext.id == null ? false : true;

    const { data: post } = useSWR<Post>(
        ApiPath.postId(postIdContext.id ?? ""),
        fetcher
    );

    return (
        <Wrapper>
            {selected ? (
                <>
                    <TextLine duration={100} content={post?.title ?? ""} />
                    <TextLine content={post?.content ?? ""} duration={80} />
                </>
            ) : (
                <TextLine content="アーカイブを選んで下さい" duration={100} />
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div({
    padding: "30px",
    background: COLORS.SUB_BACKGROUND,
    borderRadius: "12px",
});
