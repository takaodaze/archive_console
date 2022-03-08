import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
    slug: string;
    content: string;
    title: string;
    date: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllSlugs(): string[] {
    const foundDirs = fs.readdirSync(postsDirectory, { withFileTypes: true });
    const slugs = foundDirs
        .filter((dir) => dir.isFile())
        .map((file) => file.name);
    return slugs;
}

export function getPostBySlug(slug: string): Post {
    const fullPath = path.join(postsDirectory, slug);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContent);

    const post: Post = {
        slug,
        title: data["title"],
        content,
        date: data["date"],
    };
    return post;
}
