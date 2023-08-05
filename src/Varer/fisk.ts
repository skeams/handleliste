import { Kategorier } from "../Kategorier/Kategorier";
import { Vare } from "./VareListe";

export const fisk: Vare[] = [
  {
    kategori: Kategorier.Fisk,
    navn: "Laksefilet",
    vareId: `${Kategorier.Fisk.id}-1`,
  },
];
