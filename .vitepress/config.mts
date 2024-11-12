import shared from "./shared";
import { defineConfig } from "vitepress";
import { nav } from "./nav";
import { sidebarGuide } from "./sidebar";

export default defineConfig({
  ...shared,
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: nav(),
        sidebar: {
          '/guide': {
            base: 'guide',
            items: sidebarGuide()
          }
        }
      }
    }
  }
})