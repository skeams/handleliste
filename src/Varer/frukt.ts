import { Kategorier } from "../Kategorier/Kategorier";
import { Vare } from "./VareListe";

export const frukt: Vare[] = [
  {
    kategori: Kategorier.Frukt,
    navn: "Eple",
    vareId: `${Kategorier.Frukt.id}-1`,
  },
];
