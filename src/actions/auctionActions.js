import axios from 'axios';
import moment from 'moment';

export const loadAuctions = () => {
  return (dispatch, getState) => {
    axios
      .get('http://nackowskis.azurewebsites.net/api/Auktion/1040/')
      .then(res => {
        dispatch({ type: 'LOAD_AUCTIONS', payload: { auctions: res.data } });
      });
  };
};

export const addAuction = auction => {
  auction = {
    Titel: 'strut',
    Beskrivning: 'kaos',
    StartDatum: '2018-08-12T10:42:00',
    SlutDatum: '2018-09-12T10:42:00',
    Gruppkod: 2030,
    Utropspris: 100,
    SkapadAv: 'Albin'
  };

  return (dispatch, getState) => {
    let postObject = {
      ...auction,
      SkapadAv: getState().user.name,
      StartDatum: moment().format(),
      SlutDatum: moment()
        .parse(auction.SlutDatum)
        .format()
    };

    axios({
      method: 'POST',
      url: 'http://nackowskis.azurewebsites.net/api/Auktion/2030/',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(postObject)
    }).then(res => {
      console.log(res);

      dispatch({
        type: 'ADD_AUCTION',
        payload: { auction: postObject }
      });
    });
  };
};

export const deleteAuction = id => {
  return (dispatch, getState) => {
    axios({
      method: 'DELETE',
      url: `http://nackowskis.azurewebsites.net/api/Auktion/2030/${id}`,
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      dispatch({ type: 'DELETE_AUCTION', payload: { id: id } });
    });
  };
};

export const editAuction = auction => {
  return (dispatch, getState) => {
    axios({
      method: 'PUT',
      url: `http://nackowskis.azurewebsites.net/api/Auktion/2030/${
        auction.AuktionID
      }`,
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(auction)
    }).then(res => {
      dispatch({ type: 'EDIT_AUCTION', payload: { auction: auction } });
    });
  };
};
