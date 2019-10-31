import React from 'react';
import './about-page.sass';

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-page__title">About</div>
      <h2>Design</h2>
      <p>template from www.symu.co</p>
      <h2>Used libs</h2>
      <p>React</p>
      <p>Redux</p>
      <p>React-Redux</p>
      <p>Redux-thunk</p>
      <h2>Backend</h2>
      <p>Firebase Hosting + Realtime database + storage</p>
    </div>
  )
}

export default AboutPage;