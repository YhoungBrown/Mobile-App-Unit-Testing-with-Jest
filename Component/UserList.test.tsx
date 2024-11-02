import { render } from "@testing-library/react-native";
import UserList from "./UserList";
import { user } from "./UserAccount";

describe("UserList", () => {
    it("should show no user when user array is empty", () => {

        const {getByText} = render(<UserList Users ={[]} />);

        const noUser = getByText(/no user/i)

        expect(noUser)
    });

    it("should show each Users", () => {
        const Userss: user[] = [
            {id: 1, name: "John", isAdmin: true},
            {id: 2, name: "Enny", isAdmin: false}
        ]

        const {getByText} = render(<UserList Users ={Userss} />);  

       Userss.forEach(user => {

        const foundUser = getByText(new RegExp(user.name, "i"))

        expect(foundUser).toBeTruthy();
    });
    }); 

        
})