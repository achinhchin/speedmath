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
    .listen({
        port: 5555,
        hostname: "0.0.0.0"
    });

console.log(`🚀 Elysia server running at http://0.0.0.0:${app.server?.port}`);
