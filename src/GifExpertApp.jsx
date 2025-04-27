import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['Batman'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setcategories([newCategory, ...categories])
    }
    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory addCategory={onAddCategory} placeholder="Buscar gifs" />
            {categories.map(category => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    )
}
