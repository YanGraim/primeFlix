import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Error from "./pages/Error";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
