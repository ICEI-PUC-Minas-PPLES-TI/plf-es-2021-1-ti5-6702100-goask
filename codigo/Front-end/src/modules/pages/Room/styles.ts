import styled from "styled-components";

export const Container = styled.div`
  background-color: #e5e5e5;
  min-height: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
export const SubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  width: auto;

  h1 {
    margin: 0px;
    font-size: calc(
      35px + (45 - 35) *
        ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1399 - 320))
    );
  }
`;

export const ButtonContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-end;

  & > button:first-child {
    color: ${(props) => props.theme.colors.borders.red};
    border: none;
    background: transparent;
    margin: 0 10px 0 0;
    background-color: white;
    transition-duration: 0.4s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    &:hover {
      background-color: ${(props) => props.theme.colors.borders.green};
      color: white;
      border: none;
    }
  }

  & > button:nth-child(2n) {
    background-color: ${(props) => props.theme.colors.borders.red};
    border: 2px solid transparent;
    color: white;
    transition-duration: 0.4s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    &:hover {
      background-color: ${(props) => props.theme.colors.borders.green};
    }
  }
`;

export const Button = styled.button`
  min-width: 200px;
  width: 100%;
  max-width: 220px;
  height: 60px;
  border-radius: 15px;
  cursor: pointer;

  p {
    margin: 0px;
    font-size: calc(
      16px + (23 - 16) *
        ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1399 - 320))
    );
  }
`;

export const TextContainer = styled.div`
  background-color: #fff;
  padding: 5px 30px 10px;
  max-width: 70%;
  text-align: center;
  border-radius: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  p {
    width: 100%;
    text-align: center;
  }

  h2 {
    width: 100%;
    text-align: center;
    color: ${(props) => props.theme.colors.borders.red};
    font-weight: 700;
  }
`;