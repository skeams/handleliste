import { Kategorier } from "../Kategorier/Kategorier";
import { Vare } from "./VareListe";

export const helse: Vare[] = [
  {
    kategori: Kategorier.HealthCare,
    navn: "Paracet",
    vareId: `${Kategorier.HealthCare.id}-1`,
  },
];
