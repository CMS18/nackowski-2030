export const loginUser = name => {
  return { type: "LOGIN_USER", payload: { user: name } };
};
