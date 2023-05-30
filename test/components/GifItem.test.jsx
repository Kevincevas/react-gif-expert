import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en GifItem.jsx', () => {
    const title = 'Jhon';
    const url = 'https://jhon-wick.com/jhon.jpg';
    
  test('debe de hacer match con el snapshot', () => {

    const {container} = render( <GifItem title={title} url={url} /> );
    expect(container).toMatchSnapshot();

  });

  test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render( <GifItem title={title} url={url} /> );
    //screen.debug();
    // Forma 1
    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title);

    // Forma 2
    const {src, alt} = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);

    //console.log(screen.getByRole('img').alt)
  });

  test('debe de mostrar el titulo del componente', () => {
    render( <GifItem title={title} url={url} /> );
    expect(screen.getByText(title)).toBeTruthy();
  })
  
  
  
})
