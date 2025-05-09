import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  padding-inline: var(--space-md);
  max-width: 74.8125rem;
  margin: 0 auto;

  @media (min-width: 37.5rem) {
    padding-inline: var(--space-xl);
  }

  /* @media (min-width: 64rem) {
    padding-inline: var(--space-md);
  } */
`;

function AppLayout() {
  return (
    <main>
      <StyledAppLayout>
        <Outlet />
      </StyledAppLayout>
    </main>
  );
}

export default AppLayout;
