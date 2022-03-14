import { useState } from "react";
import { PostIdContext } from "../Context/PostIdContext";

export const usePostIdContext = (): PostIdContext => {
    const [id, setId] = useState<PostIdContext["id"]>(null);
    return {
        id,
        setId,
    };
};
