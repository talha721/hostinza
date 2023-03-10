/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "Place your database URL Here",
  },
};

module.exports = nextConfig;
