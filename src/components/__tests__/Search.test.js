import {screen, render, fireEvent, act} from "@testing-library/react";
import Body from "../Body.js";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should render body component with search", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    )
    const searchButton = screen.getByRole("button", {name: "Search"})
    expect(searchButton).toBeInTheDocument();
    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, {target: {value: 'House'}})
    fireEvent.click(searchButton);
    const restaurantCards = screen.getAllByTestId("restaurant-card");
    expect(restaurantCards.length).toBe(2);
});

it("should filter top rated restaurants", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    )
    const restaurantBefore = screen.getAllByTestId("restaurant-card");
    expect(restaurantBefore.length).toBe(8);
    const topRatedRes = screen.getByRole("button", {name: "Top Rated"});
    fireEvent.click(topRatedRes);
    const restaurantCards = screen.getAllByTestId("restaurant-card");
    expect(restaurantCards.length).toBe(2);
});