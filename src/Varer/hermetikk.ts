import { Kategorier } from "../Kategorier/Kategorier";
import { Vare } from "./VareListe";

export const hermetikk: Vare[] = [
  {
    kategori: Kategorier.Hermetikk,
    navn: "Tomatbønner",
    vareId: `${Kategorier.Hermetikk.id}-1`,
  },
];
