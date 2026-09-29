import Header from "./src/components/Header.js"
import Body from "./src/components/Body.js"
import ReactDOM from "react-dom/client"
import About from "./src/components/About.js"
import Contact from "./src/components/Contact.js"
import Cart from "./src/components/Cart.js"
import Error from "./src/components/Error.js"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css"

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
        
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
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/cart",
                element: <Cart />,
            }  
        ],
        errorElement: <Error />,
    }

])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
