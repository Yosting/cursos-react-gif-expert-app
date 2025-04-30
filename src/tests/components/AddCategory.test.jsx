import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../components/AddCategory'


describe('Pruebas Add Category', () => {
    test('Debe de cambiar el valor del input', () => {
        render(<AddCategory addCategory={() => { }} />)
        const input = screen.getByRole('textbox')

        fireEvent.input(input, { target: { value: "JJK" } })

        expect(input.value).toBe('JJK')
        screen.debug()
    })

    test('Debe llamar addCategory si el input no esta vacio', () => {
        const inputValue = "Gears of War"
        const addCategory = jest.fn()

        render(<AddCategory addCategory={addCategory} />)
        const input = screen.getByRole('textbox')
        const submit = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(submit)

        expect(input.value).toBe('')
        //Valida que haya sido llamado
        expect(addCategory).toHaveBeenCalled()
        //Valida que haya sido llamado con esos parametros
        expect(addCategory).toHaveBeenCalledWith(inputValue)
    }) 
    
    test('No debe llamar addCategory si el input esta vacio', () => {
        const addCategory = jest.fn()

        render(<AddCategory addCategory={addCategory} />)
        const input = screen.getByRole('textbox')
        const submit = screen.getByRole('form')

        fireEvent.input(input, { target: { value: '' } })
        fireEvent.submit(submit)

        expect(input.value).toBe('')
        expect(addCategory).toHaveBeenCalledTimes(0)
    })
})