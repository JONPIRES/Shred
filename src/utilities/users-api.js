import { sendRequest } from "./send-request";
const BASE_URL = "/api/users";

export async function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}
export async function login(loginData) {
  return sendRequest(`${BASE_URL}/login`, "POST", loginData);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

export function get(userId) {
  return sendRequest(`${BASE_URL}/get-user/${userId}`);
}

export async function updateUser(user) {
  return sendRequest(`${BASE_URL}/update-user/${user.id}`, "POST", user);
}

export async function deleteUser(user) {
  return sendRequest(`${BASE_URL}/delete-user/${user._id}`, "POST");
}
