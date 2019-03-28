export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "typeName":
      return { ...state, ...payload };

    default:
      return state;
  }
};

const initialState = {
  auctions: [
    {
      AuktionID: 2462,
      Titel: "Scotts fina hybridcykel",
      Beskrivning: "Snygg hybridcykel",
      StartDatum: "2018-08-12T10:42:00",
      SlutDatum: "2018-09-12T10:42:00",
      Gruppkod: 1040,
      Utropspris: 4330,
      SkapadAv: "samuelbering@hotmail.com"
    },
    {
      AuktionID: 2463,
      Titel: "HP pavilion laptop",
      Beskrivning: "Snabb dator med stor hårddisk",
      StartDatum: "2018-07-01T10:43:00",
      SlutDatum: "2018-09-12T10:43:00",
      Gruppkod: 1040,
      Utropspris: 6400,
      SkapadAv: "samuelbering@hotmail.com"
    },
    {
      AuktionID: 2467,
      Titel: "Thomson platt-tv",
      Beskrivning: "Svart platt-tv ",
      StartDatum: "2017-09-12T10:56:00",
      SlutDatum: "2017-10-13T10:56:00",
      Gruppkod: 1040,
      Utropspris: 2700,
      SkapadAv: "admin@nackowskis.se"
    },
    {
      AuktionID: 2468,
      Titel: "Matsalsbord",
      Beskrivning: "Fint gammalt träbord",
      StartDatum: "2017-12-12T11:01:00",
      SlutDatum: "2017-12-18T11:01:00",
      Gruppkod: 1040,
      Utropspris: 1200,
      SkapadAv: "admin@nackowskis.se"
    },
    {
      AuktionID: 2501,
      Titel: "Stekpanna",
      Beskrivning: "fin gammal stekpanna",
      StartDatum: "2018-07-25T20:00:00",
      SlutDatum: "2018-09-13T09:00:00",
      Gruppkod: 1040,
      Utropspris: 500,
      SkapadAv: "admin@nackowskis.se"
    },
    {
      AuktionID: 2745,
      Titel: "Kaffekopp",
      Beskrivning: "Stilig kaffekopp",
      StartDatum: "2018-09-18T08:52:00",
      SlutDatum: "2018-09-18T08:54:00",
      Gruppkod: 1040,
      Utropspris: 99,
      SkapadAv: "admin@nackowskis.se"
    },
    {
      AuktionID: 2747,
      Titel: "Tavla",
      Beskrivning: "vacker tavla",
      StartDatum: "2018-04-18T09:08:00",
      SlutDatum: "2018-10-19T09:08:00",
      Gruppkod: 1040,
      Utropspris: 1300,
      SkapadAv: "fredrikholmlund@gmail.com"
    },
    {
      AuktionID: 2751,
      Titel: "Stol",
      Beskrivning: "Vacker stol",
      StartDatum: "2018-09-18T09:30:00",
      SlutDatum: "2018-09-28T09:30:00",
      Gruppkod: 1040,
      Utropspris: 200,
      SkapadAv: "lisasvanlund@gmail.com"
    }
  ]
};
