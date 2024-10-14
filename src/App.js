import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// RouterProvider  is a Component so we can you it in reader place instead of AppLayout
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
// import About from "./components/About";
// Error Component when any error pop up
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

//import context 
import UserContext from "./utils/UserContext";

// import Grocery from "./components/Grocery";
// Outlet is a component which will fiter the children based on the router passed and show that specific component to user.
import { Outlet } from "react-router-dom";

//Import Provider from react-redux
import { Provider } from "react-redux";

//Imported Redux store to connect into our application.
import appStore from "./utils/appStore";

import Cart from "./components/Cart";



const Grocery = lazy(()=>import("./components/Grocery"))

const About = lazy(()=>import("./components/About"))



const AppLayout = () => {
  //Create a useState 
const [userName,setUserName]=useState()

//Assume fetching some data from an api.
useEffect(()=>{
  const data = {
    name : "Afsin Hassn"
  }
  setUserName(data.name)
},[])


  return (
    <Provider store={appStore} >
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>

    <div className="app">

      <Header />

      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
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
      { path: "/about-us", element:<Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>  },
      { path: "/contact-us", element: <Contact /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
      {path:"/grocery",element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense> },
      {path:"/cart",element:<Cart/>}
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
