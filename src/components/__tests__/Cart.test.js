import {  act, fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA_MENU from '../mocks/MockResMenu.json'
import { Provider } from "react-redux"
import appStore from '../../utils/appStore'
import Header from '../Header'
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import Cart from '../Cart'
describe("Test case for  Adding Items to cart",()=>{

    global.fetch = jest.fn(()=>{
        return Promise.resolve({
            json:()=>{
                return Promise.resolve(MOCK_DATA_MENU)
            }
        })
    })
    it("Should render Cheese Volcano (8) restaurant 8 items ",async()=>{
     
        await act(async()=>{
            render(
                <Provider store={appStore}>
                    <BrowserRouter>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                    </BrowserRouter>
               
                </Provider>
            )
        })
           
        const accordianHeader = screen.getByText("Cheese Volcano (8)")

      //Click on the Acoordian
      fireEvent.click(accordianHeader)

      //Find how many of the items are presented in the accordian
      const items = screen.getAllByTestId("foodItems")
      //Assertion
      expect(items.length).toBe(8)     
       //Find out the add button
       const addBtn  = screen.getAllByRole("button",{name:"ADD"})

       
       //Find Card 0 item present or not Before Clicking the add button
       const cartItem0 = screen.getByText("Cart (0 items)")

       expect(cartItem0).toBeInTheDocument()

       //Click on one Button
       fireEvent.click(addBtn[0])

       //Find Card 1 item present or not
       const cartItem = screen.getByText("Cart (1 items)")

       expect(cartItem).toBeInTheDocument()

       //ADD cart component to render 

       const cartComponentItemList = screen.getAllByTestId("foodItems")
       expect(cartComponentItemList.length).toBe(9)

       //Test to Click Clear Cart button
       const clearCartBtn = screen.getByRole("button",{name:"Clear Cart"})
       expect(clearCartBtn).toBeInTheDocument()

       //Click event
       fireEvent.click(clearCartBtn)

       //Now expect the foodItems to be 8
       const cartItemClearedLeft = screen.getAllByTestId("foodItems")
       expect(cartItemClearedLeft.length).toBe(8)
    })

})