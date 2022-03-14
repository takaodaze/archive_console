import styled from "@emotion/styled";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { COLORS } from "../constant/color";

class CustomDocument extends Document {
    render() {
        return (
            <CustomHtml>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </CustomHtml>
        );
    }
}

export default CustomDocument;

const CustomHtml = styled(Html)({
    color: COLORS.MAIN_FONT_COLOR,
    background: COLORS.BASE_BACKGROUND,
});
