import Header from "./src/components/Header.js";
import Body from "./src/components/Body.js";
import ReactDOM from "react-dom/client";
import Contact from "./src/components/Contact.js";
import Cart from "./src/components/Cart.js";
import Error from "./src/components/Error.js";
import RestaurantMenu from "./src/components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import { lazy, Suspense } from "react";
import { Provider, useSelector } from "react-redux";
import appStore from "./src/utils/appStore.js";
import Login from "./src/components/Login.js";

const About = lazy(() => import("./src/components/About.js"));

const App = () => {
  const user = useSelector((store) => store.user);
  return (
    <>
      {user ? (
        <>
          <Header />
          <div className="mt-25">
            <Outlet />
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback="Loading...">
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant-menu/:id",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>,
);
