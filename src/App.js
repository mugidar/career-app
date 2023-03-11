import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
//pages
import About from "./pages/About";
import Home from "./pages/Home";
//layout
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import FAQ from "./pages/help/FAQ";
import Contacts, { contactAction } from "./pages/help/Contacts";
import NotFound from "./pages/NotFound";
import CareersLayout from "./layouts/CareersLayout";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails, { CareerDetailsLoader } from "./pages/careers/CareerDetails";
import CareersError from "./pages/careers/CareersError";
//
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/careers" element={<CareersLayout />}  errorElement={<CareersError/>}>
        <Route index element={<Careers />} loader={careersLoader} />
        <Route path=":id" element={<CareerDetails />} loader={CareerDetailsLoader} ></Route>
      </Route>

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<FAQ />} />
        <Route path="contacts" element={<Contacts />} action={contactAction}/>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
