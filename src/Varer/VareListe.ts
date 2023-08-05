import { Kategori } from "../Kategorier/Kategorier";
import { baking } from "./baking";
import { brød } from "./brød";
import { drikke } from "./drikke";
import { fisk } from "./fisk";
import { frossen } from "./frossen";
import { frukt } from "./frukt";
import { grønnsaker } from "./grønnsaker";
import { helse } from "./helse";
import { hermetikk } from "./hermetikk";
import { husholdning } from "./husholdning";
import { kjøtt } from "./kjøtt";
import { krydder } from "./krydder";
import { meieri } from "./meieri";
import { pastaris } from "./pastaris";
import { personlig } from "./personlig";
import { sausolje } from "./sausolje";
import { snack } from "./snack";

export interface Vare {
  vareId: string;
  navn: string;
  kategori: Kategori;
  bilde?: any;
  antall?: number;
}

export const hentAlleVarer = (): Vare[] => {
  return [
    ...frukt,
    ...grønnsaker,
    ...kjøtt,
    ...fisk,
    ...meieri,
    ...brød,
    ...frossen,
    ...baking,
    ...hermetikk,
    ...sausolje,
    ...snack,
    ...krydder,
    ...husholdning,
    ...pastaris,
    ...personlig,
    ...helse,
    ...drikke,
  ];
}