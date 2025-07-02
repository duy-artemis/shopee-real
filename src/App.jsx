import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { ROUTES } from "./routes/index.";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((item) => (
          <Route key={item.key} path={item.path} Component={item.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//
