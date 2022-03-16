import styled from "@emotion/styled";
import { useContext } from "react";
import { COLORS } from "../../constant/color";
import { PostIdContext } from "../../Context/PostIdContext";
import { Post } from "../../types/Post";

type Props = {
    id: Post["id"];
    title: Post["title"];
    active?: boolean;
};

export const PostItem = (props: Props) => {
    const postIdContext = useContext(PostIdContext);

    return (
        <Wrapper
            active={props.active}
            onClick={() => {
                if (props.id === postIdContext.id) {
                    postIdContext.setId(null);
                } else {
                    postIdContext.setId(props.id);
                }
            }}
        >
            {props.title}
        </Wrapper>
    );
};

const Wrapper = styled.div((props: { active?: boolean }) => ({
    background: props.active ? COLORS.HILIGHT : COLORS.SUB_BACKGROUND,
    borderRadius: "5px",
    padding: "15px",
    color: props.active ? COLORS.HILIGHT_FONT_COLOR : COLORS.MAIN_FONT_COLOR,
    fontWeight: props.active ? "bold" : "normal",
}));
