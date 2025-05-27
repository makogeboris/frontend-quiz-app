import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";

const StyledPageNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 7rem;
  padding-block: 1.625rem;
  padding-inline: var(--space-md);
  max-width: 74.8125rem;
  margin: 0 auto;
  min-height: 71vh;

  @media (min-width: 37.5rem) {
    padding-block: 3.375rem;
    padding-inline: var(--space-xl);
  }

  @media (min-width: 64rem) {
    padding-block: 6.0625rem;
  }
`;

const Title = styled.h1`
  font-size: var(--fs-title);
  font-weight: var(--fw-light);
  line-height: var(--lh-tightest);
  color: var(--text-title);
`;

const Description = styled.p`
  font-style: italic;
  font-size: var(--fs-sm);
  font-weight: var(--fw-regular);
  line-height: var(--lh-normal);
  color: var(--text-desc);

  @media (min-width: 37.5rem) {
    font-size: var(--fs-lg);
  }
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: var(--space-md);
`;

const HomeButton = styled(NavLink)`
  background-color: var(--accent-purple);
  border: transparent;
  padding: 1.1875rem;
  border-radius: var(--space-xs);
  text-decoration: none;
  font-size: var(--fs-xs);
  font-weight: var(--fw-medium);
  line-height: var(--lh-tightest);
  color: var(--color-white);
  transition: all ease 0.3s;

  &:hover {
    background: #a96dcf;
  }

  &:focus-visible {
    outline: 3px solid var(--accent-purple);
    outline-offset: 2px;
  }

  @media (min-width: 37.5rem) {
    font-size: var(--fs-md);
  }
`;

function PageNotFound() {
  return (
    <StyledPageNotFound>
      <Header />

      <MainContent>
        <div>
          <Title>404 Not Found</Title>

          <Description>
            Sorry, we can’t find the page you’re looking for
          </Description>
        </div>

        <HomeButton to="/">Go Home</HomeButton>
      </MainContent>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
