import { Link } from "react-router-dom"
import './ItemCard.scss'
const ItemCard = ({item}) => {

    return (
        <div className='col-3 m-2'>
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.descripcion}</p>
            <p><strong>Precio: ${item.precio}</strong></p>
            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Detalles</Link>
        </div>
    )
}

export default ItemCard