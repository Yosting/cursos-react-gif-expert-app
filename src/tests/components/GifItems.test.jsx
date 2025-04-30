import { render, screen } from "@testing-library/react"
import { GifItem } from "../../components/GifItem"

describe('Pruebas GifItem', () => {

  const title = 'jjk'
  const url = 'http://gifjjk.com/'

  test('Renderiza elementos', () => {
    const { container } = render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot()
  })

  test('Debe de mostrar una imagen con el url y alt indicado', () => {
    render(<GifItem title={title} url={url}/>)
    const img = screen.getByRole('img')
    screen.debug()
    expect(img.src).toBe(url)
    expect(img.alt).toBe(title)
    
  })
})