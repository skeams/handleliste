import { Kategorier } from "../Kategorier/Kategorier";
import { Vare } from "./VareListe";

export const frossen: Vare[] = [
  {
    kategori: Kategorier.Frossen,
    navn: "Pizza",
    vareId: `${Kategorier.Frossen.id}-1`,
  },
];
