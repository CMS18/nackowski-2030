export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'LOAD_AUCTIONS':
      return { ...state, ...payload };

    default:
      return state;
  }
};
