import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../services/config';
import { getDoc, doc,} from 'firebase/firestore';



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { idItem } = useParams();

    useEffect(() => {
        const nuevoDoc = doc(db, "inventarios", idItem);

        getDoc(nuevoDoc)
            .then(respuesta => {
                const data = respuesta.data();
                const nuevoProducto = { id: respuesta.id, ...data }
                setProducto(nuevoProducto);
            })
            .catch(error => console.log(error))
    }, [idItem])


    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    )


    
}

export default ItemDetailContainer