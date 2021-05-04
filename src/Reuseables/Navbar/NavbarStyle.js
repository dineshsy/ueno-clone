import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0rem;
  margin-right: 1.5rem;
  h3 {
    font-weight: bolder;
  }
  ul {
    list-style: none;
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    align-items: center;
    li {
      text-transform: uppercase;
      list-style: none;
      font-size: 0.85rem;
      font-weight: 400;
      button {
        text-transform: uppercase;
        font-size: 0.85rem;
        border-radius: 3rem;
      }
    }
  }
`;
