import { screen } from "@testing-library/dom"
import Contact from "../Contact"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"

describe ("Contact Us page Test Case",()=>{
    it("Should load heading in contact us component",()=>{
        render(<Contact/>)
    
        //Querying
        const heading = screen.getByRole("heading")
        
        //Assertion
        expect(heading).toBeInTheDocument()
    })
    
    it("Should load button in contact us component",()=>{
         render(<Contact/>)
    
         //Querying 
         const button = screen.getByRole("button")
         
         //Assertion 
         expect(button).toBeInTheDocument()
    })
    
    it("Should present placeholder for button",()=>{
        render(<Contact/>)
    
        //Querying 
        const buttonPlacement = screen.getByPlaceholderText("Write your name")
    
        //Assertion 
        expect(buttonPlacement).toBeInTheDocument()
    })
    
    it("Should load 2 input boxes on the Contact Us Component.",()=>{
        render(<Contact/>)
    
        //Quering 
        const inputBoxes = screen.getAllByRole("textbox")
    
        // console.log(inputBoxes[0]);
        
        //Assertion
        expect(inputBoxes.length).toBe(2)
    })
})
