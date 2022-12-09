import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export class User {
  constructor(public name: string) {}

  isValid() {
    return (this.name || "").trim().length > 0;
  }

  clone() {
    return new User(this.name);
  }
}

class UserCache {
  static save(u: User) {
    sessionStorage.setItem("user", JSON.stringify(u.name));
  }

  static load() {
    const userName: string = sessionStorage.getItem("user");
    if (userName) {
      return new User(userName);
    }

    return EmptyUser;
  }
}

const EmptyUser = new User("");

export function isUserEmpty(u: User) {
  return u === EmptyUser;
}

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    profile: UserCache.load(),
  },
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.profile = action.payload.clone();
      UserCache.save(state.profile);
    },
  },
});

export const { setUser } = UserSlice.actions;
