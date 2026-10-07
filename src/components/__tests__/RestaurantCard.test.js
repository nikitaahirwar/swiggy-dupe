import RestaurantCard from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";

it("should render RestaurantCard component correctly", () => {
    render(
        <RestaurantCard restaurant={MOCK_DATA} />
    )
    const restaurantName = screen.getByText("Corner House Ice Cream");
    expect(restaurantName).toBeInTheDocument();
})