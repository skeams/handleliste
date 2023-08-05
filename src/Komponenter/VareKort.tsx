import React from 'react';
import { styled } from 'styled-components';

interface IKort {
  farge: string;
}

const IconWrapper = styled.img`
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-height: 60px;
`;

const VareNavn = styled.p`
  margin: 0;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: "Arial";
`;

const Kort = styled.div<IKort>`
  background-color: white;
  max-height: 70px;
  max-width: 70px;
  min-height: 70px;
  min-width: 70px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid ${({ farge }) => (farge ? farge : `#C4C4C4`)};
  align-items: center;
`;

interface IVarekort {
  tekst: string;
  bilde?: any;
  farge: string;
  antall?: number;
}

export const VareKort: React.FC<IVarekort> = ({
  tekst,
  farge,
  bilde,
  antall = 0,
}): JSX.Element => (
  <Kort farge={farge}>
    <IconWrapper src={bilde} />
    <VareNavn>
      {tekst}
    </VareNavn>
  </Kort>
);
