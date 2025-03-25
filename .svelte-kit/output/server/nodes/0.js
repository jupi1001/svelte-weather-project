import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DyDzBDXn.js","_app/immutable/chunks/BNbCN9a2.js","_app/immutable/chunks/BqLH59xV.js","_app/immutable/chunks/4A1BEEg7.js"];
export const stylesheets = ["_app/immutable/assets/0.BLVpiC6O.css"];
export const fonts = [];
