import styled from "@emotion/styled";
import { FC } from "react";

export const PostTitle: FC = ({ children }) => {
    return (
        <Wrapper>
            <TitleText>{children}</TitleText>
        </Wrapper>
    );
};

const Wrapper = styled.div({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "blue",
    height: "100vh",
    width: "100vw",
});

const TitleText = styled.div({
    textAlign: "center",
    fontSize: "32px",
    fontWeight: 700,
});
