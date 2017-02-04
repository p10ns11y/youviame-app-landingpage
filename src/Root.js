import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import App from './App';
import TermsOfUse from './components/Footer/TermsOfUse';
import PrivacyPolicy from './components/Footer/PrivacyPolicy';
import Arbitration from './components/Footer/Arbitration';
import ContactUs from './components/Footer/ContactUs'

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/terms-of-use" component={TermsOfUse}/>
      <Route path="/privacy-policy" component={PrivacyPolicy}/>
      <Route path="/arbitration" component={Arbitration}/>
      <Route path="/contact-us" component={ContactUs}/>
    </div>
  </Router>
)
