import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { ErrorPage } from "./pages/ErrorPage";

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
};
