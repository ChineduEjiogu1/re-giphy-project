import { NavLink } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <HStack className="p-3" direction="horizontal" m={3}>
            <div className="p-2 bg-light border">
                <NavLink to="random">Random</NavLink>
            </div>
            <div className="p-2  bg-light border">
                <NavLink to="search">Search</NavLink>
            </div>
            <div className="p-2  bg-light border">
                <NavLink to="trending">Trending</NavLink>
            </div>
        </HStack>

    );
}

export default Navbar;