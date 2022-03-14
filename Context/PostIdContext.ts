import React from "react";
import { Post } from "../types/Post";

export type PostIdContext = {
    id: Post["id"] | null;
    setId: (id: Post["id"] | null) => void;
};

export const PostIdContext = React.createContext<PostIdContext>({
    id: null,
    setId: () => null,
});
