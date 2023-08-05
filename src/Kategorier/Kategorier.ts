/**
 * Tar kategori-inspirasjon fra "Common grocery list categories":
 * https://www.instacart.com/company/ideas/grocery-list-categories/
 * og
 * https://www.ziplist.com/grocery-list-template/categories
 * 
 * Frukt, Grønnsaker, Hermetikk, Meieri, Fisk, Krydder, Snax, Bakevarer, 
 * Drikker, Pasta/Ris/Gryn, Baking, Frossen mat, Personal Care, Health care,
 * husholdningsting og vasketing, barnetng, dyreting
 */

export interface Kategori {
  tittel: string;
  farge: string;
  id: string;
}

const Frukt: Kategori = {
  tittel: "Frukt",
  farge: "lightgreen",
  id: "fr",
};

const Grønnsaker: Kategori = {
  tittel: "Grønnsaker",
  farge: "red",
  id: "gr",
};

const Kjøtt: Kategori = {
  tittel: "Kjøtt",
  farge: "purple",
  id: "kj",
};

const Fisk: Kategori = {
  tittel: "Fisk",
  farge: "blue",
  id: "fi",
};

const Brød: Kategori = {
  tittel: "Brød",
  farge: "orange",
  id: "br",
};

const Meieri: Kategori = {
  tittel: "Meieri",
  farge: "pink",
  id: "me",
};

const Hermetikk: Kategori = {
  tittel: "Hermetikk",
  farge: "red",
  id: "he",
};

const SausOljer: Kategori = {
  tittel: "SausOljer",
  farge: "yellow",
  id: "ol",
};

const Snack: Kategori = {
  tittel: "Snack",
  farge: "orange",
  id: "sn",
};

const Krydder: Kategori = {
  tittel: "Krydder",
  farge: "brown",
  id: "kr",
};

const Husholdning: Kategori = {
  tittel: "Husholdning",
  farge: "blue",
  id: "hu",
};

const Baking: Kategori = {
  tittel: "Baking",
  farge: "orange",
  id: "ba",
};

const Frossen: Kategori = {
  tittel: "Frossen",
  farge: "lightblue",
  id: "fz",
};

const PastaRis: Kategori = {
  tittel: "PastaRis",
  farge: "lightgrey",
  id: "pa",
};

const Personlig: Kategori = {
  tittel: "Personlig",
  farge: "pink",
  id: "pc",
};

const Helse: Kategori = {
  tittel: "Helse",
  farge: "red",
  id: "hc",
};

const Drikke: Kategori = {
  tittel: "Drikke",
  farge: "grey",
  id: "dr",
};

const Cart: Kategori = {
  tittel: "Cart",
  farge: "black",
  id: "cart"
};

export const Kategorier = {
  Frukt,
  Grønnsaker,
  Kjøtt,
  Fisk,
  Meieri,
  Brød,
  Frossen,
  Baking,
  Hermetikk,
  SausOljer,
  Snack,
  Krydder,
  Husholdning,
  PastaRis,
  Personlig,
  Helse,
  Drikke,
  Cart
};
