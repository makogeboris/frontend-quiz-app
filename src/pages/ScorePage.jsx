import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useQuiz } from "../contexts/QuizContext";
import styled from "styled-components";
import ThemeToggle from "../components/ThemeToggle";
import Loader from "../components/Loader";

const StyledScorePage = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
  padding-block: var(--space-sm) 14.125rem;
  padding-inline: var(--space-md);
  max-width: 74.8125rem;
  margin: 0 auto;

  @media (min-width: 37.5rem) {
    padding-block: var(--space-xl) 10.4375rem;
    padding-inline: var(--space-xl);
  }

  @media (min-width: 64rem) {
    padding-block: 5.1875rem 14rem;
    gap: 5.3125rem;
  }
`;

const Header = styled.header`
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
  background-color: ${({ $bgColor }) => $bgColor || "var(--icon-bg-purple)"};

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
  transition: all ease 0.3s;

  &:hover {
    background: #a96dcf;
  }

  &:focus-visible {
    outline: 3px solid var(--accent-purple);
    outline-offset: 2px;
  }

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

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
  min-height: 51vh;
`;

const LoadingMessage = styled.p`
  font-style: italic;
  font-size: var(--fs-xl);
  font-weight: var(--fw-medium);
  line-height: var(--lh-tight);
  color: var(--text-desc);
`;

const StartQuizButton = styled(NavLink)`
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

const ThemeWrap = styled.div`
  align-self: flex-end;
`;

function ScorePage() {
  const { title, icon, bgColor, correctAnswers, numQuestions, dispatch } =
    useQuiz();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  if (!title || numQuestions === 0) {
    return (
      <StyledScorePage>
        <ThemeWrap>
          <ThemeToggle />
        </ThemeWrap>

        <LoadingContainer>
          <LoadingMessage>
            No quiz data available. Please complete a quiz first.
          </LoadingMessage>

          <StartQuizButton to="/">Start Quiz</StartQuizButton>
        </LoadingContainer>
      </StyledScorePage>
    );
  }

  function handlePlayAgain(e) {
    e.preventDefault();
    setLoading(true);

    dispatch({ type: "restart" });

    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  return (
    <StyledScorePage>
      {loading ? (
        <Loader text="Loading quiz..." />
      ) : (
        <>
          <Header>
            <TitleContainer>
              <IconContainer $bgColor={bgColor}>
                <Icon src={icon} alt={title} />
              </IconContainer>

              <Title>{title}</Title>
            </TitleContainer>

            <ThemeToggle />
          </Header>

          <Main>
            <ScoreContainer>
              <QuizStatus>
                Quiz completed <QuizText>You scored...</QuizText>
              </QuizStatus>
            </ScoreContainer>
            <ResultContainer>
              <ResultContent>
                <TitleContainer>
                  <IconContainer $bgColor={bgColor}>
                    <Icon src={icon} alt={title} />
                  </IconContainer>

                  <Title>{title}</Title>
                </TitleContainer>

                <ScoreDetails>
                  <ScoreNumber>{correctAnswers}</ScoreNumber>
                  <ScoreDescription>out of {numQuestions}</ScoreDescription>
                </ScoreDetails>
              </ResultContent>

              <Button onClick={handlePlayAgain}>Play Again</Button>
            </ResultContainer>
          </Main>
        </>
      )}
    </StyledScorePage>
  );
}

export default ScorePage;
