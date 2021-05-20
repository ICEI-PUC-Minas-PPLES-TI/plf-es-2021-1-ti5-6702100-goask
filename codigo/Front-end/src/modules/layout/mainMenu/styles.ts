import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media (max-width: ${(props) => props.theme.breakpoint.lg}) {
    display: inline;
  }
`;

export const FirstContainer = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    position: fixed;
    min-height: 100vh;
    border-radius: 0 15px 15px 0;
    width: 25%;
    background: ${(props) => props.theme.colors.menuBackground};
    max-width: ${(props) => props.theme.breakpoint.xl};
    min-width: ${(props) => props.theme.breakpoint.xs};
    padding: 50px 40px 0 40px;
    margin: 0 30px 0 0;
    box-shadow: 0 0 0 5px ${(props) => props.theme.colors.borders.darkBlue},
      0 0 0 10px ${(props) => props.theme.colors.borders.lightBlue},
      0 0 0 15px ${(props) => props.theme.colors.borders.green},
      0 0 0 20px ${(props) => props.theme.colors.borders.lightGreen},
      0 0 0 25px ${(props) => props.theme.colors.borders.orange},
      0 0 0 30px ${(props) => props.theme.colors.borders.red};
  }

  @media (max-width: ${(props) => props.theme.breakpoint.lg}) {
    display: none;
  }
`;

export const MobileFirstContainer = styled.header`
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 3;
  box-shadow: 0 0 0 3px ${(props) => props.theme.colors.borders.darkBlue},
      0 0 0 6px ${(props) => props.theme.colors.borders.lightBlue},
      0 0 0 9px ${(props) => props.theme.colors.borders.green},
      0 0 0 12px ${(props) => props.theme.colors.borders.lightGreen},
      0 0 0 15px ${(props) => props.theme.colors.borders.orange},
      0 0 0 18px ${(props) => props.theme.colors.borders.red};

  border-radius: 0 0 25px 0;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #fff;
  }

  li a {
    display: block;
    padding: 20px 20px;
    border-right: 1px solid #f4f4f4;
    text-decoration: none;

    &:hover {
      background-color: #f4f4f4;
    }
  }

  .menu-btn:hover {
    background-color: #f4f4f4;
  }

  .logo {
    display: block;
    float: left;
    font-size: 2em;
    padding: 10px 20px;
    text-decoration: none;
  }

  .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }

  .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 65px 20px;
    position: relative;
    user-select: none;
  }

  .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;

    &:before {
      top: 5px;
      background: #333;
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      transition: all 0.2s ease-out;
      width: 100%;
    }

    &:after {
      top: -5px;
      background: #333;
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      transition: all 0.2s ease-out;
      width: 100%;
    }
  }

    .menu-btn {
      display: none;

      &:checked ~ .menu {
        max-height: 280px;
        padding: 0 0 10px 0;
      }

      &:checked ~ .menu-icon .navicon {
        background: transparent;

        &:before {
          transform: rotate(-45deg);
        }

        &:after {
          transform: rotate(45deg);
        }
      }

      &:checked ~ .menu-icon:not(.steps) .navicon {
        &:before {
          top: 0;
        }
        &:after {
          top: 0;
        }
      }
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    display: none;
  }
`;

export const SecondContainer = styled.div`
  padding: 50px 55px 0 55px;
  width: 100%;
  margin-left: 28%;
  max-width: ${(props) => props.theme.breakpoint.xl};
  min-width: ${(props) => props.theme.breakpoint.xs};

  @media (max-width: ${(props) => props.theme.breakpoint.lg}) {
    margin: 120px 0 0 10px;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;

  div {
    align-content: center;
    img {
      width: calc(
        70px + (110 - 70) *
          ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1024 - 320))
      );
      height: auto;
    }
  }
`;

export const LogoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  img {
    width: 25px;
    height: auto;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const menuContainer = styled.div`
  width: 100%;
  margin: 25px 0px;
  a {
    text-decoration: none;
    font-size: calc(
      20px + (30 - 20) *
        ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1399 - 320))
    );
    color: ${(props) => props.theme.colors.menuGrey};
    margin: auto 0px;
    transition-duration: 0.4s;

    &:hover {
      color: ${(props) => props.theme.colors.borders.red};
      cursor: pointer;
    }
  }
`;

export const itemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px 0px;

  img {
    padding: 0 10px 0 0;
    width: 35px;
    height: auto;
  }

  p {
    font-size: calc(
      20px + (30 - 20) *
        ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1399 - 320))
    );
    color: ${(props) => props.theme.colors.menuGrey};
    margin: auto 0px;
    /* weight: 300; */
  }
`;

export const userContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  position: absolute;
  bottom: 25px;
  img {
    width: 40px;
    height: auto;
  }

  p {
    font-size: calc(
      17px + (22 - 17) *
        ((100vw - ${(props) => props.theme.breakpoint.sm}) / (1399 - 320))
    );
    color: ${(props) => props.theme.colors.menuGrey};
    font-weight: 300;
    margin: 0 0 0 25px;
  }
`;
