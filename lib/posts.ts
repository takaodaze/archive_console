import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
    id: string;
    content: string;
    title: string;
    date: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

function getAllPostFileName(): string[] {
    const foundDirs = fs.readdirSync(postsDirectory, { withFileTypes: true });
    const names = foundDirs
        .filter((dir) => dir.isFile())
        .map((file) => file.name);
    return names;
}

function getPostByFileName(fileName: string): Post {
    const fullPath = path.join(postsDirectory, fileName);

    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContent);

    const post: Post = {
        id: data["id"],
        title: data["title"],
        content,
        date: data["date"],
    };
    return post;
}

export function getPostById(id: Post["id"]): Post {
    const allPosts = getAllPost();
    const post = allPosts.find((post) => post.id === id);
    if (post == null) {
        throw new Error("not found post");
    }
    return post;
}

export function getAllPost(): Post[] {
    const allFileNames = getAllPostFileName();
    const allPosts = allFileNames.map((fileName) =>
        getPostByFileName(fileName)
    );
    return allPosts;
}
