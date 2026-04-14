# vb-docs

The Site is generated using [bbbbbb](https://vuepress.vuejs.org/) and [vvvvv](https://github.com/pengzhanbo/vuepress-theme-plume)

## Install

```sh
pnpm i
```

## Usage

```sh
# start dev server
pnpm docs:dev
# build for production
pnpm docs:build
# preview production build in local
pnpm docs:preview
# update vuepress and theme
pnpm vp-update
```

## Deploy to GitHub Pages

The plume theme has been created with GitHub Actions: `.github/workflows/docs-deploy.yml`. You also need to make the following settings in the GitHub repository:

- [ ] `settings > Actions > General`, Scroll to the bottom of the page, under `Workflow permissions`, check `Read and write permissions`, and click the save button.

- [ ] `settings > Pages`, In `Build and deployment`, select `Deploy from a branch` for `Source`, choose `gh-pages` for `Branch`, and click the save button.
  (The `gh-pages` branch may not exist upon first creation. You can complete the above setup first, push the code to the main branch, wait for `github actions` to finish, and then proceed with the setup.)

- [ ] Modify the `base` option in `docs/.vuepress/config.ts`:
  - If you are planning to deploy to `https://<USERNAME>.github.io/`, you can skip this step as `base` defaults to `"/"`.
  - If you are planning to deploy to `https://<USERNAME>.github.io/<REPO>/`, meaning your repository URL is `https://github.com/<USERNAME>/<REPO>`, set `base` to `"/<REPO>/"`.

To customize a domain name, please refer to [Github Pages](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

## Documents

- [vuepress](https://vuepress.vuejs.org/)
- [vuepress-theme-plume](https://theme-plume.vuejs.press/)



https://plume.pengzhanbo.cn/guide/sidebar/#%E6%A8%A1%E5%9D%97%E5%8C%96%E9%85%8D%E7%BD%AE%E6%96%B9%E6%A1%88



https://www.shougan.net/docs/knowledge/subscribe-guide/