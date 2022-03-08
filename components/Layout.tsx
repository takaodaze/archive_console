import Head from "next/head";
import { ReactNode } from "react";

export const Layout = (props: { children: ReactNode; title: string }) => {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>{props.title}</title>
            </Head>
            {props.children}
        </div>
    );
};
