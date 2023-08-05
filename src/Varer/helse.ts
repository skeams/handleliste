import { Kategorier } from "../Kategorier/Kategorier";
import { Vare } from "./VareListe";

export const helse: Vare[] = [
  {
    kategori: Kategorier.Helse,
    navn: "Paracet",
    vareId: `${Kategorier.Helse.id}-1`,
  },
];
