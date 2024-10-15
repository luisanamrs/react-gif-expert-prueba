import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        //el prevent es para que la pagina no se actualice a la hora de enviar la info del input
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        /* setCategories( categories => [ inputValue, ...categories]); */
        //este set que tenemos abajo nos ayuda a que se limpie el input cuando demos enter
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                //El value es para que en el input aparezca como valor predeterminado el valor que esta guardado en el useState, en este caso no tenemos nada
                value={ inputValue }
                //El onchange es que para que cambie el valor que este en el input
                onChange={ onInputChange }
            />
        </form>
        
    )
}

