import { Kategorier } from "../Kategorier/Kategorier";
import { Vare } from "./VareListe";

export const kjøtt: Vare[] = [
  {
    kategori: Kategorier.Kjøtt,
    navn: "Kjøttdeig",
    vareId: `${Kategorier.Kjøtt.id}-1`,
  },
];
