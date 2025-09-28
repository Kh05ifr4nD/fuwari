import type { MiddlewareHandler } from "astro";
// Inject minimal security headers during dev/preview and for any SSR routes.
// For static output, these apply when using `astro preview` or any adapter that
// respects Astro middleware.
export const onRequest: MiddlewareHandler = async (_context, next) => {
  const response = await next();
  try {
    response.headers.set("X-Content-Type-Options", "nosniff");
    const ct = response.headers.get("Content-Type");
    if (ct?.startsWith("text/html") && !/charset=/i.test(ct)) {
      response.headers.set("Content-Type", "text/html; charset=utf-8");
    }
  } catch (_err) {
    // Headers may be immutable in some adapters/preview servers.
  }
  return response;
};
