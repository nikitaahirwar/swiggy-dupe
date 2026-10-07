import {screen, render, fireEvent } from "@testing-library/react";
import Header from "../Header.js";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore.js";

it("should render header component", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole('button', { name: 'Login'});
    expect(loginButton).toBeInTheDocument();
})

it("should change to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole('button', { name: 'Login'});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole('button', { name: 'Logout'});
    expect(logoutButton).toBeInTheDocument();
})

it("should have cart items", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const cartButton = screen.getByText('Cart(0 items)');
    expect(cartButton).toBeInTheDocument();
})