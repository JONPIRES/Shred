import * as exercisesAPI from "./exercises-api";

export async function create(form) {
  await exercisesAPI.create(form);
}
