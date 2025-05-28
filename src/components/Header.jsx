import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
`;

function Header() {
  return (
    <StyledHeader>
      <ThemeToggle />
    </StyledHeader>
  );
}

export default Header;
