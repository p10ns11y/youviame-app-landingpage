import React from 'react';
import { privacyPolicyHtml } from './rich-text-contents/privacyPolicyRichText';
import './styles/privacyPolicyStyles.css';

export default () => (
  <div className="LegalPage__privacy-policy" dangerouslySetInnerHTML={privacyPolicyHtml()} />
)
