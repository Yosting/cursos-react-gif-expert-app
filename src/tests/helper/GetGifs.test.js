import {getGifs} from '../../helpers/GetGifs'

describe('Pruebas de GetGifs', () => { 
    test('Debe retornar un arreglo de gifs',async  () => { 
        const gifs = await getGifs('Demon slayer')
        expect(gifs.length).toBe(5)

        //Es igual a un objeto con la misma estructura sin importar el valor
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url : expect.any(String)
        })
     })
 })