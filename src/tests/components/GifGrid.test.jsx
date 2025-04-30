import { getByRole, render, screen } from "@testing-library/react"
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from "../../hooks/useFetchGifs"

//Se establece useFetchGifs como un mock para controlar sus valores en los tests
jest.mock("../../hooks/useFetchGifs")

describe('Pruebas GifGrid', () => {

    const category = "Jujutsu Kaisen"

    test('Debe de mostrar el loading incialmente', () => {

        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        })
        render(<GifGrid category={category}/>)
        const cargando = screen.getByText('Cargando...')

        expect(cargando).toBeTruthy()
    })
    
    test('Debe de mostrar items cuando carga las imagenes', () => {
        const gifs = [
            {
                id:"GifId",
                title: "GifTitle",
                url: "GifUrl"
            }
        ]

        useFetchGifs.mockReturnValue({
            gifs: gifs,
            isLoading: false
        })

        render(<GifGrid category={category}/>)
        const gifImages = screen.getAllByRole('img')
        expect(gifImages.length).toBe(gifs.length)
    })
})