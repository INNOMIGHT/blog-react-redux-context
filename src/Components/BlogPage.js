import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import  LikeContext from "../Contexts/LikeContext";
import { actionCreators } from "../State/index";

export const BlogPage = () => {

    const state = useSelector(state => state.blog)
    const navigate = useNavigate();
    const params = useParams();

    const dispatch = useDispatch();
    const actions = bindActionCreators(actionCreators, dispatch)

    const blogId = params.blogId

    const selectedBlog = state[blogId-1]
    console.log(selectedBlog)

    const context = useContext(LikeContext) 



    const editBlog = (id) => {
        actions.deleteBlog(selectedBlog.id)
        navigate(`/blog-react-redux-context/blogs/${id}/edit`)
    }




    return (
        <div className="container">
            <br />
            <Link to="/blog-react-redux-context"><button className="btn btn-light"> All Blogs</button></Link>
            <br />
            <br/>
            <h3>{selectedBlog.title}</h3>
            <br />
            <p>
                {selectedBlog.description}
            </p>
            <br />
            <b>- Your Name</b> <br /><br />
            <button className="btn btn-dark my-3" onClick={() => editBlog(blogId)}>Edit Blog</button>
            <hr className="my-3"/>
            <button className="btn btn-primary" onClick={() => context.addLike(selectedBlog)}>Like {context.likes}</button>
            <br /> <br />
            <h4 className="mx-3">Comments</h4>

        </div>
    )
}