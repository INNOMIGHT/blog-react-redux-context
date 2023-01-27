import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators } from "../State/index";

export const BlogList = () => {
    const blogState = useSelector(state => state.blog)

    const dispatch = useDispatch();
    const actions = bindActionCreators(actionCreators, dispatch)

    const deleteBlog = (id) => {
        actions.deleteBlog(id);
    }

    const state = useSelector(state => state.blog)

    return (
            <div className="container my-3">
            
            
            <div className="row">
                <div className="col-8 blog-panel">
            <ul>
                {blogState.map((blog) => {
                    return(
                    
                    <li className="blog-single my-5">
                    <div className="blog-header">
                        <h4>{blog.title}</h4>
                    </div>
                    <b>By Nasus and Renekton - </b> 5 min read 
                    <div className="blog-description">
                    <br />
                        <p>{blog.description}</p>
                    </div>
                    <Link to={`/blog-react-redux-context/blogs/${blog.id}`}><button type="button" className="btn btn-light">Read More...</button></Link>
                    <button className="btn btn-light mx-3" onClick={() => deleteBlog(blog.id)}>Delete</button>
                </li>
                )})}
            </ul>
            
            
            </div>
            <div className="vertical-line col-1">
            </div>
            <div className="col-3 side-panel">
            
                <img src="https://www.invajy.com/wp-content/uploads/2019/12/Short-Quotes.jpeg" className="side-images" />
                <img src="https://shotkit.com/wp-content/uploads/2017/12/Best_Photography_Quotes_Shotkit_018.jpg" className="side-images" />
                
            </div>
            </div>
        </div>
    )
}