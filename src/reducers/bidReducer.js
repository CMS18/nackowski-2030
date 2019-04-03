const initialState = {
  bids: []
};

const bidReducer = (state = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case 'LOAD_BIDS':
      console.log(payload);
      return { ...state, bids: payload.bids };

    case 'CREATE_BID':
      let { bid } = payload;
      return { ...state, bids: [...state.bids, bid] };

    case 'DELETE_BID':
      return {
        ...state,
        bids: state.bids.filter(b => b.BudID !== payload.id)
      };

    default:
      return state;
  }
};

export default bidReducer;

//Load CHECK
//Add
//Delete
