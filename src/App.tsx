import * as React from 'react';
import { ThemeProvider } from '@emotion/react';

import './App.css';
import { Theme } from './theme/Theme';
import { Header } from './organisms/Header';
import { SplashVideo } from './organisms/SplashVideo';
import { Banner } from './organisms/Banner';

const logo = require("./logo.svg") as string;

export const App = () => {
  return (
    <ThemeProvider theme = { Theme }>
      <Header />
      <SplashVideo />
      <Banner>
        <BannerPart title>Mattapan by the numbers</BannerPart>
        <BannerPart stat='39K' statColor='#db5649'>Bostonians living in Mattapan</BannerPart>
        <BannerPart stat='82%' statColor='#0589bf'>of the population is African American</BannerPart>
        <BannerPart stat='$44,744' statColor='#009687'>per year is the median household income status</BannerPart>
        <BannerPart stat='67+' statColor='#f27549'>acres of vibrant flora and fauna</BannerPart>
        <BannerPart stat='3408' statColor='#283593'>per 100k people have comitted a crime</BannerPart>
      </Banner>
      <Map></Map>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}
