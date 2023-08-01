const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/book",
    createProxyMiddleware({
      target: "http://localhost:3080",
      changeOrigin: true,
    })
  );
  app.use(
    "/api/books",
    createProxyMiddleware({
      target: "http://localhost:3080",
      changeOrigin: true,
    })
  );
  app.use(
    "/api2/todo",
    createProxyMiddleware({
      target: "http://localhost:3070",
      changeOrigin: true,
    })
  );
  app.use(
    "/api2/todos",
    createProxyMiddleware({
      target: "http://localhost:3070",
      changeOrigin: true,
    })
  );
};
