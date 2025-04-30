export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=f6TzkCspa019Vy9LuRQkDL8nCI3fVwYO&q=${category}&limit=5`
    const resp = await fetch(url)
    const { data } = await resp.json()
    console.log(data)

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    })

    return gifs
}