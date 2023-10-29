import React from 'react';
import resume from './assets/resume.json';
import Heading from "./component/Heading";
import Contents from "./component/Contents";
import { useContents } from "./hooks/useContents";
import Footer from "./component/Footer";
function App() {
  const { contents } = useContents();
  return (
    <div className="App">
      <Heading />
      <hr />
      <Contents contents={contents} deps={0}/>
      <Footer />
    </div>
  );
}

export default App;
