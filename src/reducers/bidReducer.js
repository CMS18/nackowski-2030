const initialState = {
  bids: []
};

const bidReducer = (state = initialState, payload) => {
  console.log(payload);
  switch (payload.type) {
    case 'LOAD_BIDS':
      console.log(payload);
      return { ...state, bids: payload.bids };

    default:
      return state;
  }
};

export default bidReducer;

//Load
//Add
//Delete
