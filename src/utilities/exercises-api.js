import { sendRequest } from "./send-request";
const BASE_URL = "/api/exercise";

export async function create(form) {
  return sendRequest(`${BASE_URL}/create-exercise`, "POST", form);
}
export async function get() {
  return sendRequest(BASE_URL);
}
