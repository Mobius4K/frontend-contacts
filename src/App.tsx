import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ContactBook } from "./components/ContactBook";
import { CreateContact } from "./components/CreateContact";
import { EditContact } from './components/EditContact';

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
      element: <EditContact/>,
    },


  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
