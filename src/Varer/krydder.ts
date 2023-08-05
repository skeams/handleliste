import { Kategorier } from "../Kategorier/Kategorier";
import { Vare } from "./VareListe";

export const krydder: Vare[] = [
  {
    kategori: Kategorier.Krydder,
    navn: "Kanel",
    vareId: `${Kategorier.Krydder.id}-1`,
  },
];
