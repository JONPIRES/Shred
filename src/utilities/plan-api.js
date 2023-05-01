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

export async function detail(planID) {
  return sendRequest(`${BASE_URL}/detail/${planID}`);
}

export async function deletePlan(planId) {
  return sendRequest(`${BASE_URL}/delete-plan/${planId}`, "POST");
}

export async function update(form) {
  return sendRequest(`${BASE_URL}/edit-plan/${form._id}`, "PUT", form);
}

// export async function deleteNote(id, index) {
//   return sendRequest(`${BASE_URL}/delete-note/${id}/${index}`, "POST");
// }
export async function addNote(id, form, idx) {
  console.log(id);
  console.log(form);
  return sendRequest(`${BASE_URL}/add-note/${id}/${idx}`, "POST", form);
}
