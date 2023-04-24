import * as exercisesAPI from "./exercises-api";

export async function create(form) {
  const exercise = await exercisesAPI.create(form);
  // TODO: return user object from token instead
}
