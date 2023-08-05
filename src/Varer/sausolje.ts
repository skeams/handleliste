import { Kategorier } from "../Kategorier/Kategorier";
import { Vare } from "./VareListe";

export const sausolje: Vare[] = [
  {
    kategori: Kategorier.SausOljer,
    navn: "Soyasaus",
    vareId: `${Kategorier.SausOljer.id}-1`,
  },
];
