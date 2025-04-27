import { useState } from 'react'

export const AddCategory = ({ placeholder = 'Buscar', addCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        const text = event.target.value
        setInputValue(text)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim().length > 0) addCategory(inputValue.trim())
        setInputValue('')
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={onInputChange} />

        </form>
    )
}
