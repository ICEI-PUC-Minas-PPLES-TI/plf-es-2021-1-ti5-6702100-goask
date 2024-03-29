import styled from "styled-components";
import theme from "src/share/styles/themes";

export const Container = styled.div`
  h1 {
    font-size: calc(
      35px + (50 - 35) *
        ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1399 - 320))
    );
    font-weight: bolder;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin: 50px 0 0 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  width: 30%;
  min-width: 170px;
  height: 170px;
  margin: 0 auto 15px 0;

  outline: none;
  cursor: pointer;
  border: 0px solid;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.borders.red};
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  padding: 22px 16px 16px 16px;
  transition-duration: 0.4s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    background-color: ${(props) => props.theme.colors.borders.green};
  }

  p {
    font-size: calc(
      16px + (23 - 16) *
        ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1399 - 320))
    );
    color: ${(props) => props.theme.colors.menuBackground};
    font-weight: bolder;
  }

  img {
    width: 30px;
    height: auto;
    position: relative;
    float: right;
  }

  @media (max-width: ${theme.breakpoint.lg}) {
    width: 30%;
  }
`;

export const FeaturesContainer = styled.div`
  width: 100%;
  margin: 50px 0 0 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  h6 {
    cursor: pointer;
  }
`;

export const FeaturesStatics = styled.div`
  width: 47%;
  min-width: 170px;
  height: 270px;
  border-radius: 30px;
  padding: 20px 50px;
  background-color: ${(props) => props.theme.colors.menuBackground};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: ${theme.breakpoint.lg}) {
    padding: 20px 15px;
  }
`;

export const FeaturesStaticsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-content: flex-start;
  margin: 0 0 5px 0;
  transition: 0.3s;
  word-break: break-all;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  img {
    border: 1px solid ${(props) => props.theme.colors.borders.red};
    border-radius: 15px;
    padding: 10px;
    width: 70px;
    height: auto;
    margin: auto 5px auto 0;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0 0 20px;
    h6 {
      font-size: calc(
        18px + (24 - 18) *
          ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1399 - 320))
      );
      color: ${(props) => props.theme.colors.borders.red};
      font-weight: bolder;
      margin: 0 0 3px 0;
    }

    p {
      margin: 0px;
      font-size: calc(
        12px + (15 - 12) *
          ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1399 - 320))
      );
      color: ${(props) => props.theme.colors.menuGrey};
      font-weight: bolder;
    }
  }
`;

export const FeaturesBeginQuiz = styled.div`
  padding: 40px 50px;
  width: 47%;
  min-width: 170px;
  height: 270px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.background};

  a {
    text-decoration: none;
  }

  button {
    width: 100%;
    min-width: 120px;
    margin: 15% auto;

    outline: none;
    cursor: pointer;
    border: 0px solid;
    border-radius: 15px;
    background-color: ${(props) => props.theme.colors.borders.red};
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    padding: 12px 8px 8px 8px;
    transition-duration: 0.4s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    &:hover {
      background-color: ${(props) => props.theme.colors.borders.green};
    }

    p {
      font-size: calc(
        14px + (18 - 14) *
          ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1399 - 320))
      );
      color: ${(props) => props.theme.colors.menuBackground};
      font-weight: bolder;
    }

    span {
      margin: auto 0;
      padding: 0 0 0 10px;
    }

    img {
      width: 30px;
      height: auto;
    }
  }
  @media (max-width: ${theme.breakpoint.lg}) {
    margin: 15px 0 0 0;
    padding: 20px 15px 0 15px;
  }
`;

export const FeaturesInput = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};
  p {
    font-size: calc(
      16px + (23 - 16) *
        ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1399 - 320))
    );
    color: ${(props) => props.theme.colors.menuBackground};
    font-weight: bolder;
  }

  img {
    width: 40px;
    height: auto;
    position: relative;
    float: right;
  }
`;

export const InputIcon = styled.span`
  padding: 10px;
`;

export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid;
  border-color: ${(props) => props.theme.colors.borders.red};

  input {
    width: 100%;
    height: 30px;
    font-weight: 400;
    font-size: calc(
      17px + (24 - 17) *
        ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1399 - 320))
    );
    color: ${(props) => props.theme.colors.borders.red};
    border: none;
  }

  input:focus {
    outline: none;
  }
`;
