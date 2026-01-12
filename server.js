const server = Bun.serve({
    port: 5555,
    async fetch(req) {
        const url = new URL(req.url);
        let path = url.pathname;

        // Default to index.html
        if (path === "/") {
            path = "/index.html";
        }

        // Serve static files
        const file = Bun.file("." + path);

        if (await file.exists()) {
            // Set cache headers (1 hour for production)
            const headers = new Headers();
            headers.set("Cache-Control", "public, max-age=3600");

            return new Response(file, { headers });
        }

        return new Response("Not Found", { status: 404 });
    },
});

console.log(`🚀 Server running at http://localhost:${server.port}`);
