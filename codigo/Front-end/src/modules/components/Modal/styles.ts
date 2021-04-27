import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 500;
`;

export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  border-radius: 13px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const HeaderText = styled.div`
  color: #fff;
  align-self: center;
  color: #c9515c;
  font-size: 25px;
  font-weight: 800;
`;

export const CloseButton = styled.button`
  font-size: 0.8rem;
  border: none;
  border-radius: 3px;
  background: none;
  :hover {
    cursor: pointer;
    color: #26265e;
  }
  color: #c9515c;
  font-size: 25px;
  font-weight: 800;
`;

export const Content = styled.div`
  padding: 10px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`;
