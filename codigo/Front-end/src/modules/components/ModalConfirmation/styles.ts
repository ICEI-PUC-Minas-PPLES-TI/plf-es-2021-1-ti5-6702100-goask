import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  @media (min-width: 768px) {
    width: 60%;
  }
  @media (min-width: 1024px) {
    width: 40%;
  }
`;

export const ConfirmationButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 15px;

  button {
    border: solid 3px #c9515c;
    font-weight: 700;
    font-size: 1rem;
    background-color: #c9515c;
    color: white;

    &:hover {
      cursor: pointer;
      background-color: #fff;
      color: #c9515c;
    }
  }
`;

export const Message = styled.div`
  font-size: 1rem;
  margin: 5px 10px;
  text-align: center;
`;

export const YesButton = styled.button`
  width: 40%;
  height: 30px;
`;

export const NoButton = styled.button`
  width: 40%;
  margin-left: 10px;
  height: 30px;
`;
