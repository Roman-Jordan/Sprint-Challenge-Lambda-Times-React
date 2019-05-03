import React from 'react';
import withAuthenticate from './authenticate/withAuthinticate';
import LoggedIn from './components/LoggedIn';

const LogIn = withAuthenticate(LoggedIn)
const App = () => {
  return <LogIn />;
}

export default App;
