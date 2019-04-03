import axios from 'axios';
import moment from 'moment';

export const loadBids = () => {
  return (dispatch, getState) => {
    axios
      .get('http://nackowskis.azurewebsites.net/api/bud/2030/1')
      .then(res => {
        console.log(res);
        dispatch({ type: 'LOAD_BIDS', payload: { bids: res.data } });
      });
  };
};

/*export const createBid = bid => {
  return (dispatch, getState) => {
    console.log();
    dispatch({ type: 'CREATE_BID', bid });
  };

  axios({
      method: 'POST',
      url: 
  })
};*/
