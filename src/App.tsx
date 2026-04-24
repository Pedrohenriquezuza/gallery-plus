import { BrowserRouter, Route, Routes } from "react-router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

import PageComponents from "./pages/Page-Components";
import LayoutMain from "./pages/LayoutMain";
import PageHome from "./pages/Page-Home";
import PagePhotoDetails from "./pages/page-photo-details";
import {NuqsAdapter} from "nuqs/adapters/react-router/v7"

const queryClient = new QueryClient();



export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <BrowserRouter>
          <Routes>
            <Route element={<LayoutMain />}>
              <Route index element={<PageHome />} />
              <Route path="/fotos/:id" element={<PagePhotoDetails />} />
              <Route path="/components" element={<PageComponents />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NuqsAdapter>
    </QueryClientProvider>
  );
}
