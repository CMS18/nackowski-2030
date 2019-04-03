const initialState = {
  bids: []
};

const bidReducer = (state = initialState, payload) => {
  console.log(payload);
  switch (payload.type) {
    case 'LOAD_BIDS':
      return { ...state, bids: payload.bids };

    default:
      return state;
  }
  return state;
};

export default bidReducer;
