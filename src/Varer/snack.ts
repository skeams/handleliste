import { Kategorier } from "../Kategorier/Kategorier";
import { Vare } from "./VareListe";

export const snack: Vare[] = [
  {
    kategori: Kategorier.Snack,
    navn: "Pringles",
    vareId: `${Kategorier.Snack.id}-1`,
  },
];
