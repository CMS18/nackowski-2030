import axios from "axios";

export const loadAuctions = () => {
  return (dispatch, getState) => {
    axios
      .get("http://nackowskis.azurewebsites.net/api/Auktion/1010/")
      .then(res => {
        console.log(res);
        dispatch({ type: "LOAD_AUCTIONS", payload: { auctions: res } });
      });
  };
};
