import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/MWA-DOCS/",

  lang: "zh-CN",
  title: "MWA",
  description: "MWA文档",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
