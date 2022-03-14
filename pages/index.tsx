import { Layout } from "../components/Layout";
import { NextPage } from "next";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { ApiPath } from "../lib/ApiPath";
import { useState } from "react";
import { Post } from "../types/Post";

const Index: NextPage = () => {
    const { data, error } = useSWR(ApiPath.postId("2"), fetcher);
    const [selectedPostId, setSelectedPostId] =
        useState<null | Post["id"]>(null);
    return <Layout title="unknown_archives"></Layout>;
};

export default Index;
