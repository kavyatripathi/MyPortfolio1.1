import React from 'react';
import './Navbar.scss';
//import Logo from '../../../Image/My.png';
import NavigationItems from '../NavigationItems/navigationItems';
const navbar = () => (
    <header className="Navbar">
        
        <nav>
            <NavigationItems/>
        </nav>
    </header>
)
export default navbar;