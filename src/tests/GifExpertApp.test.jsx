import { fireEvent, getByRole, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../GifExpertApp"

describe('Pruebas GifExpertApp', () => { 

    test('Debe crear un GifGrid cuando se agrega una nueva categoria', () => { 
        render(<GifExpertApp/>)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input,{target:{value: "Fushiguro"}})
        fireEvent.submit(form)
        
        expect(screen.getAllByRole('heading', {level: 3})[0].textContent).toContain("Fushiguro")
        screen.debug()

     })
 })