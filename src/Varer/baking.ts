import { Kategorier } from "../Kategorier/Kategorier";
import { Vare } from "./VareListe";

export const baking: Vare[] = [
  {
    kategori: Kategorier.Baking,
    navn: "Hvetemel",
    vareId: `${Kategorier.Baking.id}-1`,
  },
];
