import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
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

export const UserStaticsContainer = styled.div`
  margin: 20px 0px;
  padding: 40px 30px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.menuBackground};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  display: flex;
  align-content: center;
`;

export const UserImageContainer = styled.div`
  padding: 0 20px 0 0;
  img {
    width: 170px;
    height: auto;
  }
`;

export const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  h1 {
    margin: 0px;
    font-size: calc(
      30px + (36 - 30) *
        ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1399 - 320))
    );
  }

  h6 {
    margin: 5px 0 0 0;
    font-size: calc(
      15px + (18 - 15) *
        ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1399 - 320))
    );
    color: ${(props) => props.theme.colors.menuGrey};
  }

  img {
    margin: 0 0 0 20px;
    width: 25px;
    height: auto;
  }
`;

export const UserIdentityContainer = styled.div``;

export const UserStaticsDetailsContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const FeaturesStaticsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 31%;
  justify-content: flex-start;
  align-content: flex-start;
  margin: 0 0 5px 0;

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

export const SubToolsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    width: 48%;
    border-radius: 25px;
    background: ${(props) => props.theme.colors.menuBackground};
    padding: 35px 35px;

    h6 {
      font-size: calc(
        20px + (25 - 20) *
          ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1399 - 320))
      );
      font-weight: bolder;
      margin: 0 0 23px 0;
    }

    p {
      font-size: calc(
        13px + (17 - 13) *
          ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1399 - 320))
      );
      color: ${(props) => props.theme.colors.menuGrey};
    }
  }
`;

export const SubtoolQuizzesContainer = styled.div`
  margin: 0 20px 0 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 3px;

    button {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      background-color: ${(props) => props.theme.colors.borders.red};
      width: 70px;
      height: 70px;
      border: none;
      border-radius: 50px;
      transition: 0.5s;

      &:hover {
        background-color: ${(props) => props.theme.colors.borders.green};
        cursor: pointer;
      }

      &:focus {
        outline: none;
      }

      img {
        margin: auto;
      }
    }
  }
`;

export const UserDataContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
