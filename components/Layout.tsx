import styled from "@emotion/styled";
import Head from "next/head";
import { ReactNode } from "react";

export const Layout = (props: { children?: ReactNode; title: string }) => {
    return (
        <Wrapper>
            <Head>
                <meta charSet="utf-8" />
                <title>{props.title}</title>
            </Head>
            {props.children}
        </Wrapper>
    );
};

const Wrapper = styled.div({ padding: "20px", height: "100vh" });
