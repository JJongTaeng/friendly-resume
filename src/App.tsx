import React from 'react';
import resume from './assets/resume.json';
import Heading from "./component/Heading";
import Contents from "./component/Contents";
import { useContents } from "./hooks/useContents";
function App() {
  const { contents } = useContents();

  return (
    <div className="App">
      <Heading />
      <hr />
      <Contents contents={contents} deps={0}/>
    </div>
  );
}

export default App;
