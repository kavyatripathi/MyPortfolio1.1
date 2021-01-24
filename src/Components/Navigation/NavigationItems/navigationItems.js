import React from 'react';
import './navigationItems.scss';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className = "NavigationItems">
        <NavigationItem link="/">About Me</NavigationItem>
        <NavigationItem link="/skills">Skills</NavigationItem>
        <NavigationItem link="/work">Work</NavigationItem>
        <NavigationItem link="https://drive.google.com/file/d/1dJH9wCsVynregfDyrKPPPKhW0lCnMM79/view?usp=sharing">Resume</NavigationItem>
    </ul>
);
export default navigationItems;