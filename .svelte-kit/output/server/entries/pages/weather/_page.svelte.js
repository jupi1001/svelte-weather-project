import { c as create_ssr_component, d as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let city = "";
  return `<main><div class="container"><div class="header"><h1 data-svelte-h="svelte-flu1jl">Weather Forecast</h1> <button class="logout-btn" data-svelte-h="svelte-nk8agc">Logout</button></div> <div class="search-box"><input type="text" placeholder="Enter city name"${add_attribute("value", city)}> <button data-svelte-h="svelte-ktu0yk">Search</button></div> ${`${`${``}`}`}</div></main>`;
});
export {
  Page as default
};
