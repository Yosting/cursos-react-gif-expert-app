import { render, renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Pruebas en useFetchGifs', () => {
    test('Debe retornar un arreglo de gifs y isLoading en false', async () => {
        // Funcion necesaria para renderizar hooks ya que se necesita de un componente para poder usarlos
        const { result } = renderHook(() => useFetchGifs('Yuji Itadori'))
        
        // Ya que tiene un useEffect, se espera ocurra algo que esta en el useEffect
        await waitFor(
            () => expect(result.current.isLoading).toBeFalsy()
        )

        const { gifs, isLoading} = result.current

        expect(gifs.length).toBeGreaterThan(0)
    })
})