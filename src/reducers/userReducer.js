const initialState = {
  user: "Albin"
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN_USER":
      return { ...state, ...payload };
    default:
      return state;
  }
};
