import { render } from "@testing-library/react-native";
import UserAccount from "./UserAccount";

describe("User Accout", () => {
    it("should show edit button when user is an admin", () => {
        const {queryByText} = render(<UserAccount id={1} name={"Sam"} isAdmin={true}/>)
        const adminPresent = queryByText("Edit")

        expect(adminPresent).toBeTruthy()
    });

    it("should not show edit button when user isnt admin", () => {
        const {queryByText} = render(<UserAccount id={2} name="Hannah"/>)

        const adminAbsent = queryByText("edit");
        expect(adminAbsent).toBeFalsy();
    });

    it("should show the user's name", () => {
        const {getByText} =render(<UserAccount id={3} name="Rebeccah" isAdmin={true}/>)

        const activeUser = getByText(/Rebeccah/i);
        expect(activeUser)
    })
})