import { h } from "hastscript";

export function TypstImgComponent(props = {}) {
  try {
    const src = String(props.src || "");
    const alt = String(props.alt || "");
    const widthStr = String(props.width || "");
    let style = "";
    if (/^\d+%$/.test(widthStr)) {
      style = `width: ${widthStr}; max-width: 100%; height: auto;`;
    }

    const attributes = { src, alt, loading: "lazy", decoding: "async", fetchpriority: "auto" };
    if (style) attributes.style = style;

    const m = /^(?:https?:\/\/)?(?:www\.)?placehold\.co\/(\d+)x(\d+)(?:[/?].*)?$/i.exec(src);
    if (m) {
      const w0 = Number(m[1]);
      const h0 = Number(m[2]);
      attributes.width = w0;
      attributes.height = h0;
      // Build responsive srcset through Astro image endpoint to leverage the built-in image pipeline.
      const widths = [Math.min(480, w0), Math.min(800, w0), Math.min(1200, w0), w0]
        .filter((v, i, a) => v > 0 && a.indexOf(v) === i)
        .sort((a, b) => a - b);
      const enc = (s) => encodeURIComponent(s);
      const endpoint = (w) => `/_image?href=${enc(src)}&w=${w}&f=webp&q=75`;
      attributes.srcset = widths.map((w) => `${endpoint(w)} ${w}w`).join(", ");
      attributes.sizes = "100vw";
      // Use the largest generated width as the default src
      attributes.src = endpoint(widths[widths.length - 1]);
    }

    // Hint to Astro DevToolbar that this image is intentionally optimized/handled
    // to avoid noisy "Use the Image component" suggestions in dev.
    attributes["data-image-component"] = "true";
    return h("img", attributes);
  } catch {
    return h("img", props || {});
  }
}
