import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: ".app.svelte-6n0mwd{min-height:100vh;background-color:#f5f5f5}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n  import '../styles.css';\\n<\/script>\\n\\n<div class=\\"app\\">\\n  <slot />\\n</div>\\n\\n<style>\\n  .app {\\n    min-height: 100vh;\\n    background-color: #f5f5f5;\\n  }\\n</style> "],"names":[],"mappings":"AASE,kBAAK,CACH,UAAU,CAAE,KAAK,CACjB,gBAAgB,CAAE,OACpB"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-6n0mwd">${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Layout as default
};
