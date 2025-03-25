import * as universal from '../entries/pages/weather/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/weather/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/weather/+page.js";
export const imports = ["_app/immutable/nodes/3.DR7tkHfs.js","_app/immutable/chunks/BNbCN9a2.js","_app/immutable/chunks/BqLH59xV.js","_app/immutable/chunks/4A1BEEg7.js","_app/immutable/chunks/C5ZTUa64.js","_app/immutable/chunks/BkOVOvUW.js","_app/immutable/chunks/Cd5eyZur.js","_app/immutable/chunks/_bzO70dN.js","_app/immutable/chunks/DGL348ob.js","_app/immutable/chunks/C_pyoHk8.js"];
export const stylesheets = ["_app/immutable/assets/3.CN8ZOmUV.css"];
export const fonts = [];
