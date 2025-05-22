import styled from "styled-components";
import ThemeToggle from "../components/ThemeToggle";
import Progress from "../components/Progress";
import Question from "../components/Question";
import Title from "../components/Title";
import AnswersContainer from "../components/AnswersContainer";

const StyledAccessibility = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
  padding-block: var(--space-sm) 5.4375rem;
  padding-inline: var(--space-md);
  max-width: 74.8125rem;
  margin: 0 auto;

  @media (min-width: 37.5rem) {
    padding-block: var(--space-xl) 3.25rem;
    padding-inline: var(--space-xl);
  }

  @media (min-width: 64rem) {
    padding-block: 5.1875rem 9.25rem;
    gap: 5.3125rem;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  width: 100%;

  @media (min-width: 37.5rem) {
    gap: var(--space-xl);
    max-width: 40rem;
  }

  @media (min-width: 64rem) {
    gap: var(--space-6xl);
    max-width: 29.0625rem;
  }
`;

function Accessibility() {
  return (
    <StyledAccessibility>
      <Header>
        <Title />
        <ThemeToggle />
      </Header>

      <Main>
        <QuestionContainer>
          <Question />
          <Progress />
        </QuestionContainer>
        <AnswersContainer />
      </Main>
    </StyledAccessibility>
  );
}

export default Accessibility;
