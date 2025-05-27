import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loader from "./Loader";

const StyledButton = styled.button`
  background: ${({ disabled }) => (disabled ? "#cf97f2" : "#8b29c7")};
  border: 3px solid transparent;
  padding: 1.1875rem;
  box-shadow: var(--sub-shadow);
  border-radius: var(--space-xs);
  font-size: var(--fs-xs);
  font-weight: var(--fw-medium);
  line-height: var(--lh-tightest);
  color: var(--color-white);
  transition: 0.3s;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background: ${({ disabled }) => (disabled ? "#cf97f2" : "#8b29c7")};
  }

  &:not([disabled]):hover {
    background: #a96dcf;
  }

  &:focus-visible {
    outline: 3px solid var(--accent-purple);
    outline-offset: 2px;
  }

  @media (min-width: 37.5rem) {
    border-radius: var(--space-md);
    padding: var(--space-lg);
    margin-block-start: var(--space-xxs);
    font-size: var(--fs-lg);
  }
`;

function Button({
  index,
  answer,
  numQuestions,
  dispatch,
  onShowError,
  onSubmit,
  isSubmitted,
}) {
  const navigate = useNavigate();
  const isLastQuestion = index === numQuestions - 1;
  const [loading, setLoading] = useState(false);
  const [disableAfterError, setDisableAfterError] = useState(false);

  useEffect(() => {
    if (answer !== null) setDisableAfterError(false);
  }, [answer]);

  function handleClick(e) {
    e.preventDefault();

    if (answer === null) {
      onShowError();
      setDisableAfterError(true);
      return;
    }

    if (!isSubmitted) {
      onSubmit();
    } else {
      if (!isLastQuestion) {
        dispatch({ type: "nextQuestion" });
      } else {
        setLoading(true);
        dispatch({ type: "finishQuiz" });

        setTimeout(() => {
          navigate("/score");
        }, 1000);
      }
    }
  }

  if (loading) return <Loader text="Preparing your results..." />;

  let buttonText;
  if (answer === null || !isSubmitted) {
    buttonText = "Submit Answer";
  } else if (isLastQuestion) {
    buttonText = "Finish Quiz";
  } else {
    buttonText = "Next Question";
  }

  return (
    <StyledButton
      type="button"
      onClick={handleClick}
      disabled={disableAfterError}
    >
      {buttonText}
    </StyledButton>
  );
}

export default Button;
