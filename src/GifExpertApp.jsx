//despues de la version 17 no hace falta importar react
//import React from 'react'

import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["John Wick"]);

  const onAddCategory = (newCategory) => {
    //evitar que se ingrese categorias iguales
    if (categories.includes(newCategory)) return;

    //Forma 1
    setCategories([newCategory, ...categories]);

    //Forma 2
    //setCategories(cat => [...cat,'COD']);
  };

  return (
    <>
      {/* ESTRUCTURANDO EL FRONT */}
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input, importando el componente */}
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />

      {/* Listado de Gif */}
      {
          categories.map((category) => (
              <GifGrid 
                  key={category} 
                  category={category} />
          ))
      }
    </>
  );
};
