import styled from "styled-components";

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
  background-color: ${({ $bgColor }) => $bgColor || "var(--icon-bg-purple)"};

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

const Subject = styled.h1`
  font-weight: var(--fw-medium);
  font-size: var(--fs-xs);
  line-height: var(--lh-tightest);
  color: var(--text-title);

  @media (min-width: 37.5rem) {
    font-size: var(--fs-lg);
  }
`;

function Title({ title, icon, bgColor }) {
  return (
    <TitleContainer>
      <IconContainer $bgColor={bgColor}>
        <Icon src={icon} alt={`${title} icon`} />
      </IconContainer>

      <Subject>{title}</Subject>
    </TitleContainer>
  );
}

export default Title;
