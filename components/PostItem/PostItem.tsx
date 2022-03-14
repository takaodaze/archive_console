import styled from "@emotion/styled";
import { COLORS } from "../../constant/color";
import { Post } from "../../types/Post";

type Props = {
    title: Post["title"];
    active: boolean;
};

export const PostItem = (props: Props) => {
    return <Wrapper active={props.active}>{props.title}</Wrapper>;
};

const Wrapper = styled.div((props: { active?: boolean }) => ({
    background: props.active ? COLORS.HILIGHT : COLORS.SUB_BACKGROUND,
    borderRadius: "5px",
    padding: "15px",
    color: props.active ? COLORS.HILIGHT_FONT_COLOR : COLORS.MAIN_FONT_COLOR,
    fontWeight: props.active ? "bold" : "normal",
}));
