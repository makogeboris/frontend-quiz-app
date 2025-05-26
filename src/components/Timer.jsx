import { useEffect } from "react";
import styled from "styled-components";

const StyledTimer = styled.div`
  background-color: var(--bg-sub);
  border-radius: var(--space-xs);
  padding: 8px 16px;
`;

const Time = styled.p`
  font-style: italic;
  font-size: var(--fs-xxs);
  font-weight: var(--fw-regular);
  line-height: var(--lh-normal);
  color: var(--text-title);

  @media (min-width: 28.125rem) {
    font-size: var(--fs-sm);
  }
`;

function Timer({ dispatch, secondsRemaining, status }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      if (status !== "active" || secondsRemaining <= 0) return;

      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch, secondsRemaining, status]
  );

  return (
    <StyledTimer>
      <Time>
        {mins < 10 && "0"}
        {mins}:{seconds < 10 && "0"}
        {seconds}
      </Time>
    </StyledTimer>
  );
}
export default Timer;
