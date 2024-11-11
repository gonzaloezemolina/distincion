import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {

    const saludables = '../img/saludable.webp';
    const catering = '../img/torta.webp';
    const desayunos = '../img/desayunos.png';
    const platos = '../img/vaso-cafe.jpg';

  return (
    <div className='home'>
        {/* Aca va el grid que divide en 2 */}
        <section className='home_our_products'> 
                <div className='home_title' >
                    <h1>Nuestros productos</h1>
                    <button className='home_btn'>
                        Ver todos
                    </button>
                </div>
        {/* Aca va el grid que divide en 4  */}
                <div className='home_prod'>
                    <article className='home_prod_art' >
                    <Link to={"/categoria/2"}>
                        <img src={desayunos} className='home_prod_img' alt="Toca para ingresar a la seccion de productos de cuadernos" />
                        <h2 className='home_prod_sub'>Desayunos y meriendas</h2>
                        </Link>
                    </article>

                    <article className='home_prod_art'>
                    <Link to={"/categoria/3"}>
                    <img src={platos} className='home_prod_img' alt="Toca para ingresar a la seccion de productos de agendas" />
                        <h2 className='home_prod_sub'>Platos listos</h2>
                    </Link>
                    </article>

                    <article className='home_prod_art'>
                    <Link to={"/categoria/4"}>
                    <img src={catering} className='home_prod_img' alt="Toca para ingresar a la seccion de productos de libretas" />
                        <h2 className='home_prod_sub'>Catering</h2>
                    </Link>
                    </article>

                    <article className='home_prod_art'>
                <Link to={"/categoria/5"}>
                        <img src={saludables} className='home_prod_img' alt="Toca para ingresar a la seccion de productos de llaveros" />
                        <h2 className='home_prod_sub'>Saludables</h2>
                </Link>
                    </article>
                </div>
        </section>
    </div>
  )
}

export default Home