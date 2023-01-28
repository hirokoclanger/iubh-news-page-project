import React, { createContext, useEffect, useState } from "react";

import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import TitleBar from "./components/TitleBar";
import "./app.css";

function App() {
  return (
    <div>
     <TitleBar/>
      <NewsContextProvider>
        <News />
      </NewsContextProvider>
    </div>
  );
}

export default App;
