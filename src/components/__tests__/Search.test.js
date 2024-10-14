import { fireEvent, render, screen } from "@testing-library/react"
import Body from '../Body'
import MOCK_DATA_RES_LIST from '../mocks/MockRestaurantListData.json'
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'
describe("Body Component Related Inegration Test Cases",()=>{
    
    //Create a mockFunction
    global.fetch = jest.fn(()=>{
        return Promise.resolve({
            json:()=>{
                return Promise.resolve(MOCK_DATA_RES_LIST)
            }
        })
    })

    it("Should  search ResList for burger text input ",async()=>{
       await act(
            async()=> {render(
            <BrowserRouter>
            <Body/>
            </BrowserRouter>
         )}
        )

        //To find all cards before searching
        const cardsBeforeSearch = screen.getAllByTestId("resCard")
        //Assertion
        expect(cardsBeforeSearch.length).toBe(8)
        
        //Testing SearchButton loaded
        const searchBtn = screen.getByRole("button",{name:"Search"})
        // console.log(searchBtn);

        
        //Assertion
        expect(searchBtn).toBeInTheDocument()

        //Find the search Input 
        const searchInput = screen.getByTestId("searchInput")

        //To change the value 
        fireEvent.change(searchInput,{target:{value:"burger"}})

        //To Click on searhButton
        fireEvent.click(searchBtn)

        //To find  all the restaurantCard After search
        const cardsAfterSearch = screen.getAllByTestId("resCard")

        //Assertion
        expect(cardsAfterSearch.length).toBe(1)

       
    })

    it("Should Filter Top Rated Restaurant",async()=>{
        await act(
            async()=>{
                render(
                    <BrowserRouter>
                    <Body/>
                    </BrowserRouter>
                )
            }
        )

        //Find How many cards Before filter 
        const cardsBeforeFilter = screen.getAllByTestId("resCard")

        expect(cardsBeforeFilter.length).toBe(8)

        //Find TopRated Button
        const topRatedBtn = screen.getByRole("button",{name:"Top-Rated"})

        //Click the topRatedBtn
        fireEvent.click(topRatedBtn)

        //Find Number of cards after the filter
        const cardAfterFilter = screen.getAllByTestId("resCard")
        // console.log(cardAfterFilter);
        
        //Assertion
        expect(cardAfterFilter.length).toBe(2)
    })
})