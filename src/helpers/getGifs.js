export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=GGp9nyGZeGK0ZVfrIxcrFiKg30Odk0Hd&q=${category}&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map(img => ({
        id: img.id,
        title:img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}