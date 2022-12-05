import Sidebar from "./SideBar";
import ContentWrapper from "./ContentWrapper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LastUserInDb from "./LastUserInDb";
import CategoriesInDb from "./CategoriesInDb";
import ContentRowPanels from "./contentRowPanels/ContentRowPanels";

function RouterApp() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <Routes>
          <Route path={"/"} element={<ContentWrapper />} />
          <Route path={"/ultima"} element={<LastUserInDb />} />
          <Route path={"/categorias"} element={<CategoriesInDb />} />
          <Route path={"/paneles"} element={<ContentRowPanels />} />
          <Route path={"*"} element={<ContentWrapper />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default RouterApp;
