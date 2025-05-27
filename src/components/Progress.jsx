import styled from "styled-components";

const StyledProgress = styled.progress`
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

function Progress({ index, numQuestions, answer, isSubmitted }) {
  return (
    <StyledProgress
      max={numQuestions}
      value={index + (isSubmitted && answer !== null ? 1 : 0)}
    ></StyledProgress>
  );
}

export default Progress;
