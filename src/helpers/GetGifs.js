export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=t3eiZfrfLrWILRo5BNMwGiklq2yBDU1i&q=${category}&limit=5`
    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    })

    return gifs
}