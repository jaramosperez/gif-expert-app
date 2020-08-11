import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    
    //const categories = ['Batman', 'Superman', 'Wonder Woman', 'Aquaman' ]
    const [categories, setCategories] = useState(['Batman']);
/* 
    const handleAdd = () => {

        // Ambas Opciones son Validas para agregar contenido a un Array.
        //setCategories( [ 'Riley Reid', ...categories ])
        //setCategories( [ ...categories, 'Riley Reid' ])
        //setCategories( cate => [ ...cate, 'Riley Reid' ] );
    }
 */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
            {
                categories.map( category => (
                    // El key no puede ser el indice y tiene que ser único.
                    <GifGrid 
                    key={ category }
                    category={ category } />
                ))
            }
            </ol>
        </>
    )

}

export default GifExpertApp;