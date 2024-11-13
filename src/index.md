---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Changesets"
  text: "Version and Changelog"
  tagline: A tool to manage versioning and changelogs
  image:
    src: /logo.png
    alt: Changesets logo
  actions:
    - theme: brand
      text: Get Started
      link: /markdown-examples
    - theme: alt
      text: View on GitHub
      link: https://github.com/changesets/changesets

features:
  - icon: ⚡
    title: Automated Versioning
    details: Automatically updates versions based on change types, ensuring consistent dependencies.
  - icon: 📦
    title: Support for Multi-package Repositories
    details: Simplifies managing multiple packages within one repository.
  - icon: 📖
    title: Change Log Generation
    details: Automatically creates change logs for easy tracking of updates and new features.
  - icon: 🚀
    title: CI/CD Workflow Integration
    details: Streamlines version control and releases through automatic pull requests and release triggers.
---
