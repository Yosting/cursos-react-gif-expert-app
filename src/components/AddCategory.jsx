import { useState } from 'react'

export const AddCategory = ({ placeholder = 'Buscar', addCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        const text = event.target.value
        setInputValue(text)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim().length < 1) return
        addCategory(inputValue.trim())
        setInputValue('')
    }
    return (
        <form onSubmit={onSubmit} aria-label='form'>
            <input
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={onInputChange} />

        </form>
    )
}
