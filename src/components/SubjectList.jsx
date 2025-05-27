import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledSubjectList = styled.ul`
  padding-left: 0;
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);

  @media (min-width: 37.5rem) {
    max-width: 40rem;
    gap: var(--space-md);
  }

  @media (min-width: 64rem) {
    max-width: 35.25rem;
    gap: var(--space-sm);
  }
`;

const SubjectItem = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--bg-sub);
  padding: var(--space-sm);
  gap: var(--space-sm);
  box-shadow: var(--sub-shadow);
  border-radius: var(--space-xs);
  width: 100%;

  @media (min-width: 37.5rem) {
    gap: var(--space-lg);
    border-radius: var(--space-md);
    padding: var(--space-md);
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--space-xl);
  height: var(--space-xl);
  border-radius: 0.375rem;

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

const StyledNavLink = styled(NavLink)`
  font-size: var(--fs-xs);
  font-weight: var(--fw-medium);
  line-height: var(--lh-tightest);
  color: var(--text-title);
  text-decoration: none;
  text-transform: uppercase;
  border-radius: var(--space-xs);
  border: 3px solid transparent;
  width: 100%;
  display: block;
  transition: all ease 0.3s;

  &:hover {
    box-shadow: var(--sub-shadow);
    border: 3px solid var(--navlink-hover, var(--accent-purple));
    transform: translateX(0.5rem);
  }

  &:focus-visible {
    outline: 3px solid var(--navlink-outline, var(--accent-purple));
    outline-offset: -3px;
  }

  @media (min-width: 37.5rem) {
    font-size: var(--fs-lg);
    border-radius: var(--space-md);
  }
`;

function SubjectList() {
  return (
    <StyledSubjectList>
      <li>
        <StyledNavLink
          to="/html"
          style={{
            "--navlink-hover": "var(--accent-orange)",
            "--navlink-outline": "var(--accent-orange)",
          }}
        >
          <SubjectItem>
            <IconContainer
              style={{
                backgroundColor: "var(--icon-bg-orange)",
              }}
            >
              <Icon src="/images/icon-html.svg" alt="html" />
            </IconContainer>
            Html
          </SubjectItem>
        </StyledNavLink>
      </li>

      <li>
        <StyledNavLink
          to="/css"
          style={{
            "--navlink-hover": "var(--accent-green)",
            "--navlink-outline": "var(--accent-green)",
          }}
        >
          <SubjectItem>
            <IconContainer
              style={{
                backgroundColor: "var(--icon-bg-green)",
              }}
            >
              <Icon src="/images/icon-css.svg" alt="css" />
            </IconContainer>
            Css
          </SubjectItem>
        </StyledNavLink>
      </li>

      <li>
        <StyledNavLink
          to="/javascript"
          style={{
            "--navlink-hover": "var(--accent-blue)",
            "--navlink-outline": "var(--accent-blue)",
          }}
        >
          <SubjectItem>
            <IconContainer
              style={{
                backgroundColor: "var(--icon-bg-blue)",
              }}
            >
              <Icon src="/images/icon-js.svg" alt="javascript" />
            </IconContainer>
            Javascript
          </SubjectItem>
        </StyledNavLink>
      </li>

      <li>
        <StyledNavLink
          to="/accessibility"
          style={{
            "--navlink-hover": "var(--accent-purple)",
            "--navlink-outline": "var(--accent-purple)",
          }}
        >
          <SubjectItem>
            <IconContainer
              style={{
                backgroundColor: "var(--icon-bg-purple)",
              }}
            >
              <Icon src="/images/icon-accessibility.svg" alt="accessibility" />
            </IconContainer>
            Accessibility
          </SubjectItem>
        </StyledNavLink>
      </li>
    </StyledSubjectList>
  );
}

export default SubjectList;
