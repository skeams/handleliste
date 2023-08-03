import { vareliste } from "./VareListe"

export const hentDefaultVareliste = () => {
  var defaultListe = vareliste;
  Object.values(defaultListe).forEach((vare) => {
    vare.antall = 0;
  });
  return defaultListe;
}

export const filtrerListe = (liste, kategori) => {
  return Object.entries(liste)
    .filter(([id, vare]) => {
      return kategori.tittel === vare.kategori.tittel;
    });
}

export const filtrerMineValgteVarer = (liste) => {
  return Object.entries(liste)
    .filter(([id, vare]) => {
      return vare.antall > 0;
    });
}