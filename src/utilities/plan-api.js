import { sendRequest } from "./send-request";
const BASE_URL = "/api/plan";

export async function create(form) {
  return sendRequest(`${BASE_URL}/create-plan`, "POST", form);
}

export async function addExercise(form, id) {
  return sendRequest(`${BASE_URL}/add-exercise/${id}`, "POST", form);
}

export async function get(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function detail(planID) {
  return sendRequest(`${BASE_URL}/detail/${planID}`);
}

export async function deletePlan(planId) {
  return sendRequest(`${BASE_URL}/delete-plan/${planId}`, "POST");
}

export async function update(form) {
  return sendRequest(`${BASE_URL}/edit-plan/${form._id}`, "PUT", form);
}

export async function deleteExercise(id, index) {
  return sendRequest(`${BASE_URL}/delete-exercise/${id}/${index}`, "POST");
}
export async function addNote(id, form, idx) {
  return sendRequest(`${BASE_URL}/add-note/${id}/${idx}`, "POST", form);
}
