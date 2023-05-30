import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid.jsx', () => {
    const category = 'Jhon Wick';
    
    test('debe de mostrar el loading inicialmente ', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render( <GifGrid category={category} /> );
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText(category) );
    });
    

    test('debe de mostrar items cuando se cargan las imagenes mediante el useFetchGifs', () => {
        
        const gifs = [
            {
                id:'ABC',
                title:'Jhon Wick',
                url:'https://localhost/jhon.jpg'
            },
            {
                id:'123',
                title:'Tony',
                url:'https://localhost/tony.jpg'
            }
        ]

        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render( <GifGrid category={category} /> );
        expect(screen.getAllByRole('img').length).toBe(2);
    })
    

})
