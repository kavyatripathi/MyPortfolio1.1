import React from 'react';
import './navigationItems.scss';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className = "NavigationItems">
        <NavigationItem link="/">About Me</NavigationItem>
        <NavigationItem link="/skills">Skills</NavigationItem>
        <NavigationItem link="/work">Work</NavigationItem>
        <NavigationItem link="/">Resume</NavigationItem>
    </ul>
);
export default navigationItems;