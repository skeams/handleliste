import React, { useState } from 'react';
import { styled } from 'styled-components';
import { filtrerListe, filtrerMineValgteVarer, hentDefaultVareliste } from './Varer/vareliste.util';
import { Kategori } from './Varer/VareListe';

const PageWrapper = styled.div`
  background-color: #2C4C66;
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  margin-bottom: 60px;
  flex-direction: column;
  font-size: 20px;
  font-family: "Arial";
`;

const VareWrapper = styled.div`
  background-color: ${({ farge }) => (farge ? farge : `#C4C4C4`)};
  height: 40px;
  display: flex;
  margin: 5px 10px;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
`;

const IconWrapper = styled.img`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
`;

const VareNavn = styled.p`
  margin: 0;
  padding-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Pluss = styled.button`
  width: 40px;
  height: 40px;
  color: green;
  font-size: 32px;
  margin-right: 10px;
  background: transparent;
  border-radius: 50%;
  border: 2px solid green;
`;

const Minus = styled.button`
  width: 40px;
  height: 40px;
  color: red;
  font-size: 32px;
  background: transparent;
  border-radius: 50%;
  border: 2px solid red;
`;

const Antall = styled.p`
  margin-right: 10px;
`;

const RightWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const Meny = styled.div`
  height: 100px;
  position: fixed;
  width: 100%;
  bottom: 0px;
  z-index: 100;
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid lightgray;
`;

const KategoriKnapp = styled.button`
  height: 50px;
  width: 16%;
  flex: 1 0 16%;
  white-space: nowrap;
  text-overflow: ellipsis;
  border: none;
  background-color: #2C4C66;
  color: ${({ farge }) => (farge ? farge : `#C4C4C4`)};
`;

const HandlelisteApp = () => {
  const [liste, setListe] = useState(hentDefaultVareliste);
  const [valgtKategori, setValgtKategori] = useState(Kategori.Frukt);

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

  return (
    <PageWrapper>
      {filtrertListe.map(([id, vare]) => (
        <VareWrapper
          key={`vare-${id}`}
          farge={vare.kategori.farge}
        >
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
      ))}
       <Meny>
        {Object.values(Kategori).map((kategori) => (
          <KategoriKnapp
            key={`kat-${kategori.tittel}`}
            onClick={() => setValgtKategori(kategori)}
            farge={kategori.farge}
          >
            {kategori.tittel}
          </KategoriKnapp>
        ))}
      </Meny>
    </PageWrapper>
  );
}

export default HandlelisteApp;
