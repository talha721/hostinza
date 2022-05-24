/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI:
      "mongodb+srv://hostinza:hostinza123@cluster0.6k6n7.mongodb.net/hostinza?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
