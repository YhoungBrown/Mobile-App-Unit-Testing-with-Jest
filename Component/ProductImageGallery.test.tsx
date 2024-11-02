import { Image } from "react-native";
import ProductImageGallery from "./ProductImageGallery";
import { render } from "@testing-library/react-native";

describe("Product image Gallery", () => {
    it("should display nothing when imageUrl array is empty", () => {
        const imageUrls = [];

        const result = render(<ProductImageGallery imageUrls={imageUrls}/>)

        expect (result.toJSON()).toBeNull();
    });
    
    it("should display images when imageUrl array is not empty", () => {
            const imageUrls = [
            require('../assets/beautifulSetUP.jpg'),
            require("../assets/catWalking.jpg"),
            require("../assets/chelseaLovers.jpg"),
            require("../assets/hamstarPower.jpeg"),
            require("../assets/TechMind.jpeg"),
            require("../assets/TenHagTacticals.jpg")
            ];

            //we removed the props option from the productImageGallery tag below because the mage uls has been hardcoded and it is static, else, the we'd have added the image url as prop to the productImageGallery tag
            const {getByTestId} = render(<ProductImageGallery imageUrls={imageUrls}/>)
            
            imageUrls.forEach((_, index) => {
                    const result = getByTestId(`product-image ${index}`)
                
                    expect(result).toBeTruthy();
            });
    });
    
    //OR (but the above approach is more advisable)
    
    // it("should display images when imageUrl array is not empty", () => {
    //         const imageUrls = [
    //             require('../assets/beautifulSetUP.jpg'),
    //             require("../assets/catWalking.jpg"),
    //             require("../assets/chelseaLovers.jpg"),
    //             require("../assets/hamstarPower.jpeg"),
    //             require("../assets/TechMind.jpeg"),
    //             require("../assets/TenHagTacticals.jpg")
    //         ];
            
    //        
    //         const {UNSAFE_getAllByType} = render(<ProductImageGallery imageUrls={imageUrls}/>)
    
    //         const result = UNSAFE_getAllByType(Image)
            
    //         expect(result.length).toBe(imageUrls.length)
    //     });
});