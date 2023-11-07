import React from "react";
import logo from "../img/logo.png";
import {Link} from "react-router-dom";
import {paths} from "../routes";

const Logo = () => (
    <Link to={paths.HOME}>
        <img src={logo} alt="Star Wars logo" />
    </Link>
)

export default Logo;