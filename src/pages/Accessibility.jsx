import styled from "styled-components";
import ThemeToggle from "../components/ThemeToggle";
import a11yIcon from "../assets/icon-accessibility.svg";
import Button from "../components/Button";

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

const Title = styled.h1`
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

const Progress = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  border: none;
  border-radius: var(--space-6xl);
  background-color: var(--bg-sub);
  overflow: hidden;
  width: 100%;
  height: 16px;
  padding: 4px;

  &::-webkit-progress-bar {
    background-color: var(--bg-sub);
    border-radius: var(--space-6xl);
  }

  &::-webkit-progress-value {
    background-color: var(--accent-purple);
    border-radius: var(--space-6xl);
    height: 8px;
  }

  &::-moz-progress-bar {
    background-color: var(--accent-purple);
    border-radius: var(--space-6xl);
    height: 8px;
  }
`;

const Form = styled.form`
  width: 100%;

  @media (min-width: 37.5rem) {
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
  background-color: var(--bg-sub);
  padding: var(--space-sm);
  gap: var(--space-sm);
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

const LabelContainer = styled.div`
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

const AnswerLabel = styled.h3`
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

function Accessibility() {
  return (
    <StyledAccessibility>
      <Header>
        <TitleContainer>
          <IconContainer>
            <Icon src={a11yIcon} alt="a11y" />
          </IconContainer>

          <Title>Accessibility</Title>
        </TitleContainer>

        <ThemeToggle />
      </Header>

      <Main>
        <QuestionContainer>
          <QuestionTextContainer>
            <QuestionNumber>Question 6 of 10</QuestionNumber>

            <QuestionText>
              Which of these color contrast ratios defines the minimum WCAG 2.1
              Level AA requirement for normal text?
            </QuestionText>
          </QuestionTextContainer>

          <Progress value={6} max={10}></Progress>
        </QuestionContainer>

        <Form>
          <AnswerList>
            <li>
              <StyledLabel>
                <RadioInput name="quiz" value="A" />
                <LabelContainer>
                  <AnswerLabel>A</AnswerLabel>
                </LabelContainer>
                <AnswerText>4.5:1</AnswerText>
              </StyledLabel>
            </li>

            <li>
              <StyledLabel>
                <RadioInput type="radio" name="quiz" value="B" />
                <LabelContainer>
                  <AnswerLabel>B</AnswerLabel>
                </LabelContainer>
                <AnswerText>3:1</AnswerText>
              </StyledLabel>
            </li>

            <li>
              <StyledLabel>
                <RadioInput type="radio" name="quiz" value="C" />
                <LabelContainer>
                  <AnswerLabel>C</AnswerLabel>
                </LabelContainer>
                <AnswerText>2.5:1</AnswerText>
              </StyledLabel>
            </li>

            <li>
              <StyledLabel>
                <RadioInput type="radio" name="quiz" value="D" />
                <LabelContainer>
                  <AnswerLabel>D</AnswerLabel>
                </LabelContainer>
                <AnswerText>5:1</AnswerText>
              </StyledLabel>
            </li>

            <Button type="submit">Submit Answer</Button>
          </AnswerList>
        </Form>
      </Main>
    </StyledAccessibility>
  );
}

export default Accessibility;
