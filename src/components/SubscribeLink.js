import React from 'react';
import styled from 'styled-components';

const MailChimpList = styled.a`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: flex-end;
  color: #4dbcbc;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    color: #b1579c;
  }
`;

export default () => {
  const mailChimpSingupLink = "http://eepurl.com/cAjzuX";

  return (
    <MailChimpList href={mailChimpSingupLink}>
      Subscribe
    </MailChimpList>
  );
}
