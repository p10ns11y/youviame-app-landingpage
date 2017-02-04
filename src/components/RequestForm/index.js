import React, { Component } from 'react';
import './RequestForm.css';

/* mailchimp embedded code adjusted for react
 * `App-request-form` is only new className */
export default class MailChimpForm  extends Component {
  state = {
    email: ''
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value});
  }

  render() {
    return (
      <div className="App-request-form" id="mc_embed_signup">
        <form action="//youviame.us15.list-manage.com/subscribe/post?u=d3d56eaf316a29fc5b59496dd&amp;id=bdd0fadf50" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Emailadress  <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                value={this.state.email}
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                onChange={this.handleEmailChange}
              />
            </div>
            <div className="mc-field-group input-group">
              <strong>Vad för telefon har du? </strong>
              <ul>
                <li>
                  <input type="radio" value="1" name="group[135]" id="mce-group[135]-135-0" />
                  <label htmlFor="mce-group[135]-135-0">Iphone</label>
                </li>
                <li>
                  <input type="radio" value="2" name="group[135]" id="mce-group[135]-135-1" />
                  <label htmlFor="mce-group[135]-135-1">Android</label>
                </li>
              </ul>
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
              <input type="text" name="b_d3d56eaf316a29fc5b59496dd_bdd0fadf50" tabIndex="-1" value="" />
            </div>
            <div className="clear">
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
