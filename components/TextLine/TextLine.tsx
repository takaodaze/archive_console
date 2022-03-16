import styled from "@emotion/styled";
import { useEffect, useState } from "react";

type Props = {
    content: string;
    duration: number;
};

export const TextLine = (props: Props) => {
    const [pointer, setPointer] = useState(0);
    const redererText = props.content.slice(0, pointer);

    useEffect(() => {
        if (pointer < props.content.length) {
            setTimeout(() => {
                setPointer((prev) => prev + 1);
            }, 100);
        }
    }, [pointer, props.content.length]);

    useEffect(() => {
        setPointer(0);
    }, [props.content]);

    return <Wrapper>{redererText}</Wrapper>;
};

const Wrapper = styled.div({
    fontSize: "20px",
    minHeight: "25px",
    whiteSpace: "pre-line",
});
