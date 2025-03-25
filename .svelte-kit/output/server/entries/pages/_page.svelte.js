import { c as create_ssr_component, d as add_attribute } from "../../chunks/ssr.js";
import "../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username = "";
  let password = "";
  return `<main><div class="container"><h1 data-svelte-h="svelte-1ruee2">Welcome to Weather App</h1> <div class="login-form"><h2 data-svelte-h="svelte-bhb3ah">Login</h2> ${``} <form><div class="form-group"><label for="username" data-svelte-h="svelte-1wr0xay">Username</label> <input type="text" id="username" placeholder="Enter your username" required${add_attribute("value", username)}></div> <div class="form-group"><label for="password" data-svelte-h="svelte-pepa0a">Password</label> <input type="password" id="password" placeholder="Enter your password" required${add_attribute("value", password)}></div> <button type="submit" data-svelte-h="svelte-1yamoz0">Login</button></form></div></div></main>`;
});
export {
  Page as default
};
