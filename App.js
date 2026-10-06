import Header from "./src/components/Header.js"
import Body from "./src/components/Body.js"
import ReactDOM from "react-dom/client"
import Contact from "./src/components/Contact.js"
import Cart from "./src/components/Cart.js"
import Error from "./src/components/Error.js"
import RestaurantMenu from "./src/components/RestaurantMenu.js"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css"
import { lazy, Suspense, useState } from "react";
import UserContext from "./src/utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore.js";

const About = lazy(() => import('./src/components/About.js'))

const App = () => {
    const [userName, setUserName] = useState("Nikita");
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <Header />
                <div className="mt-[100px]">
                    <Outlet />
                </div>            
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
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
            }
        ],
        errorElement: <Error />,
    }

])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
