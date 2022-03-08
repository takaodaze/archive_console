import styled from "@emotion/styled";

type Props = {
    title: string;
};

export const PostCard = (props: Props) => {
    return (
        <Wrapper>
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
});
const Title = styled.div({ fontWeight: "bold" });
