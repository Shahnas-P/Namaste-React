import { render, screen } from "@testing-library/react"
import RestaurantCard from '../RestaurantCard'
import RestaurantCardMockData from '../mocks/RestaurantCardMockData.json'
import "@testing-library/jest-dom"
describe("Test cases for RestaurantCard",()=>{
    it("Should render RestaurantCard Component with props Data",()=>{

        render(<RestaurantCard resData={RestaurantCardMockData} />)

        //Querying
        const restaurantName = screen.getByText("Chinese Wok")

        //Assertion 
        expect(restaurantName).toBeInTheDocument()
    })
})