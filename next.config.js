const ADMIN_REWRITE = {
  source: "/admin/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/admin/:path*"
      : "/admin/index.html",
};

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  rewrites: () => [ADMIN_REWRITE],
};
