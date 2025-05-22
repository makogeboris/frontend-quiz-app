import styled from "styled-components";

const StyledWelcomeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  width: 100%;

  @media (min-width: 37.5rem) {
    max-width: 40rem;
  }

  @media (min-width: 64rem) {
    gap: var(--space-2xl);
    max-width: 29.0625rem;
  }
`;

const Subtitle = styled.h1`
  font-size: var(--fs-title);
  font-weight: var(--fw-light);
  line-height: var(--lh-tightest);
  color: var(--text-title);
  white-space: nowrap;
`;

const Title = styled.span`
  font-weight: var(--fw-medium);
  display: block;
`;

const Description = styled.p`
  font-style: italic;
  font-size: var(--fs-xxs);
  font-weight: var(--fw-regular);
  line-height: var(--lh-normal);
  color: var(--text-desc);

  @media (min-width: 37.5rem) {
    font-size: var(--fs-sm);
  }
`;

function WelcomeSection() {
  return (
    <StyledWelcomeSection>
      <Subtitle>
        Welcome to the <Title>Frontend Quiz!</Title>
      </Subtitle>
      <Description>Pick a subject to get started.</Description>
    </StyledWelcomeSection>
  );
}

export default WelcomeSection;
