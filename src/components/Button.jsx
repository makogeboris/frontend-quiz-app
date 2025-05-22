import styled from "styled-components";

const StyledButton = styled.button`
  background: var(--accent-purple);
  border: 3px solid transparent;
  padding: 1.1875rem;
  box-shadow: var(--sub-shadow);
  border-radius: var(--space-xs);
  font-size: var(--fs-xs);
  font-weight: var(--fw-medium);
  line-height: var(--lh-tightest);
  color: var(--color-white);
  transition: 0.3s;

  &:hover {
    background: #8b29c7;
  }

  &:focus-visible {
    outline: 3px solid var(--accent-purple);
    outline-offset: 2px;

    /* No answer seleted
     background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      #a729f5; 
       or #cf97f2
      */
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
