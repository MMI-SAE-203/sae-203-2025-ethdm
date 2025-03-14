import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_W3qlcbhm.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/activite/_id_.astro.mjs');
const _page2 = () => import('./pages/activite.astro.mjs');
const _page3 = () => import('./pages/apropos.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/film/_id_.astro.mjs');
const _page6 = () => import('./pages/film.astro.mjs');
const _page7 = () => import('./pages/infopratique.astro.mjs');
const _page8 = () => import('./pages/invite/_id_.astro.mjs');
const _page9 = () => import('./pages/invite.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/activite/[id].astro", _page1],
    ["src/pages/activite/index.astro", _page2],
    ["src/pages/apropos/index.astro", _page3],
    ["src/pages/contact/index.astro", _page4],
    ["src/pages/film/[id].astro", _page5],
    ["src/pages/film/index.astro", _page6],
    ["src/pages/infopratique/index.astro", _page7],
    ["src/pages/invite/[id].astro", _page8],
    ["src/pages/invite/index.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "edb0f275-a9a2-4b7a-8792-42eeaa4b3d9e"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
