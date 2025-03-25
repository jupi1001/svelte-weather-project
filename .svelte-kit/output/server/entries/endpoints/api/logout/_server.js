import { j as json } from "../../../../chunks/index.js";
async function POST({ cookies }) {
  cookies.delete("session", { path: "/" });
  return json({ success: true });
}
export {
  POST
};
