import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";
export default {
  title: "viewUI",
  base: process.env.NODE_ENV === "production" ? "/view-ui/" : "/",
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
  themeConfig: {
    nav: [
      { text: "文档", link: "/guild/introduce" },
      { text: "组件", link: "/components/index" },
    ],
    sidebar: {
      "/": [
        {
          text: "引入",
          items: [
            {
              text: "介绍",
              link: "/guild/introduce",
            },
            {
              text: "快速开始",
              link: "/guild/quickstart",
            },
          ],
        },
        {
          text: "开发",
          items: [
            {
              text: "目录结构",
              link: "/develop/",
            },
            {
              text: "组件开发",
              link: "/develop/component",
            },
            {
              text: "全局组件",
              link: "/develop/global",
            },

            {
              text: "打包发布",
              link: "/develop/build",
            },
          ],
        },
      ],
      "/components/": [
        {
          text: "基础组件",
          items: [
            {
              text: "Button 按钮",
              link: "/components/Button/index",
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/SuYxh/view-ui" },
    ],
  },
};
