
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/alice-home/1/d/dw349/Documents/atongsa.github.io/blog_gatsby/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/alice-home/1/d/dw349/Documents/atongsa.github.io/blog_gatsby/src/pages/index.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/alice-home/1/d/dw349/Documents/atongsa.github.io/blog_gatsby/src/pages/using-typescript.tsx")),
  "component---src-templates-blog-post-js": preferDefault(require("/alice-home/1/d/dw349/Documents/atongsa.github.io/blog_gatsby/src/templates/blog-post.js"))
}

