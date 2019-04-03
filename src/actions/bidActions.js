import axios from 'axios';
import moment from 'moment';

export const loadBids = id => {
  //AuktionID
  return (dispatch, getState) => {
    axios
      .get(`http://nackowskis.azurewebsites.net/api/bud/2030/${id}`)
      .then(res => {
        console.log(res);
        dispatch({ type: 'LOAD_BIDS', payload: { bids: res.data } });
      });
  };
};

export const createBid = bid => {
  //AuktionID från auktion
  return (dispatch, getState) => {
    let bidObject = {
      ...bid
      //Budgivare: getState().user.name
      //AuktionID: //id:t
    };
    console.log(bid);

    axios({
      method: 'POST',
      url: `http://nackowskis.azurewebsites.net/api/bud/2030/${bid.AuktionID}`,
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(bidObject)
    }).then(res => {
      console.log(res);

      dispatch({ type: 'CREATE_BID', payload: { bid: bidObject } });
    });
  };
};

export const deleteBid = id => {
  //bud-id från auktion
  return (dispatch, getState) => {
    axios({
      method: 'DELETE',
      url: `http://nackowskis.azurewebsites.net/api/bud/2030/${id}`,
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      dispatch({ type: 'DELETE_BID', payload: { id: id } });
    });
  };
};
