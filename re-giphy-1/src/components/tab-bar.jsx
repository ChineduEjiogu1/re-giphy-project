import { HStack, Box, Link } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";
const Tab = () => {
    return (
        <header>
            <nav>
                <HStack direction="horizontal" m={3}>
                    <NavLink to="random">Random</NavLink>
                    <NavLink to="search">Search</NavLink>
                    <NavLink to="trending">Trending</NavLink>
                </HStack>
            </nav>
        </header>
    );
}

export default Tab;