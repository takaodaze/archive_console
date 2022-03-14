import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PostIdContext } from "../Context/PostIdContext";
import { usePostIdContext } from "../hooks/usePostIdContext";

function App({ Component, pageProps }: AppProps) {
    const postIdContext = usePostIdContext();
    return (
        <PostIdContext.Provider value={postIdContext}>
            <Component {...pageProps} />
        </PostIdContext.Provider>
    );
}

export default App;
