import { Outlet, Link } from "react-router-dom";

const Template  = () => {
    
    return ( 
        <>
        <div className="title-nav-container">
        <h1>Best Quiz Ever</h1>
        <nav>
            <ul>
                <li>
                    <Link to = "/"> Home</Link>
                </li>
                <li>
                    <Link to = "/question"> Current Question!!!</Link>
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