import { Kategorier } from "../Kategorier/Kategorier";
import { Vare } from "./VareListe";

export const personlig: Vare[] = [
  {
    kategori: Kategorier.Personlig,
    navn: "Sjampo",
    vareId: `${Kategorier.Personlig.id}-1`,
  },
];
