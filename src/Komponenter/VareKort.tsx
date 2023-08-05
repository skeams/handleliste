import React from 'react';
import { styled } from 'styled-components';

interface IKort {
  farge: string;
}

const IconWrapper = styled.img`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
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
  background-color: ${({ farge }) => (farge ? farge : `#C4C4C4`)};
  max-height: 70px;
  max-width: 70px;
  min-height: 70px;
  min-width: 70px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
`;

interface IVarekort {
  tekst: string;
  bilde?: HTMLImageElement;
  farge: string;
  antall?: number;
}

export const VareKort: React.FC<IVarekort> = ({
  tekst,
  farge,
  antall = 0,
}): JSX.Element => (
  <Kort farge={farge}>
    <IconWrapper />
    <VareNavn>
      {tekst}
    </VareNavn>
  </Kort>
);
