import React from 'react';
import { termsOfUseHtml } from './rich-text-contents/termsOfUseRichText';
import './styles/termsOfUseStyles.css';

export default () => (
  <div className="LegalPage__terms-of-use" dangerouslySetInnerHTML={termsOfUseHtml()} />
)
