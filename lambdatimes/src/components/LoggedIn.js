import React from 'react';
import TopBar from './TopBar';
import Header from './Header';
import Content from './Content/Content';

export default function LoggedIn(){
    return (
      <div className="App">
        <TopBar />
        <Header />
        <Content />
      </div>
    );
  }