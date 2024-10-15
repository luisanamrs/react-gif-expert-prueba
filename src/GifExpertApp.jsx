import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {

        // este if nos ayuda a validar si la nueva categoria ya esta agregada o no
        if ( categories.includes(newCategory) ) return; 
        
        setCategories ([ newCategory, ...categories ]);
        // setCategories( cat => [ ...cat, 'Valorant' ] );
    } 

    return (
        <> 
            <h1>GifExpertApp</h1>


            <AddCategory 
                onNewCategory={ onAddCategory } 

            />

            {
                //Aca no colocamos el return explicito, pero si está
                categories.map( (category) => (
                        <GifGrid 
                            key={ category } 
                            category={ category } 
                        />
                    ))
            }
            {/* <li>ABC</li> */}

        </>
    )
}

export default GifExpertApp
