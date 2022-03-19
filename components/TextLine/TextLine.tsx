import styled from "@emotion/styled";
import { useEffect, useState } from "react";

type Props = {
    content: string;
    duration?: number;
};

export const TextLine = (props: Props) => {
    const [pointer, setPointer] = useState(0);
    const redererText = props.content.slice(0, pointer);

    useEffect(() => {
        window.setTimeout(() => {
            if (pointer < props.content.length) {
                setPointer((prev) => prev + 1);
            }
        }, props.duration ?? 40);
    }, [pointer, props.content.length, props.duration]);

    return <Wrapper>{redererText}</Wrapper>;
};

const Wrapper = styled.div({
    fontSize: "20px",
    minHeight: "25px",
    whiteSpace: "pre-line",
});
