import React from "react";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { productsData } from "./api/Api";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import Home from "./Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Comingsoon from "./pages/Comingsoon"
const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/comingsoon",
        element: <Comingsoon />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
