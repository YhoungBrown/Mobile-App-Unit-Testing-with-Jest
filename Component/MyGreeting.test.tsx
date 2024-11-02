import { render } from "@testing-library/react-native";
import MyGreeting from "./MyGreeting";

describe("MyGreeting", () => {
    it("speaks in french", () => {
        const {getByText} = render(<MyGreeting ln="fr" name= "Jane"/>)
        expect(getByText("Bonjour Jane"));
    });
    it("speaks in Spanish", () => {
        const {getByText} = render(<MyGreeting ln="es" name= "Bob"/>)
        expect(getByText("Hola Bob"));
    });
    it("speaks in english", () => {
        const {getByText} = render(<MyGreeting ln="en" name= "Yhoung"/>)
        expect(getByText("Hello Yhoung"));
    });
});