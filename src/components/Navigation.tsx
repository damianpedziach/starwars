import React from "react";
import {Menu, MenuItem} from "../pages/Layout.styled";
import { navigationRoutes } from "../routes";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <Menu>
            {navigationRoutes.map((route) => (
                <MenuItem key={route.path}>
                    <Link to={route.path}>{route.displayName}</Link>
                </MenuItem>
            ))}
        </Menu>
    )
}

export default Navigation;