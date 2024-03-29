import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Careers, {careersLoader} from "./pages/careers/Careers";
import CareerDetails, {CareerDetailsLoader} from "./pages/careers/CareerDetails.jsx";
import CareerErrors from "./pages/careers/CareerErrors";


// Layouts
import RootLayouts from "./Layouts/RootLayouts";
import HelpLayout from "./Layouts/HelpLayout";
import CareersLayout from "./Layouts/CareerLayout";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayouts />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq/>}/>
          <Route path="contact" element={<Contact/>} action={contactAction} />
        </Route>

      <Route path="careers" element={<CareersLayout/>}>
      <Route index 
      element={<Careers/>}
      loader={careersLoader}
    
      />

      <Route 
      path=":id"
      element={<CareerDetails/>}
      loader={CareerDetailsLoader}
     
      />
      </Route>


        <Route path="*" element={<NotFound/>}/>
      </Route>
    )
  );
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
