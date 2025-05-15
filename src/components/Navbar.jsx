import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const link = [
        {
            path: '/',
            label: 'Homepage',
        },
        {
            path: '/about',
            label: 'About',
        },
        {
            path: '/actors',
            label: 'Actors',
        }
    ];

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        {link.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={item.path}>{item.label}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
