export default (state = [], { type, payload }) => {
  switch (type) {
    case 'LOAD_AUCTIONS':
      let { auctions } = payload;
      return { ...state, auctions };

    case 'ADD_AUCTION':
      let { auction } = payload;

      return { ...state, auctions: [...state.auctions, auction] };

    default:
      return state;
  }
};
