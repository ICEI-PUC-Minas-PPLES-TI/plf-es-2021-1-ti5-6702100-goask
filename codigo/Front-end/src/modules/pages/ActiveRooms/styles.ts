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

export const TextContainer = styled.div`
  background-color: #fff;
  padding: 5px 30px 10px;
  max-width: 70%;
  text-align: center;
  border-radius: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

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

export const ContentContainer = styled.div`
  max-width: 70%;
  background-color: #fff;
  margin-bottom: 50px;
  margin-top: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;