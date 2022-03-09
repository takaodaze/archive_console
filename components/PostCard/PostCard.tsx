import styled from "@emotion/styled";
import { Post } from "../../lib/posts";
import { RoutingPath } from "../../lib/RoutingPath";
import { useRouter } from "next/router";

type Props = {
    title: Post["title"];
    id: Post["id"];
};

export const PostCard = (props: Props) => {
    const router = useRouter();
    return (
        <Wrapper
            onClick={() => {
                router.push(RoutingPath.postById(props.id));
            }}
        >
            <Title>{props.title}</Title>
        </Wrapper>
    );
};

const Wrapper = styled.div({
    padding: "15px",
    border: "2px solid #ddd",
    borderRadius: "5px",
    display: "inline-block",
    width: "200px",
    cursor: "pointer",
});
const Title = styled.div({ fontWeight: "bold" });
