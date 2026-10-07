import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent, act } from "@testing-library/react";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/resMenu.json";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should render restaurant menu component", async () => {
    await act(async() => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        )
    })

    const accordionHeader = screen.getByText('Lite And Wholesome')
    fireEvent.click(accordionHeader)
    const foodItems = screen.getAllByTestId("food-items")
    expect(foodItems.length).toBe(6)
    expect(screen.getByText("Cart(0 items)")).toBeInTheDocument()
    const addBtn = screen.getAllByRole('button', {name: "Add +"})
    fireEvent.click(addBtn[0])
    expect(screen.getByText("Cart(1 items)")).toBeInTheDocument()
})