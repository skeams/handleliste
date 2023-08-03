import React, { useState } from 'react';
import { styled } from 'styled-components';
import { filtrerListe, filtrerMineValgteVarer, hentDefaultVareliste } from './Varer/vareliste.util';
import { Kategori } from './Varer/VareListe';

const PageWrapper = styled.div`
  background-color: #f96449;
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const VareWrapper = styled.div`
    background-color: ${({farge}) => (farge ? farge : `#C4C4C4`)};
    height: 40px;
    display: flex;
    margin: 10px;
    padding: 10px;
    align-items: center;
`;

const IconWrapper = styled.img`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
`;

const VareNavn = styled.p`
  font-size: 24px;
  font-family: "Calibri";
  margin: 0;
  padding-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Pluss = styled.button`
  width: 44px;
  height: 44px;
  margin-right: 10px;
`;

const Minus = styled.button`
  width: 44px;
  height: 44px;
`;

const Antall = styled.p`
  margin-right: 10px;
`;

const RightWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const Filter = styled.div``;
const KategoriKnapp = styled.button``;

const HandlelisteApp = () => {
  const [liste, setListe] = useState(hentDefaultVareliste);
  const [valgtKategori, setValgtKategori] = useState(Kategori.FruktOgGrønt);

  const leggTil = (id) => {
    const oppdatertVare = liste[id];
    oppdatertVare.antall += 1;
    const oppdatertListe = {
      ...liste,
      [id]: oppdatertVare, 
    };
    setListe(oppdatertListe);
  }

  const trekkFra = (id) => {
    const oppdatertVare = liste[id];
    
    if (oppdatertVare.antall <= 0){
      return;
    }

    oppdatertVare.antall -= 1;
    const oppdatertListe = {
      ...liste,
      [id]: oppdatertVare, 
    };
    setListe(oppdatertListe);
  }
  let filtrertListe;
  if(valgtKategori.tittel === Kategori.Handlevogn.tittel){
    filtrertListe = filtrerMineValgteVarer(liste);
  } else {
    filtrertListe = filtrerListe(liste, valgtKategori);
  }
  console.log(filtrertListe);
  return (
    <PageWrapper>
      <Filter>
          {Object.values(Kategori).map((kategori) => (
            <KategoriKnapp key={Kategori.tittel} onClick={() => setValgtKategori(kategori)}>{kategori.tittel}</KategoriKnapp>
        ))}
      </Filter>
      {filtrertListe.map(([id, vare]) => (
        <div key={`Vare-${id}`}>
          <VareWrapper farge={vare.kategori.farge}>
            <IconWrapper />
            <VareNavn>
              {vare.navn}
            </VareNavn>
            <RightWrapper>
            <Antall>{vare.antall}</Antall>
            <Pluss onClick={() => leggTil(id)}>
              +
            </Pluss>
            <Minus onClick={() => trekkFra(id)}>
              -
            </Minus>
            </RightWrapper>
          </VareWrapper>
          
        </div>
      ))}
    </PageWrapper>
  );
}

export default HandlelisteApp;
