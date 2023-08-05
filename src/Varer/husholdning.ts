import { Kategorier } from "../Kategorier/Kategorier";
import { Vare } from "./VareListe";

export const husholdning: Vare[] = [
  {
    kategori: Kategorier.Husholdning,
    navn: "Bakepapir",
    vareId: `${Kategorier.Husholdning.id}-1`,
  },
];
