import { Post } from "../types/Post";
export class ApiPath {
    private static BASE_URL = "/api";
    private static POST = "/post";

    static post() {
        return this.BASE_URL + this.POST;
    }
    static postId(id: Post["id"]) {
        return this.BASE_URL + this.POST + "/" + id;
    }
}
