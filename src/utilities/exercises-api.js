import { sendRequest } from "./send-request";
const BASE_URL = "/api/exercise";

export async function create(form) {
  return sendRequest(BASE_URL, "POST", form);
}
