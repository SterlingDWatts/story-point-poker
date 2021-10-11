export interface User {
  _id: string;
  name: string;
  role: string;
  isLoggedIn: boolean;
}

export type UserState = User[];

interface UserAction {
  type: "add-user" | "clear-users" | "remove-user" | "edit-user";
  payload: User[];
}

export interface UserValue {
  userState: UserState;
  addUser: (users: User[]) => void;
  clearUsers: () => void;
  removeUser: (_id: string) => void;
  editUser: (user: User) => void;
}

export type UserReducer = (state: UserState, action: UserAction) => UserState;
