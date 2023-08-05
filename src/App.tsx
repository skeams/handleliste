import React, { useState } from 'react';
import { styled } from 'styled-components';
// import { filtrerListe, filtrerMineValgteVarer, hentDefaultVareliste } from './Varer/vareliste.util';
import { Kategorier } from './Kategorier/Kategorier';
import { VareKort } from './Komponenter/VareKort';
import { KategoriKnapp } from './Komponenter/KategoriKnapp';
import { Vare, hentAlleVarer } from './Varer/VareListe';

const PageWrapper = styled.div`
  background-color: #E6F7E7;
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  margin-bottom: 60px;
  flex-direction: column;
  text-align: center;
`;

const VareListe = styled.div`
  flex-wrap: wrap;
  display: flex;
`;

const Meny = styled.div`
  // height: 100px;
  position: fixed;
  width: 100%;
  bottom: 0px;
  z-index: 100;
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid lightgray;
`;

const HandlelisteApp = (): JSX.Element => {
  const varer = hentAlleVarer();

  // const [varer, set] = useState(hentDefaultVareliste);
  const [valgtKategori, setValgtKategori] = useState(Kategorier.Frukt);


  let filtrertListe: Vare[] = [];
  if(valgtKategori.tittel === Kategorier.Cart.tittel){
    // filtrertListe = filtrerMineValgteVarer(liste);
  } else {
    filtrertListe = varer.filter(vare => vare.kategori.id === valgtKategori.id);
  }

  return (
    <PageWrapper>
      <VareListe>
        {filtrertListe.map((vare) => (
          <VareKort
            key={vare.vareId}
            farge={vare.kategori.farge}
            tekst={vare.navn}
          />
        ))}
      </VareListe>
       <Meny>
        {Object.values(Kategorier).map((kategori) => (
          <KategoriKnapp
            key={kategori.id}
            onClick={() => setValgtKategori(kategori)}
            farge={kategori.farge}
            tittel={kategori.tittel}
          />
        ))}
      </Meny>
    </PageWrapper>
  );
}

export default HandlelisteApp;
