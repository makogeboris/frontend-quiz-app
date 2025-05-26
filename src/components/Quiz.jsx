import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useQuiz } from "../contexts/QuizContext";
import styled from "styled-components";
import ThemeToggle from "../components/ThemeToggle";
import Progress from "../components/Progress";
import Question from "../components/Question";
import Title from "../components/Title";
import AnswersContainer from "../components/AnswersContainer";
import Loader from "./Loader";

const StyledQuiz = styled.div`
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
    min-height: 30.25rem;
    justify-content: space-between;
  }
`;

const NotFoundWrap = styled.div`
  display: grid;
  place-content: center;
  gap: 1rem;
  text-align: center;
  min-height: 100vh;
`;

const QuestionNotFound = styled.p`
  font-style: italic;
  font-size: var(--fs-xl);
  font-weight: var(--fw-medium);
  line-height: var(--lh-tight);
  color: var(--text-desc);
`;

const GoHomeButton = styled(NavLink)`
  background-color: var(--accent-purple);
  border: transparent;
  padding: 1.1875rem;
  border-radius: var(--space-xs);
  text-decoration: none;
  font-size: var(--fs-xs);
  font-weight: var(--fw-medium);
  line-height: var(--lh-tightest);
  color: var(--color-white);
  width: fit-content;
  justify-self: center;

  @media (min-width: 37.5rem) {
    font-size: var(--fs-md);
  }
`;

function Quiz() {
  const {
    title,
    icon,
    bgColor,
    index,
    questions,
    answer,
    numQuestions,
    dispatch,
    secondsRemaining,
    status,
    isSubmitted,
  } = useQuiz();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (status === "finished") {
      setLoading(true);
      const timeout = setTimeout(() => {
        navigate("/score");
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [status, navigate]);

  if (loading || !questions || questions.length === 0) {
    const loaderText =
      status === "finished"
        ? "Preparing your results..."
        : "Loading questions...";
    return <Loader text={loaderText} />;
  }

  const question = questions.at(index);
  if (!question)
    return (
      <NotFoundWrap>
        <QuestionNotFound>Question not found</QuestionNotFound>

        <GoHomeButton to="/">Go Home</GoHomeButton>
      </NotFoundWrap>
    );

  return (
    <StyledQuiz>
      <Header>
        <Title title={title} icon={icon} bgColor={bgColor} />
        <ThemeToggle />
      </Header>

      <Main>
        <QuestionContainer>
          <Question
            index={index}
            question={question}
            numQuestions={numQuestions}
            dispatch={dispatch}
            secondsRemaining={secondsRemaining}
            status={status}
          />
          <Progress index={index} numQuestions={numQuestions} answer={answer} />
        </QuestionContainer>
        <AnswersContainer
          index={index}
          question={question}
          answer={answer}
          dispatch={dispatch}
          numQuestions={numQuestions}
          isSubmitted={isSubmitted}
        />
      </Main>
    </StyledQuiz>
  );
}

export default Quiz;
