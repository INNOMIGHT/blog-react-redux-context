import React from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav class="navbar brand-bar">
            <div class="container-fluid">
                <div className="container">
                <a class="navbar-brand brand" href="#">
                Blog System
                </a>
                </div>
                <Link to="/add-blog"><button className="btn btn-light mx-5">Write</button></Link>
            </div>
        </nav>
    )
}