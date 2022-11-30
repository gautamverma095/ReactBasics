import React from 'react'
import { Link } from 'react-router-dom'

const links = [
    {
        path: "/",
        title: "Home"
    },

    {
        path: "/about",
        title: "About"
    },
    {
        path: "/contact",
        title: "Contact"
    },
    {
        path: "/users",
        title: "Users"
    }
]



const Navbar = () => {
    return (
        <div>

            {
                links.map((link) => {
                    return (
                        <Link  key={link.path} to={link.path}>{link.title}</Link>
                    )
                })
            }


        </div>
    )
}

export default Navbar