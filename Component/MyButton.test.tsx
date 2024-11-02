import MyButton from "./MyButton";
import {render, fireEvent} from "@testing-library/react-native";


describe("My Button", () => {
    it("calls onPress function when the button is press", () => {
        const mockOnPress = jest.fn();

        const {getByTestId} = render(<MyButton onPress={mockOnPress}/>)
        const pressMeButton = getByTestId("firstButton")
        fireEvent.press(pressMeButton);

        expect(mockOnPress).toHaveBeenCalled();
    })
})