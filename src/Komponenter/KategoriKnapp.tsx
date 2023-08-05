import React from 'react';
import { styled } from 'styled-components';

interface IKnapp {
  farge: string;
}

const Knapp = styled.button<IKnapp>`
  height: 50px;
  width: 16%;
  flex: 1 0 16%;
  white-space: nowrap;
  text-overflow: ellipsis;
  border: none;
  background-color: #F1F6FD;
  color: ${({ farge }) => (farge ? farge : `#C4C4C4`)};
`;

interface IKategoriKnapp {
  tittel: string;
  farge: string;
  onClick: () => void;
}

export const KategoriKnapp: React.FC<IKategoriKnapp> = ({
  tittel,
  farge,
  onClick,
}): JSX.Element => (
  <Knapp
    onClick={onClick}
    farge={farge}
  >
    {tittel}
  </Knapp>
);
