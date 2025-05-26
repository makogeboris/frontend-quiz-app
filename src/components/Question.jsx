import styled from "styled-components";
import Timer from "./Timer";

const QuestionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);

  @media (min-width: 37.5rem) {
    gap: var(--space-md);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const QuestionNumber = styled.p`
  font-style: italic;
  font-size: var(--fs-xxs);
  font-weight: var(--fw-regular);
  line-height: var(--lh-normal);
  color: var(--text-desc);

  @media (min-width: 37.5rem) {
    font-size: var(--fs-sm);
  }
`;

const QuestionText = styled.h2`
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  line-height: var(--lh-tight);
  color: var(--text-title);

  @media (min-width: 37.5rem) {
    font-size: var(--fs-xl);
  }
`;

function Question({
  index,
  question,
  numQuestions,
  dispatch,
  secondsRemaining,
  status,
}) {
  return (
    <QuestionTextContainer>
      <Wrapper>
        <QuestionNumber>
          Question {index + 1} of {numQuestions}
        </QuestionNumber>

        <Timer
          dispatch={dispatch}
          secondsRemaining={secondsRemaining}
          status={status}
        />
      </Wrapper>

      <QuestionText>{question.question}</QuestionText>
    </QuestionTextContainer>
  );
}

export default Question;
