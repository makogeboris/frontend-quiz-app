import styled from "styled-components";
import { NavLink } from "react-router-dom";
import htmlIcon from "../assets/icon-html.svg";
import cssIcon from "../assets/icon-css.svg";
import jsIcon from "../assets/icon-js.svg";
import a11yIcon from "../assets/icon-accessibility.svg";

const StyledHomepage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xl);
  margin-block-start: 3.625rem;

  @media (min-width: 37.5rem) {
    gap: var(--space-3xl);
    margin-block-start: var(--space-2xl);
  }

  @media (min-width: 64rem) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-block-start: 6.1875rem;
  }
`;

const TitleContainer = styled.div`
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

const SubjectList = styled.ul`
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
  width: 100%;
  display: block;
  transition: outline-width 0.3s ease, outline-offset 0.3s ease;
  outline-color: var(--accent-purple);
  outline-style: solid;

  &:not(:focus-visible) {
    box-shadow: none;
    outline-width: 0;
    outline-offset: 0;
  }

  &:hover {
    box-shadow: var(--sub-shadow);
    outline-width: 3px;
    outline-offset: 3px;
  }

  @media (min-width: 37.5rem) {
    font-size: var(--fs-lg);
    border-radius: var(--space-md);
  }
`;

function Homepage() {
  return (
    <StyledHomepage>
      <TitleContainer>
        <Subtitle>
          Welcome to the <Title>Frontend Quiz!</Title>
        </Subtitle>
        <Description>Pick a subject to get started.</Description>
      </TitleContainer>

      <SubjectList>
        <li>
          <StyledNavLink to="/html">
            <SubjectItem>
              <IconContainer
                style={{ backgroundColor: "var(--icon-bg-orange)" }}
              >
                <Icon src={htmlIcon} alt="html" />
              </IconContainer>
              Html
            </SubjectItem>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/css">
            <SubjectItem>
              <IconContainer
                style={{ backgroundColor: "var(--icon-bg-green)" }}
              >
                <Icon src={cssIcon} alt="css" />
              </IconContainer>
              Css
            </SubjectItem>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/javascript">
            <SubjectItem>
              <IconContainer style={{ backgroundColor: "var(--icon-bg-blue)" }}>
                <Icon src={jsIcon} alt="js" />
              </IconContainer>
              Javascript
            </SubjectItem>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/accessibility">
            <SubjectItem>
              <IconContainer
                style={{ backgroundColor: "var(--icon-bg-purple)" }}
              >
                <Icon src={a11yIcon} alt="a11y" />
              </IconContainer>
              Accessibility
            </SubjectItem>
          </StyledNavLink>
        </li>
      </SubjectList>
    </StyledHomepage>
  );
}

export default Homepage;
