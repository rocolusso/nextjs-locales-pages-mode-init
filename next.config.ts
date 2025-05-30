import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    locales: ['uk', 'ru'],
    defaultLocale: 'uk',
    localeDetection: false,
  },
};

export default nextConfig;
