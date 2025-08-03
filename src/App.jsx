import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { ROUTES } from "./routes/index.";
import { Header } from "./components/Layout/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {ROUTES.map((item) => (
            <Route key={item.key} path={item.path} Component={item.component} />
          ))}
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;

