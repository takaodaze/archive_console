import { Post } from "./posts";

export class RoutingPath {
    private static POST = "/post";
    static post() {
        return this.POST;
    }
    static postById(id: Post["id"]) {
        return this.POST + "/" + id;
    }
}
