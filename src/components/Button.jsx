import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--accent-purple);
  border: 3px solid transparent;
  padding: 1.1875rem;
  border-radius: var(--space-xs);
  font-size: var(--fs-xs);
  font-weight: var(--fw-medium);
  line-height: var(--lh-tightest);
  color: var(--color-white);
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
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

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
