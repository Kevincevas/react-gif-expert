import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ( {onNewCategory} ) => {
  
  const [inputValue, setInputValue] = useState('');

  //funcion para que cambie el valor del input
  const onInputChange = ({ target }) => {
    // console.log(target.value);
    setInputValue(target.value);
  };

  const onSubmit = () => {
    //no refresque la web
    event.preventDefault();

    //trim: elimina los espacios al inicio y al final del input
    if(inputValue.trim().length <=1) return;

    //setCategories( categories => [inputValue, ...categories] );

    setInputValue('');
    onNewCategory(inputValue.trim());

  }

  return (
      <form action="" onSubmit={(event) => onSubmit(event)} aria-label='form'> 
        <input
          type="text"
          placeholder="Buscar Gifs"
          value={inputValue}
          //siempre recibe el event: onChange={ (event) => onInputChange(event) }
          onChange={onInputChange}
        />
        <br /><br />
      </form>

  );
};

//cuando necesitamos que la property siempre sea proporcionada
AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}