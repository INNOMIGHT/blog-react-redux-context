import React from "react"
import { Link, useNavigate } from "react-router-dom"

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav class="navbar navbar-light bg-light justify-content-between container">
            <Link to="/blog-react-redux-context" class="navbar-brand">My Blogs</Link>
            <form class="form-inline">
            <button className="btn btn-dark mx-3" onClick={() => navigate('/blog-react-redux-context/add-blog')}>Write</button>
                <button className="btn btn-dark" onClick={() => navigate('/blog-react-redux-context/about')}>About</button>
            </form>
        </nav>
                       
    )
}