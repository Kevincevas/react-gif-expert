import { fireEvent, render,screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/addCategory"

describe('Pruebas en addCategory.jsx', () => {


    test('debe de cambiar el valor de la caja de texto ', () => {
        render(<AddCategory onNewCategory={() =>{}}/>);
        
        //busca el input
        const input = screen.getByRole('textbox');

        //simulando el evento de ingreso en el input
        fireEvent.input( input, { target: { value: 'Jhon' } });

        expect(input.value).toBe('Jhon');

        //screen.debug();
    });


    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Jhon Wick';

        //es un Mock: es una simulacion de la funcion pero con el control absoluto de la funcion
        const onNewCategory = jest.fn();
        
        render(<AddCategory onNewCategory={ onNewCategory }/>);
        
        //busca el input
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');


        fireEvent.input( input, { target: { value: inputValue } });
        
        //simulando el evento del submit del form
        fireEvent.submit( form );
        //screen.debug();

        expect( input.value).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    });

    test('no debe de llamar el onNewCategory si el input esta vacio', () => {
        
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const form = screen.getByRole('form');

        //simulando el evento del submit del form
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        //expect( onNewCategory ).not.toHaveBeenCalled();

    });
    
    

  
})
