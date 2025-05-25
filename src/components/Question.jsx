import styled from "styled-components";

const QuestionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);

  @media (min-width: 37.5rem) {
    gap: var(--space-md);
  }
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

function Question({ index, question, numQuestions }) {
  return (
    <QuestionTextContainer>
      <QuestionNumber>
        Question {index + 1} of {numQuestions}
      </QuestionNumber>

      <QuestionText>{question.question}</QuestionText>
    </QuestionTextContainer>
  );
}

export default Question;
