import { a as attr } from "../../../chunks/attributes.js";
import { c as pop, p as push } from "../../../chunks/index2.js";
import "../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  let city = "";
  $$payload.out += `<main><div class="container"><div class="header"><h1>Weather Forecast</h1> <button class="logout-btn">Logout</button></div> <div class="search-box"><input type="text"${attr("value", city)} placeholder="Enter city name"> <button>Search</button></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></main>`;
  pop();
}
export {
  _page as default
};
