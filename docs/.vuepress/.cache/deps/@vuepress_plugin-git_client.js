import {
  Ae,
  a
} from "./chunk-V7WA6MFU.js";
import {
  useToggle
} from "./chunk-YWXE44JW.js";
import {
  computed,
  defineComponent,
  h,
  toValue
} from "./chunk-F7HVEGWS.js";

// node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.128_@vuepress+bundler-vite@2.0.0-rc.26_@types+node@25.6.0_62f474c559c11a99a005a95158c1accf/node_modules/@vuepress/plugin-git/dist/GitChangelog-Crl01_KU.js
import "/Users/wanb/Desktop/uu-smart.github.io/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.128_@vuepress+bundler-vite@2.0.0-rc.26_@types+node@25.6.0_62f474c559c11a99a005a95158c1accf/node_modules/@vuepress/plugin-git/dist/GitChangelog-Crl01_KU.css";

// node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.128_@vuepress+bundler-vite@2.0.0-rc.26_@types+node@25.6.0_62f474c559c11a99a005a95158c1accf/node_modules/@vuepress/plugin-git/dist/VPHeader-Bqp9d4cM.js
var n = typeof __GIT_LOCALES__ > `u` ? {} : __GIT_LOCALES__;
var r = () => Ae(n);
var i = ({ level: t = 2, text: n2, anchor: r2 }) => h(`h${t || 2}`, { id: r2, tabindex: `-1` }, h(`a`, { href: `#${r2}`, class: `header-anchor` }, h(`span`, n2)));

// node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.128_@vuepress+bundler-vite@2.0.0-rc.26_@types+node@25.6.0_62f474c559c11a99a005a95158c1accf/node_modules/@vuepress/plugin-git/dist/GitChangelog-Crl01_KU.js
import { useData as o } from "vuepress/client";
var l = typeof __GIT_OPTIONS__ > `u` ? {} : __GIT_OPTIONS__;
var u = (e, t) => !e || a(e) ? e : t === `github` ? `https://github.com/${e}` : t === `gitee` ? `https://gitee.com/${e}` : e;
var d = /#(\d+)/g;
var f = typeof __GIT_CHANGELOG__ == `boolean` && __GIT_CHANGELOG__ ? (e = true) => {
  let { frontmatter: t, lang: r2, page: i2 } = o(), { pattern: s2 = {}, provider: c2 } = l, f2 = u(l.repo, c2);
  return computed(() => {
    if (t.value.changelog === false || !toValue(e)) return [];
    let n2 = new Intl.DateTimeFormat(r2.value, { dateStyle: `short` });
    return (i2.value.git?.changelog ?? []).map((e2) => {
      let t2 = Object.assign({ date: n2.format(e2.time) }, e2);
      return s2.issue && f2 && (t2.message = t2.message.replace(d, (e3, t3) => `<a href="${s2.issue.replace(`:issue`, t3).replace(`:repo`, f2)}" target="_blank" rel="noopener noreferrer">${e3}</a>`)), s2.commit && f2 && (t2.commitUrl = s2.commit.replace(`:hash`, t2.hash).replace(`:repo`, f2)), s2.tag && f2 && t2.tag && (t2.tagUrl = s2.tag.replace(`:tag`, t2.tag).replace(`:repo`, f2)), t2;
    });
  });
} : () => computed(() => []);
var p = (t = true) => {
  let { lang: r2, page: i2 } = o(), s2 = r();
  return computed(() => {
    if (!toValue(t)) return null;
    let e = i2.value.git?.updatedTime ?? i2.value.git?.changelog?.[0].time;
    if (!e) return null;
    let n2 = new Date(e);
    return { date: n2, text: new Intl.DateTimeFormat(r2.value, { dateStyle: `short`, timeStyle: `short` }).format(e), iso: n2.toISOString(), locale: s2.value.latestUpdateAt };
  });
};
var m = defineComponent({ name: `GitChangelog`, props: { title: String, headerLevel: { type: Number, default: 2 } }, setup(n2) {
  let r2 = f(), a2 = r(), o3 = p(), [s2, l3] = useToggle(), u2 = () => h(`div`, { class: `vp-changelog-header`, onClick: () => l3() }, [h(`div`, { class: `vp-latest-updated` }, [h(`span`, { class: `vp-changelog-icon` }), h(`span`, { "data-allow-mismatch": `` }, o3.value.text)]), h(`div`, [h(`span`, { class: `vp-changelog-menu-icon` }), h(`span`, a2.value.viewChangelog)])]), d2 = ({ item: e }) => h(`li`, { class: `vp-changelog-item-tag` }, h(`div`, [h(`a`, { class: `vp-changelog-tag` }, h(`code`, e.tag)), h(`span`, { class: `vp-changelog-date`, "data-allow-mismatch": `` }, [a2.value.timeOn, ` `, h(`time`, { datetime: new Date(e.time).toISOString() }, e.date)])])), m2 = ({ item: e }) => h(`li`, { class: `vp-changelog-item-commit` }, [h(e.commitUrl ? `a` : `span`, { class: `vp-changelog-hash`, href: e.commitUrl, target: `_blank`, rel: `noreferrer` }, [h(`code`, e.hash.slice(0, 5))]), h(`span`, { class: `vp-changelog-divider` }, `-`), h(`span`, { class: `vp-changelog-message`, innerHTML: e.message }), h(`span`, { class: `vp-changelog-date`, "data-allow-mismatch": `` }, [a2.value.timeOn || `on`, ` `, h(`time`, { datetime: new Date(e.time).toISOString() }, e.date)])]);
  return () => r2.value.length > 0 ? [h(i, { level: n2.headerLevel, anchor: `doc-changelog`, text: n2.title || a2.value.changelog }), h(`div`, { class: [`vp-changelog-wrapper`, { active: s2.value }] }, [h(u2), h(`ul`, { class: `vp-changelog-list` }, [r2.value.map((e) => e.tag ? h(d2, { item: e, key: e.tag }) : h(m2, { item: e, key: e.hash }))])])] : null;
} });

// node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.128_@vuepress+bundler-vite@2.0.0-rc.26_@types+node@25.6.0_62f474c559c11a99a005a95158c1accf/node_modules/@vuepress/plugin-git/dist/GitContributors-6yW-5mIh.js
import "/Users/wanb/Desktop/uu-smart.github.io/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.128_@vuepress+bundler-vite@2.0.0-rc.26_@types+node@25.6.0_62f474c559c11a99a005a95158c1accf/node_modules/@vuepress/plugin-git/dist/GitContributors-6yW-5mIh.css";
import { useData as o2 } from "vuepress/client";
var s = typeof __GIT_CONTRIBUTORS__ == `boolean` && __GIT_CONTRIBUTORS__ ? (e = true) => {
  let { frontmatter: t, page: r2 } = o2();
  return computed(() => t.value.contributors === false || !toValue(e) ? [] : r2.value.git.contributors ?? []);
} : () => computed(() => []);
var c = ({ name: e, url: t, avatar: n2 }) => h(t ? `a` : `span`, { href: t, target: `_blank`, rel: `noreferrer`, class: `vp-contributor` }, [n2 ? h(`img`, { src: n2, alt: ``, class: `vp-contributor-avatar` }) : null, h(`span`, { class: `vp-contributor-name` }, e)]);
var l2 = defineComponent({ name: `GitContributors`, props: { title: String, headerLevel: { type: Number, default: 2 } }, setup(n2) {
  let r2 = s(), a2 = r();
  return () => r2.value.length > 0 ? [h(i, { level: n2.headerLevel, anchor: `doc-contributors`, text: n2.title || a2.value.contributors }), h(`div`, { class: `vp-contributors` }, r2.value.map((e) => h(c, e)))] : null;
} });
export {
  m as GitChangelog,
  c as GitContributor,
  l2 as GitContributors,
  i as VPHeader,
  n as locales,
  f as useChangelog,
  s as useContributors,
  r as useGitLocale,
  p as useLastUpdated
};
//# sourceMappingURL=@vuepress_plugin-git_client.js.map
