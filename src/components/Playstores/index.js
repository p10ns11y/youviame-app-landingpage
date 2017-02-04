import React from 'react';

import iosAppStore from './ios-appstore.svg';
import androidStroe from './android-appstore.svg';

import './Playstores.css';

/* eslint-disable no-unused-vars */
export default function PlayStores() {
  return (
    <div className="App-Playstores">
      <a className="Playstores-ios"  href="/apple">
        <img src={iosAppStore} alt="youviame ios store" />
      </a>
      <a className="Playstores-android" href="/andorid">
        <img src={androidStroe} alt="youviame android store" />
      </a>
    </div>
  )

}
