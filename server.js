import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";

const app = new Elysia()
    .use(staticPlugin({
        assets: ".",
        prefix: "/",
        headers: {
            "Cache-Control": "public, max-age=3600"
        }
    }))
    .get("/", () => Bun.file("index.html"))
    .listen(5555);

console.log(`🚀 Elysia server running at http://localhost:${app.server?.port}`);
