import { useEffect, useState } from "react";
import styled from "styled-components";
import errorIcon from "../assets/icon-error.svg";
import correctIcon from "../assets/icon-correct.svg";
import Button from "./Button";

const StyledAnswersContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  width: 100%;

  @media (min-width: 37.5rem) {
    gap: var(--space-lg);
    max-width: 40rem;
  }

  @media (min-width: 64rem) {
    max-width: 35.25rem;
  }
`;

const AnswerList = styled.ul`
  padding-inline-start: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);

  @media (min-width: 37.5rem) {
    gap: var(--space-md);
  }

  @media (min-width: 64rem) {
    gap: var(--space-sm);
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: var(--space-sm); */
  background-color: var(--bg-sub);
  padding: var(--space-sm);
  border-radius: var(--space-xs);
  width: 100%;
  cursor: pointer;
  border: 3px solid transparent;
  transition: 0.3s;

  &:has(input:checked) {
    border-color: var(--accent-purple);
  }

  &:has(input:focus-visible) {
    outline: 3px solid var(--accent-purple);
    outline-offset: -3px;
  }

  &:hover {
    box-shadow: var(--sub-shadow);
    border: 3px solid var(--accent-purple);
    transform: translateX(0.5rem);
  }

  @media (min-width: 37.5rem) {
    gap: var(--space-lg);
    border-radius: var(--space-md);
    padding: var(--space-md);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
`;

const RadioInput = styled.input.attrs({ type: "radio" })`
  opacity: 0;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  z-index: 1;
  cursor: pointer;
`;

// const LabelContainer = styled.div
const LabelContainer = styled.div.attrs({ className: "LabelContainer" })`
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--space-xl);
  height: var(--space-xl);
  border-radius: 0.375rem;
  background-color: var(--letter-bg);
  flex-shrink: 0;

  @media (min-width: 37.5rem) {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: var(--space-xxs);
  }
`;

// const AnswerLabel = styled.h3`
const AnswerLabel = styled.h3.attrs({ className: "AnswerLabel" })`
  font-size: var(--fs-xs);
  font-weight: var(--fw-medium);
  line-height: var(--lh-tightest);
  text-align: center;
  color: var(--text-letter);

  @media (min-width: 37.5rem) {
    font-size: var(--fs-lg);
  }
`;

const AnswerText = styled.h3`
  font-weight: var(--fw-medium);
  font-size: var(--fs-xs);
  line-height: var(--lh-tightest);
  color: var(--text-title);

  @media (min-width: 37.5rem) {
    font-size: var(--fs-lg);
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
`;

const Icon = styled.img`
  width: var(--space-md);
  height: var(--space-md);

  @media (min-width: 37.5rem) {
    width: 1.875rem;
    height: 1.875rem;
  }
`;

const AnswerIcon = styled.img`
  width: var(--space-md);
  height: var(--space-md);

  @media (min-width: 37.5rem) {
    width: 1.875rem;
    height: 1.875rem;
  }
`;

const ErrorText = styled.p`
  font-weight: var(--fw-medium);
  font-size: var(--fs-xs);
  line-height: var(--lh-tightest);
  color: var(--accent-red);

  @media (min-width: 37.5rem) {
    font-size: var(--fs-md);
    line-height: var(--lh-normal);
  }
`;

function AnswersContainer({
  index,
  question,
  dispatch,
  answer,
  numQuestions,
  isSubmitted,
}) {
  const [showError, setShowError] = useState(false);

  const hasAnswered = answer !== null;

  function handleShowError() {
    setShowError(true);
  }

  function handleHideError() {
    setShowError(false);
  }

  function handleSubmit() {
    dispatch({ type: "submitAnswer" });
  }

  useEffect(() => {
    setShowError(false);
  }, [index]);

  if (!question || !question.options) {
    return null;
  }

  return (
    <StyledAnswersContainer>
      <AnswerList>
        {question.options.map((option, index) => {
          const label = String.fromCharCode(65 + index);

          const isSelected = answer === index;
          const isCorrect = index === question.correctOption;
          const selectedAnswerIsCorrect = answer === question.correctOption;

          let iconSrc = null;
          if (hasAnswered && isSubmitted) {
            if (isSelected) {
              iconSrc = selectedAnswerIsCorrect ? correctIcon : errorIcon;
            } else if (isCorrect && !selectedAnswerIsCorrect) {
              iconSrc = correctIcon;
            }
          }

          return (
            <li key={index}>
              <StyledLabel
                onClick={() => {
                  if (!isSubmitted) {
                    dispatch({ type: "newAnswer", payload: index });
                    handleHideError();
                  }
                }}
              >
                <Wrapper>
                  <RadioInput
                    name="quiz"
                    value={label}
                    checked={isSelected}
                    readOnly
                  />
                  <LabelContainer>
                    <AnswerLabel>{label}</AnswerLabel>
                  </LabelContainer>
                  <AnswerText>{option}</AnswerText>
                </Wrapper>

                {iconSrc && <AnswerIcon src={iconSrc} />}
              </StyledLabel>
            </li>
          );
        })}

        <Button
          index={index}
          question={question}
          answer={answer}
          dispatch={dispatch}
          numQuestions={numQuestions}
          onShowError={handleShowError}
          onSubmit={handleSubmit}
          isSubmitted={isSubmitted}
        />
      </AnswerList>

      {showError && (
        <ErrorContainer>
          <Icon src={errorIcon} />
          <ErrorText>Please select an answer</ErrorText>
        </ErrorContainer>
      )}
    </StyledAnswersContainer>
  );
}

export default AnswersContainer;
