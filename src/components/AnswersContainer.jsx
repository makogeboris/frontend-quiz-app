import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import errorIcon from "../assets/icon-error.svg";
import correctIcon from "../assets/icon-correct.svg";

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

function AnswersContainer() {
  const [showError, setShowError] = useState(false);

  function handleShowError(e) {
    e.preventDefault();
    setShowError((prev) => !prev);
  }

  return (
    <StyledAnswersContainer>
      <AnswerList>
        <li>
          <StyledLabel>
            <Wrapper>
              <RadioInput name="quiz" value="A" />
              <LabelContainer>
                <AnswerLabel>A</AnswerLabel>
              </LabelContainer>
              <AnswerText>4.5:1</AnswerText>
            </Wrapper>

            <AnswerIcon src={correctIcon} />
          </StyledLabel>
        </li>

        <li>
          <StyledLabel>
            <Wrapper>
              <RadioInput type="radio" name="quiz" value="B" />
              <LabelContainer>
                <AnswerLabel>B</AnswerLabel>
              </LabelContainer>
              <AnswerText>3:1</AnswerText>
            </Wrapper>

            <AnswerIcon src={correctIcon} />
          </StyledLabel>
        </li>

        <li>
          <StyledLabel>
            <Wrapper>
              <RadioInput type="radio" name="quiz" value="C" />
              <LabelContainer>
                <AnswerLabel>C</AnswerLabel>
              </LabelContainer>
              <AnswerText>2.5:1</AnswerText>
            </Wrapper>

            <AnswerIcon src={correctIcon} />
          </StyledLabel>
        </li>

        <li>
          <StyledLabel>
            <Wrapper>
              <RadioInput type="radio" name="quiz" value="D" />
              <LabelContainer>
                <AnswerLabel>D</AnswerLabel>
              </LabelContainer>
              <AnswerText>5:1</AnswerText>
            </Wrapper>

            <AnswerIcon src={correctIcon} />
          </StyledLabel>
        </li>

        <Button type="submit" onClick={handleShowError}>
          Submit Answer
        </Button>
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
