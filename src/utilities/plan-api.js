import { sendRequest } from "./send-request";
const BASE_URL = "/api/plan";

export async function create(form) {
  return sendRequest(`${BASE_URL}/create-plan`, "POST", form);
}

export async function addExercise(form, id) {
  return sendRequest(`${BASE_URL}/add-exercise/${id}`, "POST", form);
}

export async function get() {
  return sendRequest(BASE_URL);
}

// export async function detail(exerciseId) {
//   return sendRequest(`${BASE_URL}/detail/${exerciseId}`);
// }

// export async function deleteExercise(exerciseId) {
//   return sendRequest(`${BASE_URL}/delete-exercise/${exerciseId}`, "POST");
// }

// export async function update(form) {
//   return sendRequest(`${BASE_URL}/edit-exercise/${form._id}`, "PUT", form);
// }
