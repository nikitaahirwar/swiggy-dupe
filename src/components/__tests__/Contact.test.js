import {screen, render } from "@testing-library/react";
import Contact from "../Contact.js";
import "@testing-library/jest-dom";

describe("contact component test cases", () => {
    beforeAll(() => {
        console.log("Before all test cases");
    })

    beforeEach(()=> {
        console.log("Before each test case");
    })

    afterAll(() => {
        console.log("After all test cases");
    })

    afterEach(() => {
        console.log("After each test case");
    })
    
    test("should render contact component", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })

    test("should have submit button", () => {
        render(<Contact />);
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    })

    test("should have two input fields", () => {
        render(<Contact />);
        const inputFields = screen.getAllByRole("textbox");
        expect(inputFields.length).toBe(2);
    })
})
