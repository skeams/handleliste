import { Kategorier } from "../Kategorier/Kategorier";
import { Vare } from "./VareListe";

export const brød: Vare[] = [
  {
    kategori: Kategorier.Brød,
    navn: "Loff",
    vareId: `${Kategorier.Brød.id}-1`,
  },
];
