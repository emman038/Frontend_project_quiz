import { Outlet, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Template  = () => {
    
    return ( 
        <>
        <div className="title-nav-container first-color">
        <h1>Best Quiz Ever</h1>
        <nav>
            <ul>
                <li>
                    <NavLink to = "/" activeClassName="active" className="link"> Home</NavLink>
                </li>
                <li>
                    <NavLink to = "/question" activeClassName="active" className="link"> Current Question</NavLink>
                </li>
            </ul>
        </nav>
        </div>

        <section className="outlet-container">
            <Outlet/>
        </section>

        <footer>
            <p>This is the footer</p>
        </footer>
        </>
     );
}
 
export default Template ;