import { a as attr } from "../../chunks/attributes.js";
import { c as pop, p as push } from "../../chunks/index2.js";
import "../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  let username = "";
  let password = "";
  $$payload.out += `<main><div class="container"><h1>Welcome to Weather App</h1> <div class="login-form"><h2>Login</h2> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <form><div class="form-group"><label for="username">Username</label> <input type="text" id="username"${attr("value", username)} placeholder="Enter your username" required></div> <div class="form-group"><label for="password">Password</label> <input type="password" id="password"${attr("value", password)} placeholder="Enter your password" required></div> <button type="submit">Login</button></form></div></div></main>`;
  pop();
}
export {
  _page as default
};
