import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import './index.css'
import Home from './components/Home';
import ErrorPage from './components/Error';
import About from './components/About';
import GenItinerary from './components/GenItinerary';
import ItineraryResults from './components/ItineraryResults';
import { MyContextProvider } from './components/context/store'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <MyContextProvider>
    <RouterProvider router={router} />
  </MyContextProvider>
  //</React.StrictMode>
);
