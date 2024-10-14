import { fireEvent, render, screen } from "@testing-library/react"
import Header from '../Header'
import appStore from "../../utils/appStore"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
describe("Header Component Test Case", () => {
    it("Should render Header Component with a Login button", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>

                    <Header />
                </Provider>

            </BrowserRouter>
        )
        //Querying
        // If there are more than one button and you need to test a specific button
        const loginButton = screen.getByRole("button",{name:"LOGIN"})

         //Methode 2
        // const loginButton = screen.getByText("LOGIN")

        //Assertion
        expect(loginButton).toBeInTheDocument()

    })

    it("Should render Header Component with  Cart (0 items)",()=>{

        render(
         <BrowserRouter>
           <Provider store={appStore}>
        <Header/>
         </Provider>
         </BrowserRouter>          
    )

     //Querying
     const cartItems = screen.getByText("Cart (0 items)")
     
     //Assertion
     expect(cartItems).toBeInTheDocument()
    })

    it("Should render Header Component with  Cart regex",()=>{

        render(
         <BrowserRouter>
           <Provider store={appStore}>
        <Header/>
         </Provider>
         </BrowserRouter>          
    )

     //Querying
     const cartItems = screen.getByText(/Cart/)
     
     //Assertion
     expect(cartItems).toBeInTheDocument()
    })

    it("Should render Login button change into Logout onClick",()=>{
        //render
        render(
            <BrowserRouter>
            <Provider store={appStore}>
              <Header/>
            </Provider>
            </BrowserRouter>          
        )

        //Querying
        const loginButton = screen.getByRole("button",{name:"LOGIN"})

        //Firing the event
        fireEvent.click(loginButton)

        const logoutButton = screen.getByRole("button",{name:"LOGOUT"})

        //Assertion 
        expect(logoutButton).toBeInTheDocument()
    })
})