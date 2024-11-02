import { fireEvent, render } from "@testing-library/react-native";
import TermsAndConditions from "./TermsAndConditions";

describe("terms and condition component", () => {
    const limit = 50
    const shortText = "i am a short text"
    const longText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi accusantium accusamus aspernatur labore possimus deleniti illo doloribus eos id. Eos a autem fuga quis fugiat molestias pariatur vero! Modi, dolorem!";
    const truncatedText = longText.substring(0, limit) + "...";

    const rendercomponent = (text: string) => {
        const fakefunction = jest.fn();
        const utils = render(<TermsAndConditions onPress={fakefunction} text={text} />);
    
        // Return the test utilities and mock function without eagerly querying elements
        return {
            ...utils,
            fakefunction,
        };
    };
    

    it("should show no button when checkbox isn't selected", () => {
        const { queryByText } = rendercomponent(shortText);
        const checkBoxIsntSelected = queryByText(/Agree/i);
        expect(checkBoxIsntSelected).toBeFalsy(); // "Agree" button should not be present initially
    });
    
    it("should show button when checkbox is selected", () => {
        const { getByTestId, queryByText } = rendercomponent(shortText);
        
        const checkBoxIsSelected = getByTestId("checkboxing");
        fireEvent.press(checkBoxIsSelected);
        
        const agreeButton = queryByText(/Agree/i);
        expect(agreeButton).toBeTruthy(); // "Agree" button should be present after checkbox is selected
    });
    
    it("should show that the agree button has been clicked", () => {
        const { getByTestId, fakefunction } = rendercomponent(shortText);
        
        const checkBoxIsSelected = getByTestId("checkboxing");
        fireEvent.press(checkBoxIsSelected); // Select checkbox
        
        const agreeButton = getByTestId("nxtpage");
        fireEvent.press(agreeButton); // Press the "Agree" button
        
        expect(fakefunction).toHaveBeenCalled(); // Ensure the function is called
    });
    
    it("should show short text", () => {
        const { getByText } = rendercomponent(shortText);
        const shortTextElement = getByText(shortText);
        expect(shortTextElement).toBeTruthy(); // Verify short text is shown
    });
    
    it("should show truncated text", () => {
        const { getByText } = rendercomponent(longText);
        const truncatedText = longText.substring(0, limit) + "...";
        const truncatedTextElement = getByText(truncatedText);
        expect(truncatedTextElement).toBeTruthy(); // Verify truncated text is shown
    });
    
    it("should show full text once 'show more' is clicked", () => {
        const { getByTestId, getByText } = rendercomponent(longText);
    
        const truncatedText = longText.substring(0, limit) + "...";
        expect(getByText(truncatedText)).toBeTruthy(); // Verify truncated text initially
    
        const showMoreButton = getByTestId("showmorebutton");
        fireEvent.press(showMoreButton); // Expand to full text
    
        const expandedText = getByTestId("whenexpanded");
        expect(expandedText.props.children).toBe(longText); // Full text should be shown
    
        const showLessButton = getByText(/Show Less/i);
        expect(showLessButton).toBeTruthy(); // "Show Less" button should be present
    });    
})