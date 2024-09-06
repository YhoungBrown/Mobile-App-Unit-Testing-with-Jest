import renderer from "react-test-renderer"
import App from "./App"


describe("App File", () => {
    it("has just a child", () => {
        const result = renderer.create(<App />).toJSON();
        console.log(result)
        expect(result.children.length).toBe(2);
    })
})