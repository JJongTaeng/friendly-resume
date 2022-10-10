import React from 'react';
import resume from './assets/resume.json';
import Heading from "./component/Heading";
import Contents from "./component/Contents";
function App() {
  return (
    <div className="App">
      <Heading />
      <Contents />
    </div>
  );
}

export default App;
