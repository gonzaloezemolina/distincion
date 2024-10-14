// import { useState, useEffect } from 'react'
// import './ItemListContainer.css'
// import ItemList from '../ItemList/ItemList'
// import { useParams } from 'react-router-dom'
// import {db} from '../../services/config';
// import { collection, getDocs, where, query } from 'firebase/firestore';
// import Banner from '../Banner/Banner';
// import Home from '../Home/Home';
// import SecondBanner from '../SecondBanner/SecondBanner';


// const ItemListContainer = () => {
//   const [productos, setProductos] = useState([]);
//   const {idCategoria} = useParams();

//   useEffect( ()=> {
//     const Productos = idCategoria ? query(collection(db, "inventarios"), where("idCat", "==", idCategoria)) : collection(db, "inventarios");

//     getDocs(Productos)
//       .then(respuesta => {
//         const nuevosProductos = respuesta.docs.map(doc => {
//           const data = doc.data()
//           return {id:doc.id, ...data}
//         })
//         setProductos(nuevosProductos);
//       })
//   },[idCategoria])

//   return (
//     <>
//       <Banner/>
//       <Home/>
//       <SecondBanner/>
//       <h2 className='tituloPrincipal'>Nuestros destacados</h2>
//       <ItemList productos={productos} />
//     </>
//   )
// }

// export default ItemListContainer



// implementaciones

import { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../services/config';
import { collection, getDocs, where, query } from 'firebase/firestore';
import Banner from '../Banner/Banner';
import Home from '../Home/Home';
import SecondBanner from '../SecondBanner/SecondBanner';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("");
  const { idCategoria } = useParams(); // Obtenemos la categoría desde la URL

  useEffect(() => {
    // Dependiendo de si hay o no categoría seleccionada, hacemos la consulta adecuada
    let Productos;

    if (idCategoria) {
      // Si hay categoría seleccionada, solo filtramos por categoría
      Productos = query(collection(db, "inventarios"), where("idCat", "==", idCategoria));
      setTitulo("Nuestros productos")
    } else {
      // Si no hay categoría (es la ruta "/"), solo mostramos productos con "highlighted" igual a true
      Productos = query(collection(db, "inventarios"), where("highlighted", "==", true));
      setTitulo("Nuestros destacados")
    }

    getDocs(Productos)
      .then(respuesta => {
        const nuevosProductos = respuesta.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      });
  }, [idCategoria]); // Cada vez que cambie la categoría, se ejecuta el efecto

  return (
    <>
      <Banner />
      {/* Mostrar Home y SecondBanner solo si no hay categoría seleccionada */}
      {!idCategoria && (
        <>
          <Home />
          <SecondBanner />
        </>
      )}
      <h2 className='tituloPrincipal'>{titulo}</h2>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
