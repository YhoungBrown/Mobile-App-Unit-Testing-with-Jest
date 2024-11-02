import { act, render, waitFor, } from "@testing-library/react-native";
import CatFacts from "./CatFacts";

describe("CatFacts", () => {
    it("displays cat facts", async () => {
        // Mock the fetch API (can use either fetch or global.fetch and the red underline is just typscript way of saying the expected result structure isn't complete since we're mocking it and not getting a real api fetch. i removed the underline with tsignore)
//@ts-ignore
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () =>
                    Promise.resolve([
                        { text: "First Cat Facts" },
                        { text: "Second Cat Facts" }
                    ])
            })
        );
        

        // Render the component
        const { findByText } = render(<CatFacts />);

        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalled();
        });

        // Wait for the text to appear
        const catResult = await findByText("First Cat Facts");

        // Assert that the result is truthy
        expect(catResult).toBeTruthy();
    });

    it("Displays No Cats Data Found", async () => {
        // Mock the fetch API (can use either fetch or global.fetch and the red underline is just typscript way of saying the expected result structure isn't complete since we're mocking it and not getting a real api fetch. i removed the underline with tsignore)
//@ts-ignore
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () =>
                    Promise.resolve([])
            })
        );

        // Render the component
        const { findByText } = render(<CatFacts />);

        // Wait for the text to appear
        const catResult = await findByText("No Cats Data Found");

        // Assert that the result is truthy
        expect(catResult).toBeTruthy();
    });

    
    it("Displays loading state", async () => {
        // Mock the fetch API (can use either fetch or global.fetch and the red underline is just typscript way of saying the expected result structure isn't complete since we're mocking it and not getting a real api fetch. i removed the underline with tsignore)
//@ts-ignore
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () =>
                    Promise.resolve([])
            })
        );

        // Render the component
        const { findByText } = render(<CatFacts />);

        // Wait for the text to appear
        const catResult = await findByText("Loading...");

        // Assert that the result is truthy
        expect(catResult).toBeTruthy();
    });
});
