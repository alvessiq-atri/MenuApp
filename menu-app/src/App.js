import "./App.css";
import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/homepage";
import NavBar from "./components/navbar";
import AddPlate from "./routes/add-plate";
import EditMenu from "./routes/edit-menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    // errorElement: <ErrorPage/>
  },
  {
    path: "/add-plate",
    element: <AddPlate />,
  },
  {
    path: "/:plateId",
    element: <EditMenu />,
  },
]);

function App() {
  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
