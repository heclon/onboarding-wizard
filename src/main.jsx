import "./main.css";
import "primereact/resources/themes/lara-light-blue/theme.css"; // theme
import "primereact/resources/primereact.min.css"; // core css
import "primeicons/primeicons.css"; // icons
// import "primeflex/primeflex.css"; //TODO: Find out why brakes some layouts in tailwind!
import { createRoot } from "react-dom/client";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import InvestmentAmount from "./components/form/wizard/InvestmentAmount.jsx";
import Error from "./pages/error.jsx";
import Step1 from "./components/form/wizard/step1/Step1.jsx";
import Step2 from "./components/form/wizard/step2/Step2.jsx";
import Step3 from "./components/form/wizard/step3/Step3.jsx";
import Step4 from "./components/form/wizard/step4/Step4.jsx";

createStore({});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <Error />,
    children: [
      { path: "get-started", element: <Step1 /> },
      { path: "abn-search", element: <Step2 /> },
      { path: "abn-result", element: <Step3 /> },
      { path: "select-role", element: <Step4 /> },
      { path: "complete-details", element: <InvestmentAmount /> },
      // { path: "confirm-profile", element: <Result /> },
    ],
  },
]);

function App() {
  return (
    <StateMachineProvider>
      <RouterProvider router={router} />
    </StateMachineProvider>
  );
}

const rootElement = createRoot(document.getElementById("root"));

rootElement.render(<App />);
