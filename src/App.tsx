import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ContactBook } from "./components/ContactBook";
import { CreateContact } from "./components/CreateContact";
import { Modals } from './components/Modals';

export const App = (): JSX.Element => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ContactBook />,
    },
    {
      path: "/createContact/",
      element: <CreateContact />,
    },
    {
      path: "/editContact/:id",
      element: <CreateContact />,
    },

    {
      path: "/view/:id",
      element: <Modals/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
