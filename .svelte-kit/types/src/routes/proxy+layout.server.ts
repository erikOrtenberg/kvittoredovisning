// @ts-nocheck
import type { PageServerLoad } from "./$types";

export const load = async (event: Parameters<PageServerLoad>[0]) => {
  const user = event.locals.user;
  return {
    user: user,
  };
};
