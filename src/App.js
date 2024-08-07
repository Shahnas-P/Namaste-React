import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// RouterProvider  is a Component so we can you it in reader place instead of AppLayout
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
// Error Component when any error pop up
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// Outlet is a component which will fiter the children based on the router passed and show that specific component to user.
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// createBrowserRouter Configuration for different routers
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about-us", element: <About /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
