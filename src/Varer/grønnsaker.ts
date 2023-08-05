import { Kategorier } from "../Kategorier/Kategorier";
import { Vare } from "./VareListe";

export const grønnsaker: Vare[] = [
  {
    kategori: Kategorier.Grønnsaker,
    navn: "Gulrot",
    vareId: `${Kategorier.Grønnsaker.id}-1`,
  },
  {
    kategori: Kategorier.Grønnsaker,
    navn: "Hodekål",
    vareId: `${Kategorier.Grønnsaker.id}-2`,
  },
];
