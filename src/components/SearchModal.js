import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  background-color: #fefefe;
  margin: 100px 145px 0 100px;
  height: 70%;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 5px;
`;

const StyledModal = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
`;

const SearchModal = ({ visible, setShowModal }) => {
  return (
    <StyledModal visible={visible} onClick={() => setShowModal(false)}>
      <Content>Test</Content>
    </StyledModal>
  );
};

export default SearchModal;
