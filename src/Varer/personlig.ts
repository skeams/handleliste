import { Kategorier } from "../Kategorier/Kategorier";
import { Vare } from "./VareListe";

export const personlig: Vare[] = [
  {
    kategori: Kategorier.PersonalCare,
    navn: "Sjampo",
    vareId: `${Kategorier.PersonalCare.id}-1`,
  },
];
