

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/weather/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Bl4ufaKg.js","_app/immutable/chunks/DyjBc6Js.js","_app/immutable/chunks/BE1VcGML.js","_app/immutable/chunks/DETW4OUu.js"];
export const stylesheets = ["_app/immutable/assets/3.CQNxkSH_.css"];
export const fonts = [];
