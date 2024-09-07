import DefaultTheme from "vitepress/theme";
import viewUI from "../../../dist/es/index.js"
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

export default {
    ...DefaultTheme,
    enhanceApp: async ({ app }) => {
        // app is the Vue 3 app instance from `createApp()`. router is VitePress'
        // custom router. `siteData`` is a `ref`` of current site-level metadata.
        app.component('demo-preview', ElementPlusContainer)
        app.use(viewUI);
    },
};