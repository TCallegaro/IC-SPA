
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera uma versão estática para o GitHub Pages
  output: "export",

  // Caminho do repositório no GitHub Pages
  basePath: "/IC-SPA",

  // Necessário para imagens no modo de exportação estática
  images: {
    unoptimized: true,
  },

  experimental: {
    agentFeedback: true,
  },

  cacheComponents: true,
  partialPrefetching: true,

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
