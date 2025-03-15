import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono, type Context } from "hono";
import { getCookie, setCookie } from "hono/cookie";

const app = new Hono();

const SESSION_COOKIE_NAME = "user";
const SESSION_COOKIE_VALUE = "Danish";

const isAuthenticated = (c: Context) =>
  getCookie(c, SESSION_COOKIE_NAME) === SESSION_COOKIE_VALUE;

app.use(
  "/static/*",
  async (c, next) => {
    if (!isAuthenticated(c)) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    return await next();
  },
  serveStatic({
    root: "./src",
  })
);

app.get("/", (c) => {
  const session = getCookie(c, SESSION_COOKIE_NAME);
  const isLocalhost = c.req.url.includes("localhost");

  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cookies SameSite</title>
      </head>
      <body>
        <img width="400" src="http://localhost:3000/static/private-image.webp" alt="private-image" />
        ${
          isLocalhost
            ? `<button onclick="window.location.href='/login'">${
                session ? "Reset Session" : "Login"
              }</button>`
            : `<a href="http://localhost:3000/static/private-image.webp">Directly access to private image</a>`
        }
      </body>
    </html>
  `);
});

app.get("/login", (c) => {
  // strict means the cookie will only be sent to the same origin
  setCookie(c, SESSION_COOKIE_NAME, SESSION_COOKIE_VALUE, {
    sameSite: "strict",
    httpOnly: true,
    secure: true,
  });

  // lax means the cookie will be sent to the same origin and subdomains
  // setCookie(c, SESSION_COOKIE_NAME, SESSION_COOKIE_VALUE, {
  //   sameSite: "lax",
  //   httpOnly: true,
  //   secure: true,
  // });

  // none means the cookie will be sent to all origins
  // setCookie(c, SESSION_COOKIE_NAME, SESSION_COOKIE_VALUE, {
  //   sameSite: "none",
  //   httpOnly: true,
  //   secure: true,
  // });

  return c.redirect("/");
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
