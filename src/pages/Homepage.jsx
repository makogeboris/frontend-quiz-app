import styled from "styled-components";
import Header from "../components/Header";
import WelcomeSection from "../components/WelcomeSection";
import SubjectList from "../components/SubjectList";

const StyledHomepage = styled.div`
  padding-block: 1.625rem 12.9375rem;
  padding-inline: var(--space-md);
  max-width: 74.8125rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.625rem;

  @media (min-width: 37.5rem) {
    padding-block: 3.375rem 14.0625rem;
    padding-inline: var(--space-xl);
    gap: var(--space-2xl);
  }

  @media (min-width: 64rem) {
    padding-block: 6.0625rem 17rem;
    gap: 6.1875rem;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xl);

  @media (min-width: 37.5rem) {
    gap: var(--space-3xl);
  }

  @media (min-width: 64rem) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

function Homepage() {
  return (
    <StyledHomepage>
      <Header />

      <Main>
        <WelcomeSection />
        <SubjectList />
      </Main>
    </StyledHomepage>
  );
}

export default Homepage;
