import React from "react";
import {LeftSidebar, MainContainer, MainContent, StarsType1, StarsType2, StarsType3} from "./Layout.styled";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

interface LayoutProps {
    children: JSX.Element
}
const Layout = ({children} : LayoutProps) => {
    return (
        <>
            <StarsType1 />
            <StarsType2 />
            <StarsType3 />
            <MainContainer>
                <LeftSidebar>
                    <Logo />
                    <Navigation />
                </LeftSidebar>
                <MainContent>
                    {children}
                </MainContent>
            </MainContainer>
        </>
    )
}

export default Layout;