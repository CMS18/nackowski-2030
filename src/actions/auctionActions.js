import axios from 'axios';

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
  let fakeAuction = {
    Titel: 'Strut',
    Beskrivning: 'Glassig strut',
    StartDatum: '2018-08-12T10:42:00',
    SlutDatum: '2018-09-12T10:42:00',
    Gruppkod: 2030,
    Utropspris: 100,
    SkapadAv: 'Albin'
  };

  return (dispatch, getState) => {
    axios({
      method: 'POST',
      url: 'http://nackowskis.azurewebsites.net/api/Auktion/2030/',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(fakeAuction)
    }).then(res => {
      dispatch({ type: 'ADD_AUCTION', payload: { auction: auction } });
    });
  };
};
