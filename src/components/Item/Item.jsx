import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img, items}) => {
  return (
    <div className='Producto'>
        {img && <img className='Producto__imagen' src={img} alt={nombre} />}
        <h3>{nombre}</h3>
        <p>${precio}</p>
        {items && (
        <ul className="Producto__detalles">
          {items.map((detalle, index) => (
            <li key={index}>{detalle}</li>
          ))}
        </ul>
      )}
        <Link className='Producto__btn' to={`/item/${id}`}>
        <button className='theBTN'>
          Agregar al carrito
        </button>
        </Link>
    </div>
  )
}

export default Item