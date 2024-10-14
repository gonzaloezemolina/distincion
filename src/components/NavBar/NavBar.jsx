import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    const logoNav = "../img/logo.png"
    return (
            <header>
                <Link to={"/"}>
                    <img className='nav-logo' title='Home' src={logoNav} alt="Logo" />
                </Link>


                <nav>
                    <ul className='navItems'>
                        <li>
                            <NavLink to={"/categoria/2"}>
                            Desayunos y meriendas
                            </NavLink>
                        </li>
                        

                        <li>
                            <NavLink to={"/categoria/3"}>
                            Menú diario
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={"/categoria/4"}>
                            Catering
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={"/categoria/5"}>
                            Saludables
                            </NavLink>
                        </li>
                        
                    </ul>
                </nav>

                <div>
                    <CartWidget />
                </div>
            </header>
    )
}

export default NavBar