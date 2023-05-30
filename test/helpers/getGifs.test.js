import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en getGifs.js', () => {
    
  test('debe retornar un arreglo de gifs ', async() => {
    const gifs = await getGifs('Marvel');
    //console.log(gifs);
    expect(gifs.length).toBeGreaterThan(0); //toBeGreaterThan: mayor a tal numero
    expect(gifs[0]).toEqual({
        id: expect.any(String), //espera cualquier string
        title: expect.any(String),
        url: expect.any(String),
    })
  });
  
})
