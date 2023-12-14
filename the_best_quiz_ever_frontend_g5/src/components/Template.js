import { Outlet, Link } from "react-router-dom";

const Template  = () => {
    
    return ( 
        <>
        <div className="title-nav-container first-color">
        <h1>Best Quiz Ever</h1>
        <nav>
            <ul>
                <li>
                    <Link to = "/" className="link"> Home</Link>
                </li>
                <li>
                    <Link to = "/question" className="link"> Current Question!!!</Link>
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