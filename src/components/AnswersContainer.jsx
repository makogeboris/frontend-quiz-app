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
  background-color: var(--bg-sub);
  padding: var(--space-sm);
  border-radius: var(--space-xs);
  width: 100%;
  border: 3px solid transparent;
  transition: 0.3s;
  cursor: ${({ $isSubmitted }) => ($isSubmitted ? "not-allowed" : "pointer")};

  ${({ $isSelected, $isSubmitted, $isCorrect }) => {
    if ($isSubmitted && $isSelected) {
      if ($isCorrect) return `border-color: var(--accent-green);`;
      else return `border-color: var(--accent-red);`;
    }
    if ($isSelected) return `border-color: var(--accent-purple);`;
    return "";
  }}

  ${({ $isSubmitted }) =>
    !$isSubmitted &&
    `&:hover {
      box-shadow: var(--sub-shadow);
      border: 3px solid var(--accent-purple);
      transform: translateX(0.5rem);
    }`}

  &:has(input:focus-visible) {
    outline: 3px solid var(--accent-purple);
    outline-offset: -3px;
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
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  z-index: 1;
  cursor: pointer;
`;

const LabelContainer = styled.div.attrs({ className: "LabelContainer" })`
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--space-xl);
  height: var(--space-xl);
  border-radius: 0.375rem;
  background-color: var(--letter-bg);
  flex-shrink: 0;

  ${({ $isSelected, $isSubmitted, $isCorrect }) => {
    if ($isSubmitted && $isSelected) {
      if ($isCorrect) return `background-color: var(--accent-green);`;
      else return `background-color: var(--accent-red);`;
    }
    if ($isSelected) return `background-color: var(--accent-purple);`;
    return "";
  }}

  @media (min-width: 37.5rem) {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: var(--space-xxs);
  }
`;

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
          const id = `question-${question.id}-option-${index}`;
          const isSelected = answer === index;
          const isCorrect = index === question.answer;

          let iconSrc = null;

          if (isSubmitted) {
            if (isCorrect) {
              iconSrc = correctIcon;
            } else if (isSelected && !isCorrect) {
              iconSrc = errorIcon;
            }
          }

          return (
            <li key={index}>
              <StyledLabel
                htmlFor={id}
                key={id}
                $isSelected={isSelected}
                $isSubmitted={isSubmitted}
                $isCorrect={isCorrect}
              >
                <Wrapper>
                  <RadioInput
                    id={id}
                    name="quiz"
                    value={index}
                    checked={isSelected}
                    disabled={isSubmitted}
                    onChange={() => {
                      if (!isSubmitted) {
                        dispatch({ type: "newAnswer", payload: index });
                        handleHideError();
                      }
                    }}
                  />
                  <LabelContainer
                    $isSelected={isSelected}
                    $isSubmitted={isSubmitted}
                    $isCorrect={isCorrect}
                  >
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
          <Icon src={errorIcon} alt="Error" />
          <ErrorText>Please select an answer</ErrorText>
        </ErrorContainer>
      )}
    </StyledAnswersContainer>
  );
}

export default AnswersContainer;
