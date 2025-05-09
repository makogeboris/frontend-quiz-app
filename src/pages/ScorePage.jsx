import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ThemeToggle from "../components/ThemeToggle";
import a11yIcon from "../assets/icon-accessibility.svg";

const StyledScorePage = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
  padding-block: var(--space-sm) 14.125rem;

  @media (min-width: 37.5rem) {
    padding-block: var(--space-xl) 10.4375rem;
  }

  @media (min-width: 64rem) {
    padding-block: 5.1875rem 14rem;
    gap: 5.3125rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);

  @media (min-width: 37.5rem) {
    gap: var(--space-md);
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--space-xl);
  height: var(--space-xl);
  border-radius: 0.375rem;
  background-color: var(--icon-bg-purple);

  @media (min-width: 37.5rem) {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: var(--space-xxs);
  }
`;

const Icon = styled.img`
  width: var(--space-md);

  @media (min-width: 37.5rem) {
    width: var(--space-xl);
  }
`;

const Title = styled.p`
  font-weight: var(--fw-medium);
  font-size: var(--fs-xs);
  line-height: var(--lh-tightest);
  color: var(--text-title);

  @media (min-width: 37.5rem) {
    font-size: var(--fs-lg);
  }
`;

const MainContent = styled.div`
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

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  width: 100%;

  @media (min-width: 37.5rem) {
    max-width: 40rem;
  }

  @media (min-width: 64rem) {
    gap: var(--space-2xl);
    max-width: 28.125rem;
  }
`;

const QuizStatus = styled.h1`
  font-size: var(--fs-title);
  font-weight: var(--fw-light);
  line-height: var(--lh-tightest);
  color: var(--text-title);
  white-space: nowrap;
`;

const QuizText = styled.span`
  font-weight: var(--fw-medium);
  display: block;
`;

const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: var(--space-sm);

  @media (min-width: 37.5rem) {
    max-width: 40rem;
    gap: var(--space-lg);
  }

  @media (min-width: 64rem) {
    max-width: 35.25rem;
  }
`;

const ResultContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--bg-sub);
  width: 100%;
  gap: var(--space-sm);
  padding: var(--space-lg);
  border-radius: var(--space-lg);

  @media (min-width: 37.5rem) {
    gap: var(--space-xl);
    padding: var(--space-2xl);
    border-radius: var(--space-md);
  }
`;

const Button = styled(NavLink)`
  background-color: var(--accent-purple);
  border: transparent;
  padding: 1.1875rem;
  border-radius: var(--space-xs);
  width: 100%;
  font-size: var(--fs-xs);
  font-weight: var(--fw-medium);
  line-height: var(--lh-tightest);
  text-align: center;
  text-decoration: none;
  color: var(--color-white);

  @media (min-width: 37.5rem) {
    border-radius: var(--space-md);
    padding: var(--space-lg);
    font-size: var(--fs-lg);
  }
`;

const ScoreDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
`;

const ScoreNumber = styled.h2`
  font-size: var(--fs-4xl);
  font-weight: var(--fw-medium);
  line-height: var(--lh-tightest);
  color: var(--text-title);

  @media (min-width: 37.5rem) {
    font-size: var(--fs-5xl);
  }
`;

const ScoreDescription = styled.p`
  font-size: var(--fs-xs);
  font-weight: var(--fw-medium);
  line-height: var(--lh-tightest);
  color: var(--text-desc);

  @media (min-width: 37.5rem) {
    font-size: var(--fs-md);
    font-weight: var(--fw-regular);
    line-height: var(--lh-normal);
  }
`;

function ScorePage() {
  return (
    <StyledScorePage>
      <Header>
        <TitleContainer>
          <IconContainer>
            <Icon src={a11yIcon} alt="a11y" />
          </IconContainer>

          <Title>Accessibility</Title>
        </TitleContainer>

        <ThemeToggle />
      </Header>

      <MainContent>
        <ScoreContainer>
          <QuizStatus>
            Quiz completed <QuizText>You scored...</QuizText>
          </QuizStatus>
        </ScoreContainer>

        <ResultContainer>
          <ResultContent>
            <TitleContainer>
              <IconContainer>
                <Icon src={a11yIcon} alt="a11y" />
              </IconContainer>

              <Title>Accessibility</Title>
            </TitleContainer>

            <ScoreDetails>
              <ScoreNumber>8</ScoreNumber>
              <ScoreDescription>out of 10</ScoreDescription>
            </ScoreDetails>
          </ResultContent>

          <Button to="/">Play Again</Button>
        </ResultContainer>
      </MainContent>
    </StyledScorePage>
  );
}

export default ScorePage;
