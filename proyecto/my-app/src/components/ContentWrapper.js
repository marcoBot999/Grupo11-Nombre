import TraerApi from './Api';

import ApiUser from './apiUsers';

import TotalApiUser from './totalUsers';
 
import TotalApiProduct from './TotalProductos';

import TotalApiCategory  from "./TotalCategorias";

import TotalApiProductosCategory from "./TotalProductosCategorias"

function ContentWrapper() {
    return(
        <>
        <h2> productos</h2>
            <TraerApi/>
        <h2> Ultimo Usuario</h2>
            <ApiUser/>
        <h2>Total Usuarios</h2>
        <TotalApiUser/>
        <h2>Total Productos</h2>
        <TotalApiProduct/>
        <h2> Total Categorias</h2>
        < TotalApiCategory/>
        <h2> Total de Productos por Categorias</h2>
        <TotalApiProductosCategory/>
        </>
        )
}

export default ContentWrapper