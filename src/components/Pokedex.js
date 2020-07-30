import React from 'react';

import styled from 'styled-components';

const CenterH1 = styled.h1`
  text-align: center;
`;

const BottomMenuWrapper = styled.div`
  background: #ec5656;
  width: 100%;
  height: 75px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
`;

const AddMenuWrapper = styled.div`
  background: #ec5656;
  border-radius: 100%;
  width: 100px;
  height: 100px;
  position: relative;
  bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 5em;
`;

const BottomMenu = ({ setShowModal }) => (
  <BottomMenuWrapper>
    <AddMenuWrapper onClick={() => setShowModal(true)}>+</AddMenuWrapper>
  </BottomMenuWrapper>
);

const Pokedex = ({ setShowModal }) => {
  return (
    <>
      <CenterH1>My Pokedex</CenterH1>
      <BottomMenu setShowModal={setShowModal} />
    </>
  );
};

export default Pokedex;
