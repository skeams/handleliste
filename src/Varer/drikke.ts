import { Kategorier } from "../Kategorier/Kategorier";
import { Vare } from "./VareListe";

export const drikke: Vare[] = [
  {
    kategori: Kategorier.Drikke,
    navn: "Coca Cola",
    vareId: `${Kategorier.Drikke.id}-1`,
  },
];
