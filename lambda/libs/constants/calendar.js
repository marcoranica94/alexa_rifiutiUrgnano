const rifiuti = require('./rifiuti').default;

const calendar = new Map();

/* GENNAIO */
calendar.set("02/01/2019", [rifiuti.IND]);
calendar.set("03/01/2019", [rifiuti.CAR]);
calendar.set("04/01/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("07/01/2019", [rifiuti.ORG]);
calendar.set("09/01/2019", [rifiuti.VL]);
calendar.set("10/01/2019", [rifiuti.CAR]);
calendar.set("11/01/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("14/01/2019", [rifiuti.ORG]);
calendar.set("17/01/2019", [rifiuti.CAR]);
calendar.set("18/01/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("21/01/2019", [rifiuti.ORG]);
calendar.set("23/01/2019", [rifiuti.VL]);
calendar.set("24/01/2019", [rifiuti.CAR]);
calendar.set("25/01/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("28/01/2019", [rifiuti.ORG]);
calendar.set("31/01/2019", [rifiuti.CAR]);

/* FEBBARIO */

calendar.set("01/02/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("04/02/2019", [rifiuti.ORG]);
calendar.set("05/02/2019", [rifiuti.IND]);
calendar.set("06/02/2019", [rifiuti.VL]);
calendar.set("07/02/2019", [rifiuti.CAR]);
calendar.set("08/02/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("11/02/2019", [rifiuti.ORG]);
calendar.set("14/02/2019", [rifiuti.CAR]);
calendar.set("15/02/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("18/02/2019", [rifiuti.ORG]);
calendar.set("20/02/2019", [rifiuti.VL]);
calendar.set("21/02/2019", [rifiuti.CAR]);
calendar.set("22/02/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("25/02/2019", [rifiuti.ORG]);
calendar.set("28/02/2019", [rifiuti.CAR]);

/* MARZO */

calendar.set("01/03/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("04/03/2019", [rifiuti.ORG]);
calendar.set("05/03/2019", [rifiuti.IND]);
calendar.set("06/03/2019", [rifiuti.VL]);
calendar.set("07/03/2019", [rifiuti.CAR]);
calendar.set("08/03/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("11/03/2019", [rifiuti.ORG]);
calendar.set("14/03/2019", [rifiuti.CAR]);
calendar.set("15/03/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("18/03/2019", [rifiuti.ORG]);
calendar.set("20/03/2019", [rifiuti.VL]);
calendar.set("21/03/2019", [rifiuti.CAR]);
calendar.set("22/03/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("25/03/2019", [rifiuti.ORG]);
calendar.set("28/03/2019", [rifiuti.CAR]);
calendar.set("29/03/2019", [rifiuti.PLA, rifiuti.SEC]);

/* APRILE */

calendar.set("01/04/2019", [rifiuti.ORG]);
calendar.set("02/04/2019", [rifiuti.IND]);
calendar.set("03/04/2019", [rifiuti.VL]);
calendar.set("04/04/2019", [rifiuti.CAR]);
calendar.set("05/04/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("08/04/2019", [rifiuti.ORG]);
calendar.set("11/04/2019", [rifiuti.CAR]);
calendar.set("12/04/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("15/04/2019", [rifiuti.ORG]);
calendar.set("17/04/2019", [rifiuti.VL]);
calendar.set("18/04/2019", [rifiuti.CAR]);
calendar.set("19/04/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);
calendar.set("23/04/2019", [rifiuti.ORG]);
calendar.set("24/04/2019", [rifiuti.CAR]);
calendar.set("26/04/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);
calendar.set("29/04/2019", [rifiuti.ORG]);
calendar.set("30/04/2019", [rifiuti.VL]);

/* MAGGIO */

calendar.set("02/05/2019", [rifiuti.CAR]);
calendar.set("03/05/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);
calendar.set("06/05/2019", [rifiuti.ORG]);
calendar.set("07/05/2019", [rifiuti.IND]);
calendar.set("09/05/2019", [rifiuti.CAR]);
calendar.set("10/05/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);
calendar.set("13/05/2019", [rifiuti.ORG]);
calendar.set("15/05/2019", [rifiuti.VL]);
calendar.set("16/05/2019", [rifiuti.CAR]);
calendar.set("17/05/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);
calendar.set("20/05/2019", [rifiuti.ORG]);
calendar.set("23/05/2019", [rifiuti.CAR]);
calendar.set("24/05/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);
calendar.set("27/05/2019", [rifiuti.ORG]);
calendar.set("29/05/2019", [rifiuti.VL]);
calendar.set("30/05/2019", [rifiuti.CAR]);
calendar.set("31/05/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);

/* GIUGNO */

calendar.set("03/06/2019", [rifiuti.ORG]);
calendar.set("04/06/2019", [rifiuti.IND]);
calendar.set("06/06/2019", [rifiuti.CAR]);
calendar.set("07/06/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);
calendar.set("10/06/2019", [rifiuti.ORG]);
calendar.set("12/06/2019", [rifiuti.VL]);
calendar.set("13/06/2019", [rifiuti.CAR]);
calendar.set("14/06/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);
calendar.set("17/06/2019", [rifiuti.ORG]);
calendar.set("20/06/2019", [rifiuti.CAR]);
calendar.set("21/06/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);
calendar.set("24/06/2019", [rifiuti.ORG]);
calendar.set("26/06/2019", [rifiuti.VL]);
calendar.set("27/06/2019", [rifiuti.CAR]);
calendar.set("28/06/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);

/* LUGLIO */

calendar.set("01/07/2019", [rifiuti.ORG]);
calendar.set("02/07/2019", [rifiuti.IND]);
calendar.set("04/07/2019", [rifiuti.CAR]);
calendar.set("05/07/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);
calendar.set("08/07/2019", [rifiuti.ORG]);
calendar.set("10/07/2019", [rifiuti.VL]);
calendar.set("11/07/2019", [rifiuti.CAR]);
calendar.set("12/07/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);
calendar.set("15/07/2019", [rifiuti.ORG]);
calendar.set("18/07/2019", [rifiuti.CAR]);
calendar.set("19/07/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);
calendar.set("22/07/2019", [rifiuti.ORG]);
calendar.set("24/07/2019", [rifiuti.VL]);
calendar.set("25/07/2019", [rifiuti.CAR]);
calendar.set("26/07/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);
calendar.set("29/07/2019", [rifiuti.ORG]);

/* AGOSTO */

calendar.set("01/08/2019", [rifiuti.CAR]);
calendar.set("02/08/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);
calendar.set("05/08/2019", [rifiuti.ORG]);
calendar.set("06/08/2019", [rifiuti.IND]);
calendar.set("07/08/2019", [rifiuti.VL]);
calendar.set("08/08/2019", [rifiuti.CAR]);
calendar.set("09/08/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);
calendar.set("12/08/2019", [rifiuti.ORG]);
calendar.set("14/08/2019", [rifiuti.CAR]);
calendar.set("16/08/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);
calendar.set("19/08/2019", [rifiuti.ORG]);
calendar.set("21/08/2019", [rifiuti.VL]);
calendar.set("22/08/2019", [rifiuti.CAR]);
calendar.set("23/08/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);
calendar.set("26/08/2019", [rifiuti.ORG]);
calendar.set("29/08/2019", [rifiuti.CAR]);
calendar.set("30/08/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);

/* SETTEMBRE */

calendar.set("02/09/2019", [rifiuti.ORG]);
calendar.set("03/09/2019", [rifiuti.IND]);
calendar.set("04/09/2019", [rifiuti.VL]);
calendar.set("05/09/2019", [rifiuti.CAR]);
calendar.set("06/09/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);
calendar.set("09/09/2019", [rifiuti.ORG]);
calendar.set("12/09/2019", [rifiuti.CAR]);
calendar.set("13/09/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);
calendar.set("16/09/2019", [rifiuti.ORG]);
calendar.set("18/09/2019", [rifiuti.VL]);
calendar.set("19/09/2019", [rifiuti.CAR]);
calendar.set("20/09/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);
calendar.set("23/09/2019", [rifiuti.ORG]);
calendar.set("26/09/2019", [rifiuti.CAR]);
calendar.set("27/09/2019", [rifiuti.PLA, rifiuti.SEC, rifiuti.ORG]);
calendar.set("30/09/2019", [rifiuti.ORG]);

/* OTTOBRE */

calendar.set("01/10/2019", [rifiuti.IND]);
calendar.set("02/10/2019", [rifiuti.VL]);
calendar.set("03/10/2019", [rifiuti.CAR]);
calendar.set("04/10/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("07/10/2019", [rifiuti.ORG]);
calendar.set("10/10/2019", [rifiuti.CAR]);
calendar.set("11/10/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("14/10/2019", [rifiuti.ORG]);
calendar.set("16/10/2019", [rifiuti.VL]);
calendar.set("17/10/2019", [rifiuti.CAR]);
calendar.set("18/10/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("21/10/2019", [rifiuti.ORG]);
calendar.set("24/10/2019", [rifiuti.CAR]);
calendar.set("25/10/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("28/10/2019", [rifiuti.ORG]);
calendar.set("30/10/2019", [rifiuti.VL]);
calendar.set("31/10/2019", [rifiuti.CAR]);

/* NOVEMBRE */

calendar.set("02/11/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("04/11/2019", [rifiuti.ORG]);
calendar.set("05/11/2019", [rifiuti.IND]);
calendar.set("07/11/2019", [rifiuti.CAR]);
calendar.set("08/11/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("11/11/2019", [rifiuti.ORG]);
calendar.set("13/11/2019", [rifiuti.VL]);
calendar.set("14/11/2019", [rifiuti.CAR]);
calendar.set("15/11/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("18/11/2019", [rifiuti.ORG]);
calendar.set("21/11/2019", [rifiuti.CAR]);
calendar.set("22/11/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("25/11/2019", [rifiuti.ORG]);
calendar.set("27/11/2019", [rifiuti.VL]);
calendar.set("28/11/2019", [rifiuti.CAR]);
calendar.set("29/11/2019", [rifiuti.PLA, rifiuti.SEC]);

/* DICEMBRE */

calendar.set("02/12/2019", [rifiuti.ORG]);
calendar.set("03/12/2019", [rifiuti.IND]);
calendar.set("05/12/2019", [rifiuti.CAR]);
calendar.set("06/12/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("09/12/2019", [rifiuti.ORG]);
calendar.set("11/12/2019", [rifiuti.VL]);
calendar.set("12/12/2019", [rifiuti.CAR]);
calendar.set("13/12/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("16/12/2019", [rifiuti.ORG]);
calendar.set("19/12/2019", [rifiuti.CAR]);
calendar.set("20/12/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("23/12/2019", [rifiuti.ORG]);
calendar.set("24/12/2019", [rifiuti.VL]);
calendar.set("26/12/2019", [rifiuti.CAR]);
calendar.set("27/12/2019", [rifiuti.PLA, rifiuti.SEC]);
calendar.set("30/12/2019", [rifiuti.ORG]);

module.exports = calendar;
