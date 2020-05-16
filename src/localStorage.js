// Se definen los metodos necesarios para guardar, eliminar y cargar estados dentro del almacenamiento interno del PC

// Carga el estado guardado en los archivos internos de la computadora
export const loadState = () => {
    try{
        const serializedState = localStorage.getItem('state');
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState)
    } catch(err){
        return undefined;
    }
};

// Guarda el estado actual en el almacenamiento interno
export const saveState = (state) => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch(err){
        //Catch error
    }
}

// Metodo para eliminar el estado guardado anteriormente
export const deleteState = (state) => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.removeItem('state', serializedState);
    } catch(err){
        //Catch error
    }
}