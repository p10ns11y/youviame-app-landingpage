import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const NavLink = styled.ul`
  display: flex;
  list-style: none;
  margin-top: -50px;
  padding-left: 0;
  width: 100%;
  justify-content: center;
`;

const InlineList = styled.li`
  display: block;
  position: relative;
  margin: 0 10px;
`

const linkStyles = css`
  color: gray;
  font-weight: 600;
  text-decoration:none;

  &:hover {
    color: black;
  }
`
const StyledLink = styled(Link)`${linkStyles}`
const StyledMailTo = styled.a`${linkStyles}`;


export default () => {
  const footerStyles = {
    display: 'flex',
    height: '120px',
    alignItems: 'flex-end'
  }

  return (
    <footer style={footerStyles}>
      <NavLink>
        <InlineList>
          <StyledLink to="/terms-of-use">Terms of Use</StyledLink>
        </InlineList>
        <InlineList>
          <StyledLink to="/privacy-policy">Privacy Policy</StyledLink>
        </InlineList>
        <InlineList>
          <StyledLink to="/arbitration">Arbitration</StyledLink>
        </InlineList>
        <InlineList>
          <StyledMailTo href="mailto:contact@youviame.com">Contact Us</StyledMailTo>
        </InlineList>
      </NavLink>
    </footer>
  )
}
