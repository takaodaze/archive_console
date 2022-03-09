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
        setTimeout(() => {
            setPointer((prev) => prev + 1);
        }, props.duration);
    }, [pointer, props.duration]);

    return <Wrapper>{redererText}</Wrapper>;
};

const Wrapper = styled.div({
    padding: "5px",
    fontSize: "20px",
    minHeight: "25px",
});
