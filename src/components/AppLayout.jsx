import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";

const StyledAppLayout = styled.div`
  padding-inline: var(--space-md);
  padding-block: 1.625rem 12.9375rem;
  max-width: 73.8125rem;
  margin: 0 auto;

  @media (min-width: 37.5rem) {
    padding-inline: var(--space-2xl);
    padding-block: 3.375rem 14.0625rem;
  }

  @media (min-width: 64rem) {
    padding-inline: var(--space-md);
    padding-block: 6.0625rem 17rem;
  }
`;

function AppLayout() {
  return (
    <main>
      <StyledAppLayout>
        <ThemeToggle />
        <Outlet />
      </StyledAppLayout>
    </main>
  );
}

export default AppLayout;
