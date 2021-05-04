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

export const Container = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0px 80px 0;
  a,
  p {
    font-size: 22px;
    color: #c9515c;
    font-weight: 500;
    text-decoration: none;
  }
  a:hover {
    color: #26265e;
    transition: 0.5s;
  }
`;

export const SubmitButton = styled.button`
  width: 40%;
  height: 30px;
`;


export const Select = styled.select`
display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;

  select,
  &::after {
    grid-area: select;
  }

  width: 400px;

  border: 1px solid var(--select-border);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;

  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;

  // Optional styles
  // remove for transparency
  background-color: #fff;
  background-image: linear-gradient(to top, #c9515c, #fff 33%);

  // Custom arrow
  &:not(.select--multiple)::after {
    content: "";
    justify-self: end;
    width: 0.8em;
    height: 0.5em;
    background-color: var(--select-arrow);
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
`

