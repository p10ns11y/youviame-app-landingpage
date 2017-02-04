import React from 'react';

import { arbitrationHtml } from './rich-text-contents/arbitrationRichText';
import './styles/arbitrationStyles.css';

export default () => (
  <div className="LegalPage__arbitration" dangerouslySetInnerHTML={arbitrationHtml()} />
)
