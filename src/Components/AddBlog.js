import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import {actionCreators} from "../State/index"

export const AddBlog = () => {

    const navigate = useNavigate();
    const state = useSelector(state => state.blog)

    const uid = function(){
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    console.log(state)

    const [inputs, setInputs] = useState({
        id: state.length + 1,
        title: "",
        description: "",
        likes: 0
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs)
        actions.addBlog(inputs);
        console.log(actions.listBlog)
        navigate("/")
    }

    const dispatch = useDispatch();
    const actions = bindActionCreators(actionCreators, dispatch)


    return (
        <div className="container">
            <button className="btn btn-primary" onClick={() => navigate(-1)}>Back</button>
            <h3 className="my-5">Add Blog</h3>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Title</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Learn Python" onChange={
                ({target}) => setInputs(state => ({...state, title:target.value}))
                } 
                value={inputs.title || ""} />
                </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={
                ({target}) => setInputs(state => ({...state, description:target.value}))
                } 
                value={inputs.description || ""}></textarea>
            </div>
            <div className="mb-3">
                <button type="submit" onSubmit={handleSubmit} className="btn btn-primary">Add Blog</button>
            </div>
            </form>
        </div>
    )
}