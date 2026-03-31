import { BrowserRouter, Route, Routes } from "react-router";
import PageComponents from "./pages/Page-Components";
import LayoutMain from "./pages/LayoutMain";
import PageHome from "./pages/Page-Home";
import PagePhotoDetails from "./pages/page-photo-details";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<PageHome />} />
          <Route path="/fotos/:id" element={<PagePhotoDetails />} />
          <Route path="/components" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
