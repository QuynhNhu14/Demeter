import { CurrentUser} from "../models/users.ts";
import { useHttp } from "./useHttps.ts";

const session = {
  user: null as CurrentUser | null,
  loggedIn: false,
};

async function fetchUser() {
  const { data, error } = await useHttp().get<CurrentUser>("/auth/me");
  if (error || !data) {
    session.loggedIn = false;
    return;
  }

  session.user = data;
  session.loggedIn = true;
}

if (session.user === null) await fetchUser();

export const useUserSession = () => {
  // fetch data from api/auth/me

  return {
    get user() {
      return session.user;
    },
    get loggedIn() {
      return session.loggedIn;
    },
    refresh: () => fetchUser(),
  };
};