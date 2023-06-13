import Routes from "./routes/index.routes";
import { BrowserRouter } from "react-router-dom";
import Contextapi from "./context/Contextapi"
import { useState } from "react";

export default function App() {

  const [progressbar, setProgressbar] = useState(0)

  return (
    <Contextapi.Provider value={{ progressbar, setProgressbar }}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Contextapi.Provider>
  )
}

